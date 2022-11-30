import styled from 'styled-components'
import brand from '../guarantee/brand.png'

const LineOne = styled.div`
	width: 1160px;
	margin: 0 auto;
  /* margin-bottom: 200px; */
	padding: 14px 12px 13px 13px;
	border: 7px solid #A1B29F;
`
const LineTwo = styled.div`
	border: 1px solid #715B4B;
  h2 {
    width: 658px;
    margin: 0 auto;
    margin-top: 92px;
    margin-bottom: 40px;
    font-family: 'Tenor Sans';
    font-weight: 400;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
    color: #57463A;
  }
  p {
    width: 922px;
    margin: 0 auto;
    font-family: 'Open Sans';
    font-size: 24px;
    line-height: 150%;
  }
  div{
    text-align: right;
    margin-right: 62px;
    margin-bottom: 38px;
  }
`

const Guarantee = () => {
	return (
		<>
			<LineOne>
				<LineTwo>
          <h2>Гарантия качества мебели от NIKASON BRAND</h2>
          <p>На каждое изделие ставим авторский логотип (клеймо) как знак качества и узнаваемости мастера. 
            Таким образом мастер несёт ответственность за каждое изделие помеченное печатью. Есть гарантия на 12 месяцев.</p>
            <div>
              <img src={brand} alt="brand" />
            </div>
				</LineTwo>
			</LineOne>
		</>
	)
}

export default Guarantee;
