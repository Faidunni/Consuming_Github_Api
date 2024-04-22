import Header from "./header";
import { Link } from "react-router-dom";
import logo from "../src/assets/image.jpg";

function Overview() {
  return (
    <main>
      <Header />
      <div className="hero">
        <img src={logo} alt="" />
        <div className="hero-text">
          <h1>
            <span> I'm Faizat Hazeez,</span> frontend developer based in
            Nigeria.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A placeat
            inventore quibusdam voluptatem, quos dicta vero accusantium <br />{" "}
            cupiditate, consectetur, eum iure recusandae mollitia blanditiis
            dolorem harum sequi modi reprehenderit <br /> nostrum. Delectus
            cupiditate sed doloremque provident <br />
            amet quaerat cum eius quae.
          </p>
        </div>
        <div className="hero-action">
          <Link to="/repos"> Check my work</Link>
        </div>
      </div>
    </main>
  );
}

export default Overview;
