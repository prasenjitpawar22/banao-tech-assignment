import { Container } from "react-bootstrap";
import {
  BsThreeDots,
  BsFillShareFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { AiOutlineExclamationCircle, AiOutlineEye } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdModeEdit, MdOutlineWorkOutline } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import post from "../data/post";
import "./body.css";
// import postProfileOne from "../images/post-profile-img-one.png";

import AddUser from "../images/AddUser.svg";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Body = () => {
  const [locInputActive, setLocInputActive] = useState(false);
  const [locValue, setLocValue] = useState("");

  useEffect(() => {
    // console.log(post[0].tag);
    if (locValue === "") {
      setLocInputActive(false);
    }
  });

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
          <div className="post-left d-flex flex-column gap-2">
            {/* all post map  */}
            {post.map((data, index) => (
              <div key={index} className="post">
                {data.image && (
                  <img
                    src={data.image}
                    alt="post-one"
                    style={{ width: "100%" }}
                  />
                )}
                <div className="post-contents">
                  {data.tag && (
                    <span className="post-tag">
                      {data.tagImg} {data.tag}
                    </span>
                  )}
                  <div
                    style={{
                      display: "flex",
                      paddingTop: "10px",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    {data.title && <h2 className="post-title">{data.title}</h2>}
                    <BsThreeDots size={25} />
                  </div>
                  <div
                    className="post-span-tag d-flex align-items-center"
                    style={{ gap: "40px", paddingBottom: "16px" }}
                  >
                    {data.job && (
                      <span className="post-span-tag d-flex align-items-start gap-1">
                        <MdOutlineWorkOutline style={{ marginTop: "2px" }} />{" "}
                        {data.job}
                      </span>
                    )}
                    {data.date && (
                      <span className="post-span-tag d-flex align-items-start gap-1">
                        <RiCalendarEventFill style={{ marginTop: "2px" }} />
                        {data.date}
                      </span>
                    )}
                    {data.location && (
                      <span className="post-span-tag d-flex align-items-start gap-1">
                        <GoLocation style={{ marginTop: "2px" }} />{" "}
                        {data.location}
                      </span>
                    )}
                    {data.content && (
                      <p className="post-paragraph">{data.content}</p>
                    )}
                  </div>
                  {data.button === "Visit Website" && (
                    <button className="post-btn visit-web">
                      {data.button}
                    </button>
                  )}

                  {data.button === "Apply on Timesjobs" && (
                    <button className="post-btn Apply-Timesjobs">
                      {data.button}
                    </button>
                  )}
                </div>
                <div className="post-contents-footer">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexGrow: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {data.pic && (
                      <img src={data.pic} alt="" className="post-profile-img" />
                    )}
                    <div className="post-footer-name-views">
                      {data.name && (
                        <span className="post-profile-name">{data.name}</span>
                      )}
                      <span className="post-views">
                        {" "}
                        <AiOutlineEye /> 1.4k views
                      </span>
                    </div>
                  </div>
                  {/* <div
                    style={{
                      display: "flex",
                      gap: "54px",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  > */}

                  <button className="post-connect-btn d-flex align-items-center gap-2">
                    <BsFillShareFill className="post-connect-btn-icon" />
                    <span className="share-span d-none"> Share </span>
                  </button>
                </div>
              </div>
              // </div>
            ))}
          </div>
          {/* right side of body  */}
          <div className="post-right">
            <form style={{ position: "relative" }}>
              <label style={{ position: "absolute" }}>
                <GoLocation size={20} />
              </label>
              <input
                className="location-input"
                onChange={(e) => {
                  setLocInputActive(true);
                  setLocValue(e.target.value);
                }}
                value={locValue}
                // onClick={()=> setLocInputActive(true)}
                type="text"
                placeholder="Enter your location"
              />
              <label style={{ position: "absolute", right: 0 }}>
                {locInputActive ? <IoCloseOutline /> : <MdModeEdit />}
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
