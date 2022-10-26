import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Assets/img/brands/android-logo-12384.png";
import image2 from "../Assets/img/brands/cpu.png";
import image3 from "../Assets/img/brands/kisspng-apple-logo-iphone-computer-clip-art-apple-logo-5aca62d52deb49.4608240315232130131881.png";
import image4 from "../Assets/img/brands/google-play-png-logo-3798.png";

function Section1() {
  return (
    <div>
      <section className="py-5">
        <div className="container text-center py-5">
          <p className="mb-4 title">
            a multi-platform application that exchanges waste into money and
            gives users work in managing or recycling waste
          </p>
          <Link to="">
            <img class="m-3" src={image1} width="182" height="64" alt="" />
          </Link>
          <Link to="">
            <img class="m-3" src={image2} width="134" height="134" alt="" />
          </Link>
          <Link to="">
            <img class="m-3" src={image3} width="117" height="104" alt="" />
          </Link>
          <Link to="">
            <img class="m-3" src={image4} width="78" height="78" alt="" />
          </Link>
          <Link to=""> </Link>
          <Link to=""> </Link>
        </div>
      </section>
    </div>
  );
}

export default Section1;
