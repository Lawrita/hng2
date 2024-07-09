import React, { useState } from "react";
import "./Contact.css"; // Import your CSS file for styling
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import apple from "../../assets/apple.png";
import paypal from "../../assets/paypal.png";
import lame from "../../assets/line.png";

const Contact = () => {
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="confirm-delivery-details">
      <div className="deliver">
        <h2>Confirm Delivery Details</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={handleCountryChange}
            required
          >
            <option value="">Please select</option>
            <option value="Nigeria">Nigeria</option>
            <option value="USA">USA</option>
            <option value="ghana">GHANA</option>
            <option value="canada">CANADA</option>
            <option value="Nigeria">DUBAI</option>
            <option value="USA">UK</option>
            <option value="ghana">EGYPT</option>
            <option value="">SOUTH AFRICA</option>
          </select>
        </div>

        <div className="delivery-information">
          <div className="infor">
            <h3>Delivery Information</h3>
          </div>
          <p>Deliveries take about 3-5 business days.</p>
        </div>

        <div className="delivery-method">
          <h4>Delivery Method</h4>
          <div className="radio-group">
            <input
              type="radio"
              id="standard"
              name="delivery-method"
              value="standard"
            />
            <label htmlFor="standard">Standard Delivery</label>
            <p>
              N 1,000 (Orders placed now are expected to arrive before or on
              Friday, Jul 15 - Saturday, Jul 16.)
            </p>
            <input
              type="radio"
              id="express"
              name="delivery-method"
              value="express"
            />
            <label htmlFor="express">Express Delivery</label>
            <p>
              N 2,000 (Orders placed now are expected to arrive before or on
              Friday, Jul 15 - Saturday, Jul 16.)
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptate sapiente nisi rem illum rerum veritatis
              fugit veniam, porro non maxime sequi architecto ut suscipit ex
              sunt quod earum enim!
            </p>
          </div>
        </div>

        <div className="return-policy">
          <h3 className="return">Return Policy</h3>
          <div>
            <p>Our Return policy</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              quibusdam facilis iusto, dolorum at exercitationem maxime
              cupiditate, soluta debitis eveniet est corrupti. Numquam error
              explicabo laudantium sint, deserunt ducimus hic animi corporis!
              Doloribus error in atque, libero inventore magnam, ad reiciendis
              eligendi, quos dolorem animi soluta vero! Nihil, hic molestias?
            </p>
          </div>
        </div>

        <div className="payment-information">
          <h3>Payment Information</h3>
          <div className="form-group">
            <div>
              <img src={mastercard} alt="" />
              <img src={lame} alt="" />
              <img src={visa} alt="" />
              <img src={lame} alt="" />
              <img src={apple} alt="" />
              <img src={lame} alt="" />
              <img src={paypal} alt="" />
              <img src={lame} alt="" />
            </div>
            <label htmlFor="payment-method">Select payment method:</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <option value="">Please select</option>
              <option value="debit/credit">Debit/Credit card</option>
              <option value="visa">Visa</option>
              <option value="apple-pay">Apple Pay</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>
          {paymentMethod === "debit/credit" && (
            <div className="credit-card-info">
              <div className="form-group">
                <label htmlFor="card-holder-name">Card holder’s name:</label>
                <input type="text" id="card-holder-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="card-number">Card number:</label>
                <input type="text" id="card-number" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC:</label>
                <input type="text" id="cvc" required />
              </div>
              <div className="form-group">
                <label>Expiration date:</label>
                <div className="expiration-date">
                  <select id="expiration-month" required>
                    <option value="">Month</option>
                    <option value="">January</option>
                    <option value="">Feburay</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">Aug</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                  </select>

                  <select id="expiration-day" required>
                    <option value="">Day</option>
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wedneday</option>
                    <option value="">Thurday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
                  </select>

                  <select id="expiration-year" required>
                    <option value="">Year</option>
                    <option value="">2025</option>
                    <option value="">2026</option>
                    <option value="">2027</option>
                    <option value="">2028</option>
                    <option value="">2029</option>
                    <option value="">2030</option>
                    <option value="">2031</option>
                    <option value="">2032</option>
                    <option value="">2033</option>
                    <option value="">2034</option>
                    <option value="">2035</option>
                    <option value="">2036</option>
                    <option value="">2037</option>
                    <option value="">2038</option>
                    <option value="">2039</option>
                    {/* Add other country options */}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" /> Save credit card information
                </label>
              </div>
            </div>
          )}
        </div>

        <button type="submit">CONFIRM ORDER</button>
      </form>
    </div>
  );
};

export default Contact;
