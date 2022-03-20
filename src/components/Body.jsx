import { Container } from "react-bootstrap";
import {
  BsThreeDots,
  BsFillShareFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { AiOutlineExclamationCircle, AiOutlineEye } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";

import "./body.css";
import postProfileOne from "../images/post-profile-img-one.png";
import postImages from "../images/post-img-1.png";
import AddUser from "../images/AddUser.svg";

const Body = () => {
  return (
    <div className=" body-wrapper">
      {/* main image  */}
      <div className="main-img-wrapper">
        <div className="main-img">
          <div className="main-img-text-wrapper">
            <p className="main-img-text-one">Computer Engineering</p>
            <p className="main-img-text-two">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </div>
      {/* body contents  */}
      <Container
        className="body-contents"
        style={{ background: "white", padding: "47px" }}
      >
        {/* larger screen  */}
        <div className="body-nav-list-wrapper larger">
          <div className="body-nav-list-left">
            <a href="#" className="body-nav-list-left-item active">
              All Posts(32)
            </a>
            <a href="#" className="body-nav-list-left-item ">
              Article
            </a>
            <a href="#" className="body-nav-list-left-item ">
              Event
            </a>
            <a href="#" className="body-nav-list-left-item ">
              Education
            </a>
            <a href="#" className="body-nav-list-left-item ">
              Job
            </a>
          </div>
          <div className="body-nav-list-right">
            <button className="body-nav-list-right-item one">
              Write a Post <BsFillCaretDownFill size={10} />
            </button>
            <button className="body-nav-list-right-item two">
              <img src={AddUser} alt="" />
              Join Group
            </button>
          </div>
        </div>
        {/* smaller screen  */}
        <div className="body-nav-list-wrapper smaller">
          <div className="body-nav-list-left smaller">
            <span className="body-nav-list-left-item-smaller active">
              Posts(368)
            </span>
          </div>
          <div className="body-nav-list-right">
            <button className="body-nav-list-right-item one">
              Filter: All <BsFillCaretDownFill size={10} />
            </button>
          </div>
        </div>
        {/* all posts  */}
        <div className="post-wrapper">
          <div className="post-left flex-grow-1">
            <div className="post">
              <img src={postImages} alt="post-one" style={{ width: "100%" }} />
              <div className="post-contents">
                <span className="post-tag"> ✍ Article</span>
                <div
                  style={{
                    display: "flex",
                    paddingTop: "10px",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 className="post-title">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </h2>
                  <BsThreeDots size={25} />
                </div>
                <p className="post-paragraph">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
              </div>
              <div className="post-contents-footer">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={postProfileOne}
                    alt=""
                    className="post-profile-img"
                  />
                  <span className="post-profile-name">Sarthak Kamra</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "54px",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="post-views">
                    {" "}
                    <AiOutlineEye /> 1.4k views
                  </span>
                  <button className="post-connect-btn">
                    <BsFillShareFill className="post-connect-btn-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post-right">
            <form style={{ position: "relative" }}>
              <label style={{ position: "absolute" }}>
                <GoLocation size={20} />
              </label>
              <input
                className="location-input"
                type="text"
                placeholder="Enter your location"
              />
              <label style={{ position: "absolute", right: 0 }}>
                <MdModeEdit />
              </label>
              <div className="d-flex align-items-center gap-2">
                <AiOutlineExclamationCircle size={25} />
                <p className="location-input-info">
                  Your location will he lp us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Body;
