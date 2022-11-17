import postAvatar from  './../images/avatar.jpg'

const Posts = () => {
    return(
        <div className="posts">
            <div className="post">
                <div className="post__wrapper">
                    <img src={postAvatar} alt="avatar.jpg" className="post__avatar"/>
                    <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolor in labore vel? Assumenda deleniti est explicabo facere fuga iste iure iusto minus, numquam perspiciatis quae quidem repudiandae, sint!</p>
                </div>
            </div>
        </div>
    );
}

export default Posts;