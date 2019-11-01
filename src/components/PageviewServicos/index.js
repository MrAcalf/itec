import React from 'react'
import NavbarNav from '../PageViewHome/NavbarNav'
import PagesStyle from '../../styled-components/PagesStyle'
import Estilo from './style'
import FooterSite from '../../styled-components/Footer'

const PageViewServicos = (_props) => {
    return (
        <>
            <NavbarNav />
            <PagesStyle>
                <Estilo>
                    <h1>SERVIÇOS</h1>
                    <br/>
                    <div className="tabela">
                        <div className='linha cabecalho'>
                            <div className='elemento'>Serviços</div>
                            <div className='elemento'>Guará</div>
                            <div className='elemento'>Aparecida</div>
                            <div className='elemento'>Lorena</div>
                            <div className='elemento'>Cunha</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Visita</div>
                            <div className='elemento'>R$ 175,00</div>
                            <div className='elemento'>R$ 175,00</div>
                            <div className='elemento'>R$ 175,00</div>
                            <div className='elemento'>R$ 275,00</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Hora Técnica</div>
                            <div className='elemento'>R$ 110,00</div>
                            <div className='elemento'>R$ 110,00</div>
                            <div className='elemento'>R$ 110,00</div>
                            <div className='elemento'>R$ 110,00</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Formatação ou readequação de ESTAÇÃO (unid.)</div>
                            <div className='elemento'>R$ 125,00</div>
                            <div className='elemento'>R$ 125,00</div>
                            <div className='elemento'>R$ 125,00</div>
                            <div className='elemento'>R$ 125,00</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Formatação ou readequação de SERVIDOR (unid.)</div>
                            <div className='elemento'>R$ 250,00</div>
                            <div className='elemento'>R$ 250,00</div>
                            <div className='elemento'>R$ 250,00</div>
                            <div className='elemento'>R$ 250,00</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Reconfiguração de REDE (Por PC)</div>
                            <div className='elemento'>R$ 75,00</div>
                            <div className='elemento'>R$ 75,00</div>
                            <div className='elemento'>R$ 75,00</div>
                            <div className='elemento'>R$ 75,00</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Configurar Rede ou Server</div>
                            <div className='elemento'>R$ 120,00</div>
                            <div className='elemento'>R$ 120,00</div>
                            <div className='elemento'>R$ 120,00</div>
                            <div className='elemento'>R$ 120,00</div>
                        </div>
                        <div className='linha'>
                            <div className='elemento'>Trocar peças (por PC)</div>
                            <div className='elemento'>R$ 75,00</div>
                            <div className='elemento'>R$ 75,00</div>
                            <div className='elemento'>R$ 75,00</div>
                            <div className='elemento'>R$ 75,00</div>
                        </div>
                    </div>
                </Estilo>
            </PagesStyle> 
            <FooterSite/>                   
        </>
    )
}

export default PageViewServicos