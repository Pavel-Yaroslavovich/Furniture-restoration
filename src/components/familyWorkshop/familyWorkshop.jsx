import styled from 'styled-components';
import photoFamily from '../familyWorkshop/img/family.png';

const H2 = styled.h2`
	font-family: 'Tenor Sans';
	font-weight: 400;
	font-size: 48px;
	line-height: 150%;
	margin-left: 140px;
	margin-top: 0;
	margin-bottom: 100px;
	color: #57463A;
`
const Block = styled.div`
	display: flex;
	margin-bottom: 160px;
`
const Photo = styled.div`
	background-image: url(${photoFamily});
	background-repeat: no-repeat;
	width: 650px;
`
const BlockText = styled.div`
	display: flex;
	flex-direction: column;
	padding: 68px 188px 48px 40px;
	width: 790px;
	height: 475px;
	box-sizing: border-box;
`
const H3 = styled.h3`
	font-family: 'Tenor Sans';
	font-weight: 400;
	font-size: 24px;
	line-height: 150%;
	margin-top: 0;
	margin-bottom: 40px;
`
const Text = styled.p`
	font-family: 'Open Sans';
	font-size: 18px;
	line-height: 150%;
	width: 515px;
	margin-top: 0;
	:last-of-type{
		margin-bottom: 52px;
	}
`
const A = styled.a`
	width: 133px;
	padding: 18px 56px;
	font-family: 'Open Sans';
	line-height: 150%;
	text-align: center;
	color: #F6F6F6;
	background: #A1B29F;
	text-decoration: none;
	:hover {
		opacity: 0.75;
		transform: scale(1.1);
		transition: all 0.5s ;
		cursor: pointer;
	}
`

const FamilyWorkshop = () => {
	return (
		<>
			<H2>NIKASON BRAND это семейная мастеркая </H2>
			<Block>
				<Photo />
				<BlockText>
					<H3>Саргылана и Никита Колодезниковы-Матчитовы</H3>
					<Text>Саргылана - рестовратор-декоратор, преображает и дарит вторую жизнь старой мебели.</Text>
					<Text>Никита - мастер по дереву, вся мебель делается его умелыми руками.</Text>
					<A href='#'>Подробнее о нас</A>
				</BlockText>
			</Block>
		</>
	)
}

export default FamilyWorkshop;

