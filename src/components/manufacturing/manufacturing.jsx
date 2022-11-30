import styled from "styled-components";
import MebelImg from "../manufacturing/img/mebel.png";
import Message from "./message";

const Section = styled.section`
	display: flex;
	margin-bottom: 160px;
	`

const TextBtn = styled.div`
	max-width: 562px;
	height:478px;
	margin: 198px 122px 98px 37px;
	/* border: 1px solid red; */
`

const P = styled.p`
	font-family: 'Open Sans';
	line-height: 150%;
	margin-top: 0;
	margin-bottom: 17px;
	color: #323232;
	:last-of-type {
		margin-bottom: 70px;
	}
	`

const H1 = styled.h1`
	font-family: 'Tenor Sans';
	font-weight: 400;
	font-size: 48px;
	line-height: 120%;
	margin-top: 0;
	margin-bottom: 40px;
	color: #57463A;
`

const A = styled.a`
	display: inline-block;
	font-family: 'Open Sans';
	line-height: 150%;
	padding: 18px 58px;
	text-decoration: none;
	color: #F6F6F6;
	background: #A1B29F;
	:hover {
		opacity: 0.75;
		transform: scale(1.1);
		transition: all 0.5s ;
	}
`

const Manufacturing = () => {
	return (
		<Section>
			<img src={MebelImg} alt="Foto Mebel" />
			<TextBtn >
				<P>Столярная мастерская NIKASON BRAND</P>
				<H1>Изготовление и реставрация мебели</H1>
				<P>Авторская мебель ручной работы, сделанная с душой и трепетом.</P>
				<A href="#">Смотреть услуги</A>
				<Message />
			</TextBtn >
		</Section>
	)
}

export default Manufacturing;
