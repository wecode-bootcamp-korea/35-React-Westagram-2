import React from 'react';
import './Nav.scss';

export default function Nav() {
  return (
    <div className="navClass">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-container__logo">
            <div className="nav-logo">Westagram</div>
          </div>
          <div className="nav-container__search">
            <div className="search-input">
              <input
                type="text"
                id="input"
                autocomplete="off"
                className="search-input__input"
                placeholder="검색"
              />
              <i className="bx bx-search" id="search"></i>
              <i className="bx bxs-x-circle" id="exit"></i>
            </div>
          </div>
          <div className="nav-container__icon">
            <div className="nav-icon">
              <a href="#">
                <i className="bx bxs-home"></i>
              </a>
            </div>
            <div className="nav-icon">
              <a>
                <i className="bx bx-paper-plane"></i>
              </a>
            </div>
            <div className="nav-icon">
              <a>
                <i className="bx bx-plus-circle"></i>
              </a>
            </div>
            <div className="nav-icon">
              <a>
                <i className="bx bx-compass"></i>
              </a>
            </div>
            <div className="nav-icon">
              <a>
                <i className="bx bx-heart"></i>
              </a>
            </div>
            <div className="nav-profile__image">
              <a>
                <img src="./images/wonikChoi/profile/myprofile.jpeg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
