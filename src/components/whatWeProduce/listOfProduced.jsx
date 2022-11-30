import styled from 'styled-components';
// import { nanoid } from 'nanoid';
import doorPhoto from '../whatWeProduce/img/door-1.png';
import closetPhoto from '../whatWeProduce/img/closet 2.png';
import chair from '../whatWeProduce/img/chair-3.png';
import drawers from '../whatWeProduce/img/drawers 4.png';
import drawer from '../whatWeProduce/img/drawer 5.png';
import gate from '../whatWeProduce/img/gate 6.png';
import room from '../whatWeProduce/img/room-divider 7.png';
import bed from '../whatWeProduce/img/bed 8.png';

const H2 = styled.h2`
	font-family: 'Tenor Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 150%;
	margin-top: 0;
	margin-bottom: 100px;
	color: #57463A;
`

const Block = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 1164px;
	border: 1px solid #000000;
`

const PhotoBlock = styled.div`
	position: relative;
	width: 289px;
	height: 250px;
	border: 1px solid #000000;
`

const Door = styled.div`
  background-image: url(${doorPhoto});
	position: absolute;
	top: 56px;
	left: 95px;
	width: 100px; 
	height: 100px;
	`

const Closet = styled(Door)`
	background-image: url(${closetPhoto});
`
const Chair = styled(Door)`
	background-image: url(${chair});
`
const Drawers = styled(Door)`
	background-image: url(${drawers});
`
const Drawer = styled(Door)`
	background-image: url(${drawer});
`
const Gate = styled(Door)`
	background-image: url(${gate});
`
const Room = styled(Door)`
	background-image: url(${room});
`
const Bed = styled(Door)`
	background-image: url(${bed});
`

const Text = styled.span`
	position: absolute;
	top: 120px;
	left: 20px;
	font-family: 'Open Sans';
	font-size: 18px;
	line-height: 102.99%;
	color: #323232;
`

const ChairText = styled(Text)`
	width: 128px;
	top: 0px;
	left: -20px;
`
const GateText = styled(Text)`
	top: 0px;
	left: 5px;
`
const RoomText = styled(ChairText)``

const ListOfProduced = ({ name }) => {
	const title = name.map((elem) => {
		return <H2 key={elem.id}>{elem.text}</H2>
	})

	return (
		<>
			{title}
			<Block>
				<PhotoBlock>
					<Door>
						<Text>Двери</Text>
					</Door>
				</PhotoBlock>
				<PhotoBlock>
					<Closet>
						<Text>Шкафы</Text>
					</Closet>
				</PhotoBlock>
				<PhotoBlock>
					<Chair>
						<Text>
							<ChairText>Столы и стулья</ChairText>
						</Text>
					</Chair>
				</PhotoBlock>
				<PhotoBlock>
					<Drawers>
						<Text>Комоды</Text>
					</Drawers>
				</PhotoBlock>
				<PhotoBlock>
					<Drawer>
						<Text>Тумбы</Text>
					</Drawer>
				</PhotoBlock>
				<PhotoBlock>
					<Gate>
						<Text>
							<GateText>Арки</GateText>
						</Text>
					</Gate>
				</PhotoBlock>
				<PhotoBlock>
					<Room>
						<Text><RoomText>Перегородки</RoomText></Text>
					</Room>
				</PhotoBlock>
				<PhotoBlock>
					<Bed>
						<Text>Кровати</Text>
					</Bed>
				</PhotoBlock>
			</Block>
		</>
	)
}

export default ListOfProduced;
