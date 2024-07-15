import SearchIcon from "@mui/icons-material/Search";
import "../styles/Home.css";
import search from "../assets/search.png";
import banner__image1 from "../assets/banner__image1.jpg";
import banner__image2 from "../assets/banner__image2.jpg";
import check from "../assets/check.png";
const Home = () => {
  return (
    <>
      <div className="home__page flex align__start">
        <div className="home__page__content">
          <h2>
            <span className="first__line">Best Learning </span>
            <span className="second__line">Education Platform </span>
            <span className="third__line">in The World</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
            negotium, dicerem impudens, nisi hoc institut translatum ad
            philosophos nostros esset.
          </p>
          <div className="search-container">
            <div className="icon-container">
              <img src={search} alt="" />
            </div>
            <input
              type="text"
              placeholder="What do you want to learn"
              className="search-input"
            />
            <button className="search-button">Search Course</button>
          </div>
        </div>
        <div className="home__page__banner flex">
          <div className="banner__image1">
            <img src={banner__image1} alt="" />
          </div>
          <div className="banner__image2">
            <img src={banner__image2} alt="" />{" "}
          </div>
          <div className="banner__text__overlay">
            <p>
              <img src={check} alt="" />
              Get 30% off on every 1st month{" "}
            </p>
            <p>
              <img src={check} alt="" />
              Expert teachers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
