import { Component } from "react";
import "./Gallery.css";

export default class Gallery extends Component {
  state = {
    mainpic:
      "https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg",
    img1: "https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg",
    img2: "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg",
    img3: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
  };

  setNewMainImge = (e) => {
    this.setState({ mainpic: e.target.src });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="mainpicContainer">
            <div className="mainpic">
              <img src={this.state.mainpic} alt="" />
            </div>
          </div>
          <div className="gallery">
            <div className="img">
              <img src={this.state.img1} alt="" onClick={this.setNewMainImge} />
            </div>
            <div className="img">
              <img src={this.state.img2} alt="" onClick={this.setNewMainImge} />
            </div>
            <div className="img">
              <img src={this.state.img3} alt="" onClick={this.setNewMainImge} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
