import React from "react";
import "./ShopComp.css";
import background from "../../assets/Frame1180.png";
import image1 from "../../assets/image1.png";
import imagee from "../../assets/image2.png";
import imageee from "../../assets/image3.png";
import imageeee from "../../assets/image4.png";
import like from "../../assets/Like.png";
import expand from "../../assets/Expand.png";
import line from "../../assets/line.png";
import frame from "../../assets/Frame1.png";
import framee from "../../assets/Frame2.png";
import frameee from "../../assets/Frame3.png";
import frameeee from "../../assets/Frame4.png";
import footimg from "../../assets/footimg2.png";
import foot from "../../assets/footimg1.png";

const items1 = [
  {
    brand: "Channel",
    price: "10,000",
    name: "Sandals Gold Shoe ",
    image: image1,
  },
  {
    brand: "Tom ford",
    price: "10,000",
    name: "Sandals Gold Shoe ",
    image: imagee,
  },
  {
    brand: "Tom ford",
    price: "10,000",
    name: "Sandals Gold Shoe ",
    image: imageee,
  },
  {
    brand: "Tom ford",
    price: "10,000",
    name: "Sandals Gold Shoe ",
    image: imageeee,
  },
];

const items2 = [
  {
    brand: "Cassie",
    price: "10,000",
    name: "Satin round toe evening flats",
    image: frame,
  },
  {
    brand: "Stuart",
    price: "40,000",
    name: "Emilia jane flats",
    image: framee,
  },
  {
    brand: "Sandalias Planas ",
    price: "11,000",
    name: "white cross belt ",
    image: frameee,
  },
  {
    brand: "Beau Today ",
    price: "15,000",
    name: "Handmade pointy shoes ",
    image: frameeee,
  },
];

const items3 = [
  {
    brand: "Cassie",
    price: "10,000",
    name: "Satin round toe evening flats",
    image: frame,
  },
  {
    brand: "Stuart",
    price: "40,000",
    name: "Emilia jane flats",
    image: framee,
  },
  {
    brand: "Sandalias Planas ",
    price: "11,000",
    name: "white cross belt ",
    image: image1,
  },
  {
    brand: "Beau Today ",
    price: "15,000",
    name: "Handmade pointy shoes ",
    image: imagee,
  },
];

const items4 = [
  {
    brand: "Cassie",
    price: "10,000",
    name: "Satin round toe evening flats",
    image: frameee,
  },
  {
    brand: "Stuart",
    price: "40,000",
    name: "Emilia jane flats",
    image: frame,
  },
  {
    brand: "Sandalias Planas ",
    price: "11,000",
    name: "white cross belt ",
    image: imageeee,
  },
  {
    brand: "Beau Today ",
    price: "15,000",
    name: "Handmade pointy shoes ",
    image: imageee,
  },
];

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img className="item-image" src={item.image} />
      </div>
      <div className="product-desc">
        <div>
          <p>{item.brand} </p>
          <img src={like} alt="" className="like" />
        </div>
        <p>{item.name}</p>
        <p className="amount">{item.price}</p>
      </div>
    </div>
  );
};

const ProductionItem = ({ item }) => {
  return (
    <div className="production-item">
      <div className="image-wrapper">
        <img className="item-image" src={item.image} />
      </div>
      <div className="product-desc">
        <div>
          <p>{item.brand} </p>
          <img src={like} alt="" className="like" />
        </div>
        <p>{item.name}</p>
        <p className="amount">{item.price}</p>
      </div>
    </div>
  );
};

const GoodsItem = ({ item }) => {
  return (
    <div className="Goods-item">
      <div className="image-wrapper">
        <img className="item-image" src={item.image} />
      </div>
      <div className="product-desc">
        <div>
          <p>{item.brand} </p>
          <img src={like} alt="" className="like" />
        </div>
        <p>{item.name}</p>
        <p className="amount">{item.price}</p>
      </div>
    </div>
  );
};

const ShopComp = () => {
  return (
    <div className="">
      <div className="backg">
        <img src={background} alt="" />
      </div>
      <h2 className="still">Stilettos</h2>
      <div className="general">
        {items1.map((item) => {
          return <ProductItem item={item} />;
        })}
      </div>
      <button>
        View all <img src={expand} alt="" className="expand" />
      </button>
      <img src={line} alt="" />

      <div className="general1">
        <h2 className="flats">Flats</h2>
        <div className="general">
          {items2.map((item) => {
            return <ProductItem item={item} />;
          })}
        </div>
        <button>
          View all <img src={expand} alt="" className="expand" />
        </button>
        <img src={line} alt="" />

        <div className="general1">
          <h2 className="flats">Flats</h2>
          <div className="general">
            {items4.map((item) => {
              return <ProductionItem item={item} />;
            })}
          </div>
          <button>
            View all <img src={expand} alt="" className="expand" />
          </button>
          <img src={line} alt="" />
        </div>
      </div>

      <div className="general1">
        <h2 className="flats">Flats</h2>
        <div className="general">
          {items4.map((item) => {
            return <GoodsItem item={item} />;
          })}
        </div>
        <button>
          View all <img src={expand} alt="" className="expand" />
        </button>
        <img src={line} alt="" />
      </div>

      <div>
        <div className="head">
          <div className="conta">
            <img src={footimg} alt="" />
            <img src={foot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComp;
