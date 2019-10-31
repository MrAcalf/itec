import Styled from 'styled-components'

const FooterStyle = Styled.footer`
background-color: #ffffff44;
color: ${props => props.primary ? '#fff' : '#333'};
font-size: 9px;
margin: 0;
height: 30px;
width: 90px;
border-radius: 3px;
position: ${props => props.primary ? 'absolute' : 'fixed'};
bottom: 15px;
right: 1rem; 
display: flex;
display: -webkit-flex;
align-items: center;
-webkit-align-items: center;
justify-content: center;
-webkit-justify-content: center

img{
    width: 20px;
    margin-left: 5px;
}

`

export default FooterStyle