import React, { Component } from "react";
// import { FaGoogle, FaFacebookSquare, FaAmazon } from "react-icons/fa";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import amazon from "../../images/amazon.png";

class CardComponent extends Component {
  state = {
    Google: { name: "GOOGL", image: google, USD: 1515 },
    Facebook: { name: "FB", image: facebook, USD: 266 },
    Amazon: { name: "AMZN", image: amazon, USD: 3116 },
  };
  render() {
    let card = Object.keys(this.state).map((el) => {
      return (
        <div className="card" style={{ margin: "10px auto" }}>
          <div className="content">
            <img
              className="right floated mini ui image"
              src={this.state[el].image}
            ></img>
            <div
              className="header"
              style={{ color: "black", fontSize: "16px", margin: "8px 15px" }}
            >
              {this.state[el].name}
            </div>
            <div className="description">
              <h4
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "center",
                }}
              >
                {this.state[el].USD} USD
              </h4>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="ui cards container" style={{ margin: "20px 0" }}>
        {card}
        {console.log(Object.keys(this.state))}
      </div>
    );
  }
}

export default CardComponent;
