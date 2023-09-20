import './Responsible.css';
import ResponsibleAvatar from '../../images/resp-avatar.png';

const Responsible = () => {

  return (
    <section className='responsible'>
      <div className='responsible__avatar-group'>
        <img className='responsible__avatar' src={ResponsibleAvatar} alt='Аватар ответственного' />
        {/* <div className='responsible__indicator'></div> */}
      </div>
      <div className='responsible__title-group'>
        <span className='responsible__title'>Ответственный</span>
        <h1 className='responsible__name'>Татаров Григорий</h1>
        <span className='responsible__title'>+79261513323</span>
      </div>

    </section>
  )
}

export default Responsible;
