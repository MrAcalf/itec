import React from 'react'
import Styled from 'styled-components'
import NavbarNav from './NavbarNav'
import MainContent from './MainContent'
import itecGif from '../../images/gif_final.gif'

const Style = Styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    
    background: linear-gradient(
      #34425155, 
      #34425133
    ),
    url(${itecGif}); 
    background-position: center;
    background-size: cover;   
    background-position: 61% 50%;
    background-size: 89% 100%;

    @media (max-width:875px){
        background: linear-gradient(
      #34425155, 
      #34425133
    ),
    url(${itecGif});
    background-repeat: no-repeat;
    background-position: 30% 50%;  
    background-size: 110% 100%;
    }
    

    @media (max-width:600px){
        background: linear-gradient(
      #34425155, 
      #34425133
    ),
    url(${itecGif});
    background-repeat: no-repeat;
    background-position: 42% 50%;  
    background-size: 150% 100%;
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