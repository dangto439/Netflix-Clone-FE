import { Col, Row } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Row className="register">
      <Col span={14} className="register__panel">
        <div className="register__logo">
          <Link to="/home">
            <img
              alt="image error"
              src="https://png.pngtree.com/png-vector/20240627/ourmid/pngtree-ninja-cartoon-logo-vector-png-image_12858146.png"
              width={200}
            />
          </Link>
          <h1>Welcome to my page -- create by Dang To</h1>
        </div>
        <iframe
          className="login__video"
          src="https://www.youtube.com/embed/-iFq6IcAxBc?si=RlmhO40aGN9lYTcY&amp;autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Col>
      <Col span={10} className="register__content">
        <h3>Register new account</h3>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="number" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
        <div className="register__redirect">
          <Link to="/login">Login</Link>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </Col>
    </Row>
  );
}

export default Register;
