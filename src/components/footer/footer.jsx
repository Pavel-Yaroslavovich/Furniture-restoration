import styled from 'styled-components';
import Message from './message';

const Div = styled.div`
width: 1440px;
height: 380px;
margin: 0 auto;
background: #715B4B;
padding-top: 84px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1160px;
  height: 57px;
  margin: 0 auto;
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Open Sans';
    line-height: 150%;
    color: #F6F6F6;
  }
`

const Footer = () => {
  return (
    <Div>
      <Container>
        <div>
          <p>ИП Колодезников-Матчитов Н.И.</p>
          <p>ИНН 143515646663</p>
        </div>
        <div>
          <p>Мастер-классы</p>
          <p>Мебель на заказ</p>
        </div>
        <div>
          <p>Контакты</p>
          <p>О нас</p>
        </div>
        <div>
          <p>Политика конфиденциальности</p>
          <p>Договор оферты</p>
        </div>
        <div>
          <Message />
        </div>
      </Container>
    </Div>
  )
}

export default Footer;