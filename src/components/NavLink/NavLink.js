import './NavLink.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

const NavLink = () => {
  const [activeTab, setActiveTab] = useState("request");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className='nav'>
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
    </nav>
  )
}

export default NavLink;
