import React from "react";
import "../css/magazine.css";
// import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="pages">
        <input id="one" name="trigger" type="radio" />
        <input id="two" name="trigger" type="radio" />
        <input id="three" name="trigger" type="radio" />
        <input id="four" name="trigger" type="radio" />
        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="logo">Fashion</div>
            <div className="pagenumber">2 3</div>
            <div className="control">
              <label htmlFor="one"></label>
            </div>
            <div className="content">
              <div className="content_picture">
                <img
                  src={
                    "https://i.pinimg.com/originals/1f/bc/f1/1fbcf1c55e839cd7b4aa28c4902669be.jpg"
                  }
                />
              </div>
              <div className="content_offset">
                <h2>Subtitle</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum
                  sapien posuere ut. Nunc eget ullamcorper turpis. Sed in
                  vehicula magna, vitae eleifend velit. Donec dui turpis,
                  viverra vitae lobortis commodo, lobortis et ex.
                </p>
              </div>

              <h1>
                <span>L</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>i</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>w</span>
                <span>e</span>
                <span>s</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <br />
                <span>h</span>
                <span>e</span>
                <span>a</span>
                <span>d</span>
                <span>l</span>
                <span>i</span>
                <span>n</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>r</span>
                <span>i</span>
                <span>g</span>
                <span>h</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="pages_page">
          <div className="pages_page__inner">
            <div className="hamburger">
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
              <div className="hamburger_part"></div>
            </div>
            <div className="control next">
              <label htmlFor="three"></label>
            </div>
            <div className="bg"></div>
            <div className="footer">
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
            <div className="content">
              <div className="content_quote">
                <h5>
                  <span className="quo">
                    <i>&rdquo;</i>
                  </span>
                  <span>This is a quote</span>
                  <span>from someone</span>
                  <span className="name">Jamie Coulter</span>
                  <span className="auth">- Jcoulterdesign</span>
                  <span className="quo">&rdquo;</span>
                </h5>
              </div>
              <div className="content_picture">
                <img
                  src={
                    "https://i.pinimg.com/originals/1f/bc/f1/1fbcf1c55e839cd7b4aa28c4902669be.jpg"
                  }
                />
              </div>
              <h1>
                <span>L</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>i</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>w</span>
                <span>e</span>
                <span>s</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <br />
                <span>h</span>
                <span>e</span>
                <span>a</span>
                <span>d</span>
                <span>l</span>
                <span>i</span>
                <span>n</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>r</span>
                <span>i</span>
                <span>g</span>
                <span>h</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-2xl">
        <NavLink to="/personal-project">Go to personal project</NavLink>
        <div className="sticky top-4 from-red-600 via-yellow-300 to-purple-500 bg-gradient-to-r h-32 w-full">
          <h1>About Page</h1>
        </div>
        <div className="bg-opacity-10 bg-center bg-no-repeat bg-auto h-12 w-full bg-purple-600  flex justify-center items-center text-xl font-bold">
          <p className=""> Elton</p>
        </div>
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>{" "}
        <div className="bg-gradient-to-tr from-red-600 to-blue-600 h-32 w-full">
          <h1>About Page</h1>
        </div>
      </div> */}
    </>
  );
};

export default About;
