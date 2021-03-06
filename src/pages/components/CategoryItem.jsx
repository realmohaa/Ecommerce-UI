import styled from "styled-components";
import { useSpring, animated } from 'react-spring'
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled(animated.div)`
  flex: 1;
  margin:6px;
  height: 65vh;
  position: relative;
  ${mobile({margin: "2px 8px"})}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:1em;
  ${mobile({height: "22vh", objectPosition:"100% 30%"})}
`
const Details = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: #FFF;
    margin-bottom: 25px;
    ${mobile({fontSize: "22px",marginBottom: "15px"})}
`
const Button = styled.button`
    border: none;
    border-radius: 1em;
    padding: 10px;
    background-color: #FFF;
    font-weight: 600;
    cursor: pointer;
    transition: .2s all ease-in-out;
    &:hover {
        padding: 15px;
        font-size: 15px
    }
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1]
const trans = (x, y, s) => `perspective(100vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const CategoryItem = ({item}) => {
    const [props, set] = useSpring(() => ({ xys: [0,0,1]}));
    return (
        <Container 
        onMouseMove={({clientX: x, clientY: y}) => (set({xys:calc(x,y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{transform: props.xys.to(trans)}}>
            <Image src={item.img}/>
            <Details>
                <Title>{item.title}</Title>
                <Link to="/products"><Button>SHOP NOW</Button></Link>
            </Details>
        </Container>
    );
};

export default CategoryItem;
