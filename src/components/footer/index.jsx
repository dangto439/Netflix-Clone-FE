import {
  DiscordOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  WechatOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Button, Input } from "antd";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          We are a leading company in our industry, committed to providing
          quality services.
        </p>
        <a href="">
          <FacebookOutlined className="footer-icon" />
        </a>
        <a href="">
          <DiscordOutlined className="footer-icon" />
        </a>
        <a href="">
          <WhatsAppOutlined className="footer-icon" />
        </a>
        <a href="">
          <WechatOutlined className="footer-icon" />
        </a>
      </div>
      <div className="footer-column">
        <h3>Address</h3>
        <p>
          <EnvironmentOutlined className="footer-icon" />
          <span> : 123 Main Street, City, Country</span>
        </p>
        <p>
          <PhoneOutlined className="footer-icon" />
          <span> : 0123456798</span>
        </p>
        <p>
          <MailOutlined className="footer-icon" />
          <span> : email@gmail.com</span>
        </p>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <h5>Email</h5>
        <Input type="text" className="input" />
        <h5>Message</h5>
        <Input type="text" className="input" />
        <Button type="primary" danger className="button">
          send
        </Button>
      </div>
      <div className="footer-creator">
        <p>Created by Dang To </p>
      </div>
    </footer>
  );
}

export default Footer;
