import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import axios from "axios";
import axiosRetry from "axios-retry";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Background color states:
      bgColor: [
        "#d91a30",
        "#f97f0a",
        "#8b852e",
        "#76a03a",
        "#2c5a3c",
        "#9c75be",
        "#2a2644",
        "#313f7a",
        "#5780b0",
        "#2c3ec5",
        "#08af63",
        "#5a7c41",
        "#8b8531",
        "#c76632",
        "#475536",
        "#1aa358",
        "#709200",
        "#c45625"
      ],
      colorId: 0,

      // Quote states:
      quote: [],
      animate: false,

      // Spinner states:
      isLoading: null
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
    this.getQuoteHandler();
  }

  getQuoteHandler = () => {
    axiosRetry(axios, {
      retryDelay: () => {
        this.setState({ quote: [], isLoading: true });
        return 6000;
      }
    });

    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => {
        const getQuote = res.data;
        this.setState({ quote: getQuote, isLoading: false });
      })
      .catch(err => {
        console.error(err);
      });
  };

  nextHandler = () => {
    let newColorId = this.state.colorId;
    const updatedColorId = newColorId + 1;
    this.setState({ colorId: updatedColorId, animate: !this.state.animate });
    document.body.style.backgroundColor = document.body.style.color = this.state.bgColor[
      this.state.colorId
    ];
    if (this.state.colorId === 17) {
      this.setState({ colorId: 0 });
    }
    this.getQuoteHandler();
  };

  arrowHandler = e => {
    if (e.keyCode === 39 && this.state.isLoading === false) {
      this.nextHandler();
    }
  };

  render() {
    return (
      <div
        className="App"
        ref={this.myRef}
        onKeyDown={this.arrowHandler}
        tabIndex="0"
      >
        <Card
          quote={this.state.quote}
          animate={this.state.animate}
          nextHandler={this.nextHandler}
          spinner={this.state.isLoading}
        />
      </div>
    );
  }
}
