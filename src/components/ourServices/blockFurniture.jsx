import styled from 'styled-components'

import photoDresser from './img/IMG_1.png'

const Block = styled.div`
	display: flex;
`
const PhotoDresser = styled.div`
	background-image: url(${photoDresser});
	background-repeat: no-repeat;
	width: 720px;
`
const BlockText = styled.div`
	width: 536px;
	padding: 110px 140px 100px 41px;
	background: #E3DACE;
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
	width: 133px;
	padding: 18px 56px;
	font-family: 'Open Sans';
	line-height: 150%;
	text-align: center;
	color: #F6F6F6;
	background: #A1B29F;
	:hover {
		opacity: 0.75;
		transform: scale(1.1);
		transition: all 0.5s ;
		cursor: pointer;
	}
`

const BlockFurniture = () => {
	return (
		<>
			<Block>
				<PhotoDresser />
				<BlockText>
					<H3>Мебель на заказ</H3>
					<Text>Мебель под заказ по индивидуальным размерам это гарантия отличного качества,
						долговечность, экологичность и эксклюзивность наших изделий.
						Возможность создания своего неповторимого стиля, уникальность и неповторимость
						каждого изделия.
					</Text>
					<A>Заказать мебель</A>
				</BlockText>
			</Block>
		</>
	)
}

export default BlockFurniture;
