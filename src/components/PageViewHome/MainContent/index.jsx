import React from 'react'
import Styled from 'styled-components'
import Title from '../../../styled-components/Title'
import FooterSite from '../../../styled-components/Footer'

const Style = Styled.article`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%; 
    

    h1{
        visibility: hidden;
        position: fixed;
    }

    h2{
        text-align: center;
        padding: 0 auto;
        text-shadow: 2px 2px 3px #000;
        margin-top: 35px;
        color: #ffffff;
        width: 75%;
    }

    @media (min-width: 600px){
        h2{
            align-self: center;
        }
    }

    @media (max-width: 599px){
        h2{
            align-self: left;
            text-align: left;
        }
    }

    @media (max-width: 439px){
        h2{
            align-self: center;
            text-align: center;
            font-size: 1.4rem;
            width:100%;
        }
    }

    @media (max-width: 325px){
        h2{
            align-self: center;
            font-size: 1.2rem;
        }
    }

`
const Button = Styled.a`
    position: fixed;
    align-self: center;
    bottom: 80px;
    text-decoration: none;
    padding: 12px 15px 15px 15px;
    font-size: 22px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 8px;

    :hover{
        background-color: #28B46344;
        color: #fff;
    }

    :active{
        background-color: #ffffff;
        color: #28B463;
    }

    
`

const MainContent = (_props) => {
    return (
        <>
            <Style>
                <Title main className='hidden' >Info Tech</Title>
                <h2 className='hidden'>
                    TUDO para sua empresa nas áreas de Informática e Tecnologia da Informação
                </h2>
                <Button 
                href='tel:011981824313'
                target="_blank" 
                rel="noopener noreferrer">Ligue me</Button>
                <FooterSite primary={true}/>
            </Style>            
        </>
    )
}

export default MainContent