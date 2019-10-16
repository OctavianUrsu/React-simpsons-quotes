import React, { Fragment } from "react";
import "./Card.css";
import NextWord from "../NextWord/NextWord";
import Layout from "../UI/Layout/Layout";
import Spinner from "../UI/Spinner/Spinner";

const card = props => {
  const randomQuote = props.quote.map(post => {
    return post.quote;
  });

  const randomCharacter = props.quote.map(post => {
    return post.character;
  });

  return (
    <Layout>
      <div className="px-4 pt-4 card-body d-flex flex-column justify-content-center quote responsiveQuote">
        {props.spinner ? (
          <Spinner />
        ) : (
          <Fragment>
            <h2 className={props.animate ? "fade1" : "fade2"}>{randomQuote}</h2>
            <h5 className={props.animate ? "fade1" : "fade2"}>
              {randomCharacter}
            </h5>
          </Fragment>
        )}
      </div>
      <div className="mb-3">
        <NextWord bgColor={props.nextHandler} disabled={props.spinner} />
      </div>
    </Layout>
  );
};

export default card;
