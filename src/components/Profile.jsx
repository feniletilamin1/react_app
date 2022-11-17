import avatar from '../images/avatar.jpg';

const Profile = () =>{
    return  (
        <div className="profile">
            <div className="profile__wrapper">
                <img src={avatar} alt="avatar.jpg" className="profile__image"/>
                <div className="profile__info">
                    <h1 className="profile__name">Сергей Ц.</h1>
                    <p className="profile__text">Дата рождения: 13.12.2002г.</p>
                    <p className="profile__text">Город: Кулебаки</p>
                    <p className="profile__text">Кол-во постов: 1</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;