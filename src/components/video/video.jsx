import styled from 'styled-components'

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
const VideoFon = styled.div`
	width: 1160px;
	margin: 0 auto;
	margin-bottom: 200px;
`

const Video = () => {
	return (
		<>
			<H2>Посмотрите видео о нас</H2>
			<VideoFon>
				<iframe width="1160" height="700" src="https://www.youtube.com/embed/FVIEI0SPecc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</VideoFon>
		</>
	)
}

export default Video;
