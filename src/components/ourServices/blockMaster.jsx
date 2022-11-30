import styled from 'styled-components';

import photoFurniture from './img/IMG_2.png';

const Block = styled.div`
	display: flex;
	margin-bottom: 200px;
`
const PhotoFurniture = styled.div`
	background-image: url(${photoFurniture});
	background-repeat: no-repeat;
	width: 720px;
`
const BlockText = styled.div`
	width: 536px;
	padding: 110px 140px 100px 41px;
	background: #D4CDC3;
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
	margin-top: 0;
	:last-of-type{
		margin-bottom: 52px;
	}
`
const A = styled.a`
	display: inline-block;
	padding: 18px 42px;
	font-family: 'Open Sans';
	line-height: 150%;
	color: #F6F6F6;
	background: #A1B29F;
	:hover {
		opacity: 0.75;
		transform: scale(1.1);
		transition: all 0.5s ;
		cursor: pointer;
	}
`

const BlockMaster = () => {
	return (
		<>
			<Block>
				<PhotoFurniture />
				<BlockText>
					<H3>Мастер-классы</H3>
					<Text>Что делать, если память о предках хочется сохранить, но к вашему интерьеру
						старая и испорченная мебель не подходит?
						Правильно, отреставрировать его и наслаждаться не только обновлённым видом мебели,
						но и с теплотой помнить, что эта мебель была сделана талантливыми предками.
					</Text>
					<A>Купить мастер-класс</A>
				</BlockText>
			</Block>
		</>
	)
}

export default BlockMaster;
