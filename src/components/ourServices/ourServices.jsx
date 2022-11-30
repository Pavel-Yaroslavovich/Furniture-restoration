import styled from 'styled-components'

import BlockFurniture from './blockFurniture';
import BlockMaster from './blockMaster';

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

const OurServices = () => {
	return (
		<>
			<H2>Наши услуги</H2>
			<BlockFurniture />
			<BlockMaster />
		</>
	)
}

export default OurServices;