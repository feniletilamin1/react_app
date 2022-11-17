const NavSideBar = () => {
    return (
        <nav className="nav-sidebar">
            <ul className="nav-sidebar__list">
                <li className="nav-sidebar__list-item">
                    <a href="/#" className="nav-sidebar__link">Моя страница</a>
                </li>
                <li className="nav-sidebar__list-item">
                    <a href="/#" className="nav-sidebar__link">Сообщения</a>
                </li>
                <li className="nav-sidebar__list-item">
                    <a href="/#" className="nav-sidebar__link">Лента</a>
                </li>
                <li className="nav-sidebar__list-item">
                    <a href="/#" className="nav-sidebar__link">Музыка</a>
                </li>
                <li className="nav-sidebar__list-item">
                    <a href="/#" className="nav-sidebar__link">Настройки</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavSideBar;