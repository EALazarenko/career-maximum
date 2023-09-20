import Heading from '../Heading/Heading';
import Status from '../Status/Status';
import './Request.css';
import defaultFile from '../../images/default-doc.svg';

const Request = () => {

  return (
    <div className='request'>
      <div className='request__heading-group'>
        <Heading title="ИТ Руставели" subtitle="Критичный" />
        <Status status='testing'/>
      </div>
      <div className='request__button-group'> {/* кнопки сабмит? или ссылки? */}
        <button type='button' className='request__button'>В работу</button>
        <button type='button' className='request__button'>На доработку</button>
      </div>
      <Heading title="Не работает клавиатура и мышка" subtitle="от Ивана Петрова" />
      <div className='request__content'>
        <p className='request__message'>Не работает клавиатура и мышка вообще ничего не работает, прилагаю фото</p>
        <ul className='request__file-list'>
          <li className='request__file'>
          <img src={defaultFile} alt='Иконка файла' className='request__file-icon' />
            <span className='request__file-title'>FileName.jpg</span>
          </li>
          <li className='request__file'>
          <img src={defaultFile} alt='Иконка файла' className='request__file-icon' />
            <span className='request__file-title'>FileName.jpg</span>
          </li>
          <li className='request__file'>
            <img src={defaultFile} alt='Иконка файла' className='request__file-icon' />
            <span className='request__file-title'>FileName.jpg</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Request;
