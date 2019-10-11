import Styled from 'styled-components'

const Title = Styled.h1`
    color: ${props => props.main ? "white" : "#555"};
    font-size: ${props => props.primary ? "1.8em" : "2.5em"};
`

export default Title