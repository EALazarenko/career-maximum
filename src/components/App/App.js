import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import './App.css';
import Request from '../Request/Request';

function App() {
  return (
    <div className="page">
<Header />
      <Routes>
      <Route path="/request" element={<Request />} />
      </Routes>

    </div>
  );
}

export default App;
