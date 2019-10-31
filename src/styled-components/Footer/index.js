import React from 'react'
import FooterStyle from './style'
import logo from '../../images/MRA Logo.png'


const FooterSite = (_props) => {
    return (
        <>
            <FooterStyle primary={_props.primary}>
                Web Design: <a href='https://mra-web-design.com.br/' target='_blank' rel='noopener noreferrer'><img src={logo}/></a>
            </FooterStyle>              
        </>
    )
}

export default FooterSite