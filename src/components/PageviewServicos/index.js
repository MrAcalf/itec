import Styled from 'styled-components'

const Estilo = Styled.div`
    margin: 0;
    padding: 0;

    div{
        margin:0;
        padding:0;
    }

    .tabela{
        border-radius: 5px;
        box-shadow: 1px 3px 5px #888;
    }

    .linha{
        display: flex;
        flex-direction: row;
    }

    .linha:hover{
        background-color: palegreen;
    }

    .elemento{
        text-align: center;
        font-size: 1rem;
        padding: 4px;
        flex: 1;
        align-self: center;
    }

    .cabecalho{
        font-weight: bold;
    }

    @media (max-width: 370px){
        .elemento{
        font-size: 0.8rem;
        }
    }

    
`

export default Estilo