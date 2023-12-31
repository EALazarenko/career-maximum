import './NavLink.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import {
  BIG_SCREEN
} from '../../utils/constant';
import useScreenWidth from '../../hooks/useScreenWidth';

const NavLink = () => {
  const [activeTab, setActiveTab] = useState("request");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const screenWidth = useScreenWidth();

  return (
    <nav className='nav'>
      {screenWidth > BIG_SCREEN ? (
        <>
          <Link to='/request'
            className={`nav__link ${activeTab === "request" ? "active" : ""}`}
            onClick={() => handleTabClick("request")}>
            Заявка
          </Link>
          <Link to='/history'
            className={`nav__link ${activeTab === "history" ? "active" : ""}`}
            onClick={() => handleTabClick("history")}>
            История
          </Link>
        </>
      ) : (
        <>
          <Link to='/request'
            className={`nav__link ${activeTab === "request" ? "active" : ""}`}
            onClick={() => handleTabClick("request")}>
            Заявка
          </Link>
          <Link to='/chat'
            className={`nav__link ${activeTab === "chat" ? "active" : ""}`}
            onClick={() => handleTabClick("chat")}>
            Чат
          </Link>
          <Link to='/history'
            className={`nav__link ${activeTab === "history" ? "active" : ""}`}
            onClick={() => handleTabClick("history")}>
            История
          </Link>
        </>
      )}
    </nav>
  )
}

export default NavLink;
