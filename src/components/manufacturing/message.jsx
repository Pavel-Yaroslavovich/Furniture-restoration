import styled from "styled-components";
import telegram from '../manufacturing/img/telegram.svg';
import instagram from '../manufacturing/img/insta.svg';
import viber from '../manufacturing/img/viber.svg';

const MessageBlock = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 170px;
	margin-top: 94px;
	margin-left: 277px;
`
const Telegram = styled.img`
	background-image: url(${telegram});
	background-repeat: no-repeat ;
	background-position: center;
	width: 30px; 
	height: 30px;
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
