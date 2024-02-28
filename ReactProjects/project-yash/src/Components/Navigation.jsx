const Navigation = () => (
    <nav className="container">
      <div className="logo">
        <img src="images/brand_logo.png" alt="logo" />
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
  
  export default Navigation;
  