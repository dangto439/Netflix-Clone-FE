import { Link } from "react-router-dom";
import { SearchOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { useState } from "react";

function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            alt="image error"
            src="https://png.pngtree.com/png-vector/20240627/ourmid/pngtree-ninja-cartoon-logo-vector-png-image_12858146.png"
            width={70}
          />
        </Link>
      </div>
      {/* nav tuong tu nhu div giup de nhan dang hon */}
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Moives</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/movies-management">Movies Management</Link>
          </li>
          <li onClick={() => setIsShowSearch(true)}>
            <SearchOutlined />
          </li>
          <li>
            <Link to="/login">
              <UserOutlined />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`header__search ${isShowSearch ? "active" : ""}`}>
        <input type="text" placeholder="Search name movie" />
        <CloseOutlined onClick={() => setIsShowSearch(false)} />
      </div>
    </header>
  );
}

export default Header;
