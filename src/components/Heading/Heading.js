import './Heading.css';

const Heading = ({ title, subtitle }) => {

  return (
    <div className='heading'>
      <div className='heading__group'>
        <h1 className='heading__title'>{title}</h1>
       <span className='heading__subtitle'>{subtitle}</span>
      </div>
    </div >
  )
}

export default Heading;
