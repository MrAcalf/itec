import React from 'react'
import NavbarNav from '../PageViewHome/NavbarNav'
import PagesStyle from '../../styled-components/PagesStyle'
import Estilo from './style'
import FooterSite from '../../styled-components/Footer'


const PageViewMissao = (_props) => {
    return (
        <>
            <NavbarNav />
            <PagesStyle>
                <Estilo>
                    <h1>Missão, visão e valores</h1>
                    <p>
                        A seguir os pilares que determinam o norte da nossa cultura empresarial.                        
                    </p>
                    <br/>
                    <h2>Nossa Missão</h2>
                    <br/>
                    <p>
                        Nosso intuito é o de proporcionar ao cliente total tranquilidade e meios para utilizar todos os recursos que necessitar na área de informática e informação, com completa segurança, conforto e com um custo acessível.
Satisfazer as necessidades de nossos clientes através da busca incessante pela excelência e competitividade no mercado, oferecendo produtos e serviços diferenciados, personalizados, com qualidade e celeridade na instalação e manutenção de equipamentos eletrônicos.
                    </p>
                    <br/>
                    <h2>Nossa Visão</h2>
                    <br/>
                    <ul>
                        <li>Ser referencial de excelência no segmento de vendas e prestação de 
                            serviços informática.</li>
                        <li>Continuar oferecendo produtos personalizados, customizados com inovação e 
                            originalidade, para aqueles que buscam o diferencial em atendimento.</li>
                        <li>Ter como resultado o reconhecimento e fidelidade de nosso cliente.</li>
                    </ul>
                    <br/>
                    <h2>Nossos Valores</h2>
                    <br/>
                    <ul>
                        <li><strong>Ética</strong>: Atuar com seriedade, comprometimento e responsabilidade.</li>
                        <li><strong>Excelência</strong>: Trabalhar a melhoria contínua dos processos, resultados e 
                            satisfação das necessidades presentes e futuras dos clientes, superando (sempre) 
                            suas expectativas. O cliente satisfeito é a razão de todo nosso esforço.
                        </li>
                        <li><strong>Confiabilidade</strong>: Construir relacionamentos abertos, transparentes e sólidos, 
                            sempre apoiados na confiabilidade mútua.
                        </li>
                        <li><strong>Capacitação</strong>: Promover e estruturar o desenvolvimento pessoal e profissional 
                            por meio de aprimoramento do saber. Acreditamos no trabalho com paixão, 
                            entusiasmo, inspiração e criatividade.
</li>
                        <li><strong>Inovação e Tecnologia</strong>: Criatividade e investimentos conscientes com o valor 
                            agregado aos processos e à satisfação do cliente.</li>
                        <li><strong>Profissionalismo</strong>: Ser bom no que faz e eficaz, usando de discernimento e 
                            coerência com um preço justo.</li>
                    </ul>
                    <br/>
                    <p><strong>Resultados</strong>: Acreditamos no trabalho dinâmico, rápido e ágil que atenda todas as necessidades do cliente.</p>

                </Estilo>
            </PagesStyle>      
            <FooterSite/>
        </>
    )
}

export default PageViewMissao