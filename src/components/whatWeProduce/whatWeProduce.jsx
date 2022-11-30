import styled from 'styled-components';
import { nanoid } from 'nanoid';

import ListOfProduced from './listOfProduced';

const H2 = styled.h2`
	font-family: 'Tenor Sans';
	font-weight: 400;
	font-size: 48px;
	line-height: 120%;
	color: #57463A;
	margin-top: 0;
	margin-bottom: 100px;
`

const Section = styled.section`
	width: 1171px;
	margin: 0 auto;
	margin-bottom: 160px;
	`

const DivText = styled.div`
	width: 1166px;
	display: flex;
	margin-bottom: 160px;
	/* border: 1px solid green; */
	`

const Text = styled.p`
width: 248px;
height: 48px;
display: flex;
margin-top: 0;
margin-bottom: 0;
margin: 0 auto;
text-align: center;
border-bottom: 3px solid #715B4B;
`

function WhatWeProduce() {
	const obj = [
		{
			id: nanoid(),
			tt: 'Производство авторской мебели из массива'
		},
		{
			id: nanoid(),
			tt: 'Реставрация, редизайн, ремонт деревянной мебели'
		},
		{
			id: nanoid(),
			tt: 'Производство мебели по индивидуальным размерам'
		}
	]

	const title = [
		{
			id: nanoid(),
			text: 'Более 10 лет мы производим',
		}
	]

	const texts = obj.map(elem => {
		return <Text key={elem.id}>{elem.tt}</Text>
	})
	return (
		<Section>
			<H2>NIKASON BRAND это</H2>
			<DivText>
				{texts}
			</DivText>
			<ListOfProduced name={title} />
		</Section>
	)
}

export default WhatWeProduce;
