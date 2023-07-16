import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card bg-secondary" style={{ width: "18rem" }}>
          <img
            src={
              imageurl
                ? imageurl
                : "https://t4.ftcdn.net/jpg/03/29/24/37/360_F_329243708_oXkPklGDS1BMjtwrWrxepInCGbjag0DL.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title ">
            
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By:-{author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
