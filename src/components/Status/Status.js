import './Status.css';
import statusIcon from '../../images/StatusIcon.svg';

const Status = () => {

  return (
    <div className='status'>
      <div className='status__group'>
        <img src={statusIcon} alt='Иконка' className='status__icon'/>
        <p className='status__title'>На тестировании</p>
        </div>
       <span className='status__date'>15.06.23</span>

    </div >
  )
}

export default Status;
