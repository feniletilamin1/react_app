import logo from './../images/Logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="/#" className="header__logo-link">
                        <img src={logo} alt="Logo.svg" className="header__logo"/>
                    </a>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-list-item">
                                <a href="/#" className="header__menu-link">Домой</a>
                            </li>
                            <li className="header__menu-list-item">
                                <a href="/#" className="header__menu-link">Наши новости</a>
                            </li>
                            <li className="header__menu-list-item">
                                <a href="/#" className="header__menu-link">О нас</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;