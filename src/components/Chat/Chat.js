import Responsible from '../Responsible/Responsible';
import './Chat.css';
import ResponsibleAvatar from '../../images/resp-avatar.png';
import ownerAvatar from '../../images/tui-avatar.png';
import attachIcon from '../../images/tuiIconAttach.svg';
import sendIcon from '../../images/send-icon.svg';

const Chat = () => {

  return (
    <section className='chat'>
      <div className='chat__group'>
        <div className='chat__responsible'>
          <Responsible />
        </div>

        <div className='chat__date'>Сегодня</div>
        <div className='chat__message-group'>
          <img className='chat__avatar' src={ResponsibleAvatar} alt='Аватар' />
          <div className='chat__message'>
            <p className='chat__text'>Сообщение  с текстом от ответственного</p>
            <span className='chat__time'>14:30</span>
          </div>
        </div>
        <div className='chat__message-group chat__message-group_owner'>
          <div className='chat__message chat__message_owner'>
            <p className='chat__text'>Ответное собщение от создателя заявки</p>
            <span className='chat__time'>14:33</span>
          </div>
          <img className='chat__avatar' src={ownerAvatar} alt='Аватар' />
        </div>
        <div className='chat__message-group'>
          <img className='chat__avatar' src={ResponsibleAvatar} alt='Аватар' />
          <div className='chat__message'>
            <p className='chat__text'>Сообщение  с текстом от ответственного</p>
            <span className='chat__time'>14:30</span>
          </div>
        </div>
      </div>
      <div className='chat__send-group'>
        <button className='chat__attach-button' type='submit'>
          <img className='chat__attachment' src={attachIcon} alt='Прикрепить' />
        </button>
        <textarea
          className='chat__input'
          type='text'
          id="input-massage"
          name='input-massage'
          placeholder='Сообщение'
          required={true}
        />
        <button className='chat__send-button' type='submit'>
          <img className='chat__button-img' src={sendIcon} alt='Отправить' />
        </button>
      </div>
    </section>
  )
}

export default Chat;
