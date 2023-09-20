import { Route, Routes } from 'react-router-dom';
/* import Main from '../Main/Main'; */
import Header from '../Header/Header';
import './App.css';
import Request from '../Request/Request';
import useScreenWidth from '../../hooks/useScreenWidth';
import {
  BIG_SCREEN,
  /* SMALL_SCREEN */
} from '../../utils/constant';
import Main from '../Main/Main';
import History from '../History/History';
import Chat from '../Chat/Chat';

function App() {
  const screenWidth = useScreenWidth();

  return (
    <div className="page">

      {screenWidth > BIG_SCREEN ? (
        <>
        <Header />
          <Routes>
            <Route path="/request" element={<Main components={[<Request />, <Chat />]} />} />
            <Route path="/history" element={<Main components={[<History />, <Chat />]} />} />
          </Routes>
        </>
      ) : (
        <>
        <Routes>
          <Route path="/request" element={<Main components={[<Request />]} />} />
          <Route path="/history" element={<Main components={[<History />]} />} />
          <Route path="/chat" element={<Main components={[<Chat />]} />} />
        </Routes>
        <Header />
      </>
      )}

    </div>
  );
}

export default App;
