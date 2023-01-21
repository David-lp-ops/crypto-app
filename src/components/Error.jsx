import styled from '@emotion/styled'

const Texto= styled.p`
    background-color: #b7322c;
    padding: 15px;
    font-size: 22px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;

    `
const Error = ({children}) => {
  return (
    <Texto>
        {children}


    </Texto>
  )
}

export default Error