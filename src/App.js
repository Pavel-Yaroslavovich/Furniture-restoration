import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/header/header'
import Manufacturing from './components/manufacturing/manufacturing';
import WhatWeProduce from './components/whatWeProduce/whatWeProduce';
import FamilyWorkshop from './components/familyWorkshop/familyWorkshop';
import Video from './components/video/video';
import OurServices from './components/ourServices/ourServices';
import Guarantee from './components/guarantee/guarantee';
import Footer from './components/footer/footer';

const GlobalStyle = createGlobalStyle`
  body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: teal;
		font-family: 'Tenor Sans', 'Open Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

const Main = styled.main`
	max-width: 1440px;
  padding-bottom: 210px;
	margin: 0 auto;
	background: #F3EFEA;
`

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Main>
				<Manufacturing />
				<WhatWeProduce />
				<FamilyWorkshop />
				<Video />
				<OurServices />
				<Guarantee />
			</Main>
			<Footer />
		</>
	);
}

export default App;