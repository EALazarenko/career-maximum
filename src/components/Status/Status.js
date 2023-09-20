import './Status.css';
import statusIconTesting from '../../images/StatusIcon.svg';
import statusIconApproved from '../../images/Status-approved.svg';
import statusIconWaiting from '../../images/Status-waiting.svg';
import statusIconOverdue from '../../images/Status-overdue.svg';

const Status = ({ status }) => {
/* Временное решение */

  let statusClass;
  let statusText;
  let statusIcon;

  if (status === 'testing') {
    statusClass = 'status__testing';
    statusText = 'На тестировании';
    statusIcon = statusIconTesting;
  } else if (status === 'waiting') {
    statusClass = 'status__waiting';
    statusText = 'Ожидает';
    statusIcon = statusIconWaiting;
  } else if (status === 'approved') {
    statusClass = 'status__approved';
    statusText = 'Принято';
    statusIcon = statusIconApproved;
  } else {
    statusClass = 'status__overdue';
    statusText = 'Просрочено';
    statusIcon = statusIconOverdue;
  }

  return (
    <div className='status'>
      <div className={`status__group ${statusClass}`}>
        <img src={statusIcon} alt='Иконка' className='status__icon'/>
        <p className='status__title'>{statusText}</p>
      </div>
      <span className='status__date'>15.06.23</span>
    </div >
  )
}

export default Status;
