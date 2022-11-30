import styled from "styled-components";
import telegram from '../footer/img/telegram.png';
import instagram from '../footer/img/instagram.png';
import viber from '../footer/img/viber.png';

const MessageBlock = styled.div`
	display: flex;
	justify-content: space-between;
`
const Telegram = styled.div`
	background-image: url(${telegram});
	background-repeat: no-repeat ;
	background-position: center;
	width: 50px; 
	height: 50px;
  margin-right: 15px;
	cursor: pointer;
	:hover {
		opacity: 0.75;
		transform: scale(1.1);
		transition: all 0.5s;
	}
`

const Instagram = styled(Telegram)`
	background-image: url(${instagram});
`

const Viber = styled(Telegram)`
	background-image: url(${viber});
`

const Message = () => {
	return (
		<MessageBlock>
			<a href="https://telegram.org/"><Telegram /></a>
			<a href="https://www.instagram.com/"><Instagram /></a>
			<a href="https://www.viber.com/ru/"><Viber /></a>
		</MessageBlock>
	)
}

export default Message;