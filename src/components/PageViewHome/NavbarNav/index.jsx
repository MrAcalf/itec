import React from 'react'
import NavbarStyle from '../../../styled-components/NavbarStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../styled-components/Logo'
import { Link } from 'react-router-dom'

const NavbarNav = (_props) => {
    return (
        <>
        <NavbarStyle primary={_props.primary} />
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
                    <Link to="/">Home</Link>
                    <Link to="/empresa">A empresa</Link>
                    <Link to="/missao">Nossa Missão</Link>
                    <Link to="/servicos">Tabela de serviços</Link>
                </nav>               
            </header>
        </>
    )
}

export default NavbarNav