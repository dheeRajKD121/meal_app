import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const history = useNavigate();

  const handleArea = () => {
    history("/areameal");
  };

  const handleIngredient = () => {
    history("/ingredients");
  };
  const handleHome = () => {
    history("/");
  };

  return (
    <div className="header px-2 ">
      <div className="d-flex">
        <div className="p-3" onClick={handleHome}>
          <strong>Quick Food</strong>
        </div>
        <button className="btn" onClick={handleIngredient}>
          Ingredients
        </button>
        <button className="btn" onClick={handleArea}>
          Food by Area
        </button>
      </div>
      <div className="profile-container">
        <img
          className="profile-img"
          src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
