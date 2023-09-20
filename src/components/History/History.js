import Heading from '../Heading/Heading';
import Responsible from '../Responsible/Responsible';
import Status from '../Status/Status';
import './History.css';
import PortalAvatar from '../../images/portal-avatar.png';

const History = () => {

  return (
    <div className='history'>
      <div className='history__heading-group'>
        <Heading title="ИТ Руставели" subtitle="Критичный" />
        <Status status='waiting' />
      </div>
      <div className='history__responsible'>
        <Responsible />
      </div>
      <div className='history__heading-group'>
        <Heading title="ИТ Руставели" subtitle="Критичный" />
        <Status />
      </div>
      <p className='history__warning'>Обращение просроченно по сквозной схеме SLA</p>
      <div className='history__source-group'>
        <img className='source-img' src={PortalAvatar} alt='аватар' />
        <span className='source-name'>Корпоративный портал</span>
      </div>
      <div className='history__heading-group'>
        <Heading title="ИТ Руставели" subtitle="Критичный" />
        <Status status='approved' />
      </div>
      <div className='history__responsible'>
        <Responsible />
      </div>
    </div>
  )
}

export default History;
