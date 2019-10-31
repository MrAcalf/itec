import Styled from 'styled-components'
import bg from '../../images/BGpattern.png'

const PagesStyle = Styled.div`
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');
    height: 100vh;
    padding: 40px 5rem;
    margin: 0;
    text-align: justify !important;
    font-family: 'Bree Serif', serif;
    background: 
    /* top, transparent red */ 
    linear-gradient(
    to bottom right,
      #ffffffff, 
      #ffffffea
    ),
    /* bottom, image */
    url(${bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;


    @media (max-width: 500px){
        padding: 20px 3rem;
    }

    @media (max-width: 420px){
        padding: 20px 1rem;
    }
    
    p{
        font-family: 'Bree Serif', serif;
        font-size: 1rem;
    }
    
    ul{
        padding-left: 20px;
    }

    li{
        font-family: 'Bree Serif', serif;
        font-size: 1rem;
    }

    @media (min-width: 1350px){        
        p{
            font-family: 'Bree Serif', serif;
            font-size: 1.3rem;
        }

        li{
            font-family: 'Bree Serif', serif;
            font-size: 1.3rem;
        } 

        h1{
            font-family: 'Josefin Sans', sans-serif;
            font-size: 1.9rem;
        }  
        
        h2{
            font-family: 'Josefin Sans', sans-serif;
            font-size: 1.7rem;
        }

        h4{
            font-family: 'Josefin Sans', sans-serif;
            font-size: 1.3rem;
        }
    }

`

export default PagesStyle