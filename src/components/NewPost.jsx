const NewPost = () => {
    return (
        <div className="post">
            <h2 className="post__title">Мои записи</h2>
            <form action="/#" className="post__form">
                <textarea name="post-text" className="post__form-textarea"></textarea>
                <input type="submit" className="post__form-submit"/>
            </form>
        </div>
    );
}

export default NewPost;