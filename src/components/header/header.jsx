import styled from "styled-components";
import Logo from "../header/logo.svg";

const DivHeader = styled.header`
	max-width: 1168px;
	margin: 0 auto;
	padding: 31px 136px 20px;
	background: #F3EFEA;
	`

const Conteiner = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	/* border: 1px solid blue; */
`

const A = styled.a`
	font-family: 'Open Sans';
	line-height: 150%;
	color: #323232;
	text-decoration: none;
	/* border: 1px solid green; */
	:hover {
		opacity: 0.75;
		transform: scale(1.1);
		transition: all 0.5s;
	}
`

const Logotip = styled.div`
  background-image: url(${Logo});
	background-repeat: no-repeat ;
	background-position: center;
	width: 87px; 
	height: 86px;
	flex-basis: 30%;
`;

const Header = () => {
	return (
		<DivHeader>
			<Conteiner>
				<A href="https://yandex.ru/">Мастер-класс</A>
				<A href="https://yandex.ru/">Мебель на заказ</A>
				<Logotip />
				<A href="https://yandex.ru/">Контакты</A>
				<A href="https://yandex.ru/">О нас</A>
			</Conteiner>
		</DivHeader>
	)
}

export default Header;
