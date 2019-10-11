import React from 'react'
import Styled from 'styled-components'
import logo from '../../images/LOGO-ITEC.png'

const Logo = Styled.img`
    height: 35px;
`
const Logotipo = () => {
    return (
        <>
            <Logo src={logo} alt="Logo Itec" />
        </>
    )
}

export default Logotipo