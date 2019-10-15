import React from 'react'
import Styled from 'styled-components'
import Title from '../../../styled-components/Title'

const Style = Styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0.8;
    padding: 0 50% 0 3rem;
    text-align: left;
    margin-top: 3rem;

    h1{
        color: #ffffffcc;
        margin-bottom: 30px; 
    }

    h2{
        color: #ffffffcc;
        margin-bottom: 2rem;
    }

    @media(max-width: 375px){
        margin-top: 1.5rem;
    }

    @media(max-width: 570px){
        padding: 0 3rem;
    }
`
const Button = Styled.a`
    display: inline-block;
    font-size: 1.5em;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background-color: white;
    color: black;    
    border: 2px solid white;
    align-self: left;
    text-decoration:none;
    text-align: center;

    :hover{
        background-color: white;
        box-shadow: 2px 3px 12px #ffffffaa;
        color: black;
    }

    :active{
        background: transparent;
        color: white;      
        box-shadow: none;  
        border: 2px solid white;
    }

    
`

const MainContent = (_props) => {
    return (
        <>
            <Style>
                <Title main>Info Tech</Title>
                <h2>Aqui será onde finalmente você encontrará TUDO 
                    que precisa nas áreas de Informática e Tecnologia da Informação
                </h2>
                <Button 
                href='https://wa.me/5511981824313' 
                target="_blank" 
                rel="noopener noreferrer">Ligue me</Button>
            </Style>            
        </>
    )
}

export default MainContent