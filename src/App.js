import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import NavSideBar from "./components/NavSideBar";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

const App = () => {
  return (
      <div className="app">
        <Header />
          <div className="container">
              <div className="app__wrapper">
                  <NavSideBar />
                  <div className="app__inner-wrapper">
                      <Profile />
                      <NewPost />
                      <Posts />
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default App;
