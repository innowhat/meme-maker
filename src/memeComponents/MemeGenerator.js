import React from "react";
import MemeDisplay from "./MemeDisplay";
import htmlToImage from "html-to-image";
import download from "downloadjs";
import ErrorBoundary from "./ErrorBoundary";

class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      authorText: "",
      randomImg: "https://i.imgflip.com/2hgfw.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site (`.url`)
   */

  //Add random image
  handleRandom = event => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  };

  handleUpload = event => {
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    this.setState({
      randomImg: uploadFile
    });
  };

  //Download PNG image
  handlePng() {
    htmlToImage
      .toPng(document.getElementById("my-node"))
      .then(function(dataUrl) {
        download(dataUrl, "my-node.png");
      });
  }

  // Download JPEG image
  handleJpeg() {
    htmlToImage
      .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
      .then(function(dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  }

  render() {
    return (
      <ErrorBoundary>
        <MemeDisplay
          handleChange={this.handleChange}
          handleRandom={this.handleRandom}
          handlePng={this.handlePng}
          handleJpeg={this.handleJpeg}
          handleUpload={this.handleUpload}
          data={this.state}
        />
      </ErrorBoundary>
    );
  }
}

export default MemeGenerator;
