import './Main.css';
/* import Request from '../Request/Request';
import History from '../History/History';
import Chat from '../Chat/Chat'; */

const Main = ({ components }) => {
  return (
    <main className='main'>
      <div className='main__big-screen'>
        {components.map(component => component)}
      </div>
    </main >
  )
}

export default Main;
