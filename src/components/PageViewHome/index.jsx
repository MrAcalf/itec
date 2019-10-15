import React from 'react'
import Styled from 'styled-components'
import NavbarNav from './NavbarNav'
import MainContent from './MainContent'
// import gif from '../../images/Info-Tech-Gif.gif'

const Style = Styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    
    background: linear-gradient(
      #34425155, 
      #34425133
    ),
    url(https://media.giphy.com/media/JOQdXFxZzvyBdoD0me/giphy.gif); 
    background-position: center;
    background-size: cover;   

    @media (max-width:960px){
        background: linear-gradient(
      #34425155, 
      #34425133
    ),
    url(https://media.giphy.com/media/IgdLc135Be0BjdjbTI/giphy.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
    
    display: flex;
    flex-direction: column;
`

const PageViewHome = (_props) => {
    return (
        <>
            <Style alt='Tela principal do site. Landing Page'>
                <NavbarNav primary={true} />
                <MainContent />
            </Style>            
        </>
    )
}

export default PageViewHome