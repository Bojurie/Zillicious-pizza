import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <>
      <div className="feature">
        <div className="feature-header">
          <h1>Z-Choiceses </h1>
        </div>

        <div className="feature-cat">
          <div className="feature-item">
            <h2>Appetizer</h2>
            <div className="Item-Img-Wrapper">
              <img
                src="https://images.unsplash.com/photo-1619221881992-78381378c20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="feature-item">
            <h2>Pizza</h2>
            <div className="Item-Img-Wrapper">
              <img
                src="https://images.unsplash.com/photo-1595060093966-33d1247a37ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="feature-item">
            <h2>Wings</h2>
            <div className="Item-Img-Wrapper">
              <img
                src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="feature-item">
            <h2>Beverage</h2>
            <div className="Item-Img-Wrapper">
              <img
                src="https://images.unsplash.com/photo-1609951651467-713256d1a3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="feature-item">
            <h2>Dessert</h2>
            <img
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt=""
            />
          </div>
          <div className="feature-item">
            <h2>Kids Choiceses</h2>
            <div className="Item-Img-Wrapper">
              <img
                src="https://images.unsplash.com/photo-1565898094840-7e408a6f361d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
