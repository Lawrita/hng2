import React from "react";
import "./OrderComp.css";
import expie from "../../assets/Expand.png";
import expiry from "../../assets/Expand.png";
import long from "../../assets/long.png";
import heel from "../../assets/heel.png";
import component from "../../assets/Component.png";
import lines from "../../assets/line.png";
import line2 from "../../assets/line.png";
import pen from "../../assets/pen.png";
import star from "../../assets/star.png";
import star1 from "../../assets/Star2.png";
import three from "../../assets/Frame488.png";
import tree from "../../assets/Frame489.png";
import ttree from "../../assets/Frame490.png";
import icon from "../../assets/searchIcon.png";
import lime from "../../assets/line.png";
import tee from "../../assets/image20.png";

const OrderComp = () => {
  return (
    <div>
      <div className="generalDIV">
        <p>Shop</p>
        <img src={expie} alt="" />
        <p>Stilettos</p>
        <img src={expiry} alt="" />
        <p>Tom Ford</p>
      </div>

      <div className="thirtyford">
        <div className="ford">
          <img src={long} alt="" />
          <img src={heel} alt="" />

          <div>
            <img src={component} alt="" />
          </div>
        </div>
      </div>
      <img src={lines} alt="" />
      <div className="details">
        <div>
          <h2>Product Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ducimus possimus, ea sit quos sunt deleniti accusamus quisquam dolor
            temporibus totam. Qui consectetur laudantium eos quod sapiente
            deleniti, dolores mollitia excepturi aut a doloribus tempora
            voluptatum cumque animi harum quia quaerat molestias, quibusdam
            dolore asperiores beatae molestiae. Pariatur, fuga facere.
          </p>
          <img src={line2} alt="" />
        </div>
        <div>
          <h2>Delivery & Returns</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            facere iusto culpa corrupti doloremque quae reiciendis mollitia
            praesentium fugit delectus nihil corporis voluptates laborum quidem
            doloribus ipsa modi architecto veritatis ex? Magni natus odit,
            voluptates beatae incidunt reiciendis ea dignissimos neque quis
            dolor nostrum quos saepe, perspiciatis illo expedita nesciunt?
          </p>
          <img src={line2} alt="" />
        </div>
      </div>

      <div className="penn">
        <div>
          <h2>Review</h2>
          <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star1} alt="" />

            <p>4.9 (891 reviews) 99% recommended this products</p>
            <div className="display">
              <img src={icon} alt="" />
              <p>Search reviews</p>
            </div>
          </div>
          <img src={lime} alt="" />
          <div>
            <h2>Andrea, 25</h2>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star1} alt="" />
            <p>The shoes are beautiful and exactly how i saw it</p>
          </div>
          <div className="classic">
            <img src={three} alt="" />
            <img src={tree} alt="" />
            <img src={ttree} alt="" />
          </div>
        </div>

        <div>
          <p>Leave a Review</p>
          <img src={pen} alt="" />
        </div>
      </div>
      <div>
        <p className="product-recomed">Yes i recommend this product</p>
        <p className="lorem-dolor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, facere{" "}
          <br />
          iusto culpa corrupti doloremque quae reiciendis mollitia praesentium{" "}
          <br />
          fugit delectus nihil corporis voluptates laborum quidem doloribus ipsa{" "}
          <br />
          modi architecto veritatis ex? Magni natus odit, voluptates beatae{" "}
          <br />
          incidunt reiciendis ea dignissimos neque quis dolor nostrum <br />{" "}
          quos saepe, perspiciatis illo expedita nesciunt?
        </p>
      </div>
      <div>
        <p className="helpful">Was this helpful</p>

        <img src={lines} alt="" />
      </div>

      <h2 className="you">YOU MAY ALSO LIKE</h2>

      <div className="classic-c">
        <img src={three} alt="" />
        <img src={tree} alt="" />
        <img src={ttree} alt="" />
        <img src={tee} alt="" />
      </div>

      <div className="classic-v">
        <img src={ttree} alt="" />
        <img src={tee} alt="" />
        <img src={tree} alt="" />
        <img src={three} alt="" />
      </div>

      <div className="emaill-sub">
        <a href="/Contact">LOAD MORE</a>
      </div>
    </div>
  );
};

export default OrderComp;
