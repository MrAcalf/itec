import React from 'react'
import NavbarNav from '../PageViewHome/NavbarNav'
import Estilo from './style'
import PagesStyle from '../../styled-components/PagesStyle'


const PageViewEmpresa = (_props) => {
    return (
        <>
            <NavbarNav />
            <PagesStyle>
                <Estilo>
                      
                    <h1>Um pouco da nossa historia</h1>
                    <br/>
                    <p>A InfoTech está no mercado atendendo clientes físicos e corporativos desde 2000, sempre visando o melhor atendimento e a satisfação do cliente.

Durante os anos de 2000 a 2004 estivemos presentes na capital, desenvolvendo serviços e venda. No ano de 2005 a empresa migrou para Guaratinguetá onde conseguimos aos poucos garantir nossa parte no mercado e o fechamento de parcerias locais tornando-se a InfoTech.Com.

Em 2006 a InfoTech.com se tornou InfoTech&Cia, na junção com a Soft&Cia visando abranger ainda mais os clientes da nossa região.
Graças a nossa experiência profissional e equipamentos de ultima geração oferecemos ao nosso cliente o que há de melhor e mais novo em tecnologia agregada não somente a nossos serviços como em vendas e na manutenção de suas máquinas e empresas.

Dentre nossas especializações estão o desenvolvimento completo e implantação de redes corporativas em hotéis, lojas, escritórios, lan- houses e particulares, incluindo redes WI-FI. Fornecemos pesquisa de mercado na implantação de novas lan-houses e escolas de informática, bem como todo auxílio pós-vendas com planos exclusivos visando à atração de novos clientes.

Ainda dentro da área corporativa prestamos consultoria completa às empresas ou clientes que necessitem de uma adequação ao mercado atual na área administrativa e marketing concomitante a área de tecnologia da informação.

Nosso intuito é o de poder proporcionar ao cliente total tranquilidade para utilizar todos os recursos que necessitar na área de informática e informação, com completa segurança, conforto e agilidade.
</p>
                    <br/>

                    <h2>A nossa equipe</h2>
                    <br/>
                    <p>A equipe da Info Tech é formada por profissionais altamente qualificados que colaboram com a nossa
                    marca entregando qualidade e satisfação com valores justos para nossos clientes e parceiros.

                    Estão nossos profissionais separados em duas áreas:
                    </p>
                    <br/>

                    <h4>Área 1 - Hardware e Infra extrutura</h4>
                    <br/>
                    <ul>
                        <li>Técnicos em Manutenção de Computadores</li>
                        <li>Técnicos em Redes (cabeada e wireless)</li>
                        <li>Técnicos em Manutenção de Servidores</li>
                        <li>Técnicos em Cabeamento</li>
                        <li>Técnicos em Notebook</li>
                        <li>Técnicos em Impressoras</li>
                    </ul>

                    <br/>

                    <h4>Área 2 - Software e mídias digitais</h4>
                    <br/>
                    <ul>
                        <li>Técnicos em Programação</li>
                        <li>Designer Gráfico</li>
                        <li>Web Master</li>
                        <li>Marketing Digital</li>
                        <li>Analista e Desenvolvedor de Sistemas</li>
                        <li>Desenvolvedor React</li>
                    </ul>
                    <br/>
                    <h2>Nossos Clientes</h2>
                    <br/>
                    <ul className='clientes'> 
                        <li>Léo Rodas</li>                                               
                        <li>Salvador Advocacia</li>
                        <li>Malaquias Odontologia</li>
                        <li>QiWi</li>
                        <li>Hotel Estação de Minas</li>
                        <li>Suspencar</li>
                        <li>IPC Projetos e Serviços Técnicos para Caldeiraria</li>
                        <li>CIA de Alimentos Glória</li>
                        <li>Multi Cred</li>                        
                        <li>Contabilidade Luiz Cláudio</li>
                        <li>Patrícia Garcia Boutique</li>
                        <li>Kero-Mais Panificadora</li>
                        <li>Clube dos 500 - Hotel e Golfe</li>
                    </ul>
                    <br/>
                    <h2>Parceiros</h2>
                    <br/>
                    <ul className='clientes'>
                        <li>Pirâmide Informática e Eletrônicos Ltda - São Paulo</li>
                        <li>MRA Web Design</li>
                        <li>Vector TI</li>
                    </ul>

                </Estilo>
            </PagesStyle>     
        </>
    )
}

export default PageViewEmpresa