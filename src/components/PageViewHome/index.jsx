import React from 'react'
import Styled from 'styled-components'
import NavbarNav from './NavbarNav'
import MainContent from './MainContent'
import itecGif from '../../images/GIF-ITEC---RS.gif'

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

    @media (max-width:600px){
        background: linear-gradient(
      #34425155, 
      #34425133
    ),
    url(${itecGif});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200% 100%;
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