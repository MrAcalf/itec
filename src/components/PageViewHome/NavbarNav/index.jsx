import React from 'react'
import NavbarStyle from '../../../styled-components/NavbarStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../styled-components/Logo'

const NavbarNav = (_props) => {
    return (
        <>
        <NavbarStyle />
            <header className='nav' alt='Cabeçalho'>
                <input type='checkbox' id='nav-check' alt='Checkbox invisível. Dá função ao ícone responsivo'/>
                <div className='nav-header' alt='Logotipo da empresa Info Tech'>
                    <div className='nav-title'>
                        <a href="/">
                            <Logo />
                        </a>
                    </div>                    
                </div>
                <div className='nav-btn' alt='Divisoria do ícone responsivo, visível em mobile'>
                    <label htmlFor='nav-check'>
                        <FontAwesomeIcon icon={faBars} size='2x'alt='ícone responsivo: Menu'/>
                    </label>
                </div>
                <nav className='nav-links' alt='links para navegação'>
                    <a href="#servicos" alt='sessão serviços' rel="noopener noreferrer">Serviços</a>
                    <a href="#tecnologias" alt='sessão tecnologias' rel="noopener noreferrer">Tecnologias</a>
                    <a href="#contato"alt='sessão contato' rel="noopener noreferrer">Contato</a>
                </nav>               
            </header>
        </>
    )
}

export default NavbarNav