import { Link } from "react-router-dom";
import "./index.scss";

function Login() {
  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://www.youtube.com/embed/-iFq6IcAxBc?si=RlmhO40aGN9lYTcY&amp;autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="wrapper">
        <div className="login__logo">
          <Link to="/home">
            <img
              alt="image error"
              src="https://png.pngtree.com/png-vector/20240627/ourmid/pngtree-ninja-cartoon-logo-vector-png-image_12858146.png"
              width={200}
            />
          </Link>
        </div>
        <div className="login__form">
          <h3>Login your account</h3>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <div className="login__redirect">
            <Link to="/register">Register</Link>
            <Link to="/forgot-password">Forgot password</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
