import NavLink from '../NavLink/NavLink';
import Owner from '../Owner/Owner';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      <NavLink />
      <Owner />
    </header>
  )
}

export default Header;
