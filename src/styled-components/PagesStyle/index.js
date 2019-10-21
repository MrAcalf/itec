import Styled from 'styled-components'

const PagesStyle = Styled.div`
    padding: 20px 5rem;
    margin: 0;
    text-align: justify !important;

    @media (max-width: 500px){
        padding: 20px 3rem;
    }

    @media (max-width: 420px){
        padding: 20px 1rem;
    }
    
    p{
        font-size: 1rem;
    }
    
    ul{
        padding-left: 20px;
    }

    li{
        font-size: 1rem;
    }

`

export default PagesStyle