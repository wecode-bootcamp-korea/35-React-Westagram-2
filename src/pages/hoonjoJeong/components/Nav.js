const Nav = () => {
  return (
    <header>
      <div className="header-parents">
        <div className="header">
          <div className="logo">
            <i className="fab fa-instagram" />
            <p>| westagram</p>
          </div>
          <div className="search">
            <input className="form-control" type="search" placeholder="검색" />
          </div>
          <div className="icon">
            <span className="material-icons-outlined"> explore </span>
            <span className="material-icons-outlined">favorite_border</span>
            <span className="material-icons-sharp"> person </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
