
import styled from '@emotion/styled'

const Resultados = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;
    

`
const Imagen= styled.img`
display: block;
width: 120px;
`
const Texto= styled.p`
font-size: 18px;
    span{
        font-weight: 700;

    }
`

const Precio= styled.p`
    font-size: 24px;
    span{
        font-weight: 700;

    }

`
const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = resultado
  return (
    <Resultados>
        <Imagen 
        src={URL=`https://cryptocompare.com/${IMAGEURL}`} 
         />

        <div>
            <Precio>El precio es de : <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia : <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia : <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion : <span>{LASTUPDATE}</span></Texto>
        </div>
        
       


    </Resultados>
  )
}

export default Resultado