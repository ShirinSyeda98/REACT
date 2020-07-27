import React, { Fragment } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Text from "./Text/text";

const Writert = ({ match: { url }, name, birth, description, texts }) => (
  <Fragment>
    <h2>{name}</h2>
    <h3>{birth}</h3>
    <p>{description}</p>

    <ul>
      {texts.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${url}/texts/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>

    <Route
      path={`${url}/texts/:textId`}
      render={(props) => {
        const text = texts.find(({ id }) => id === props.match.params.textId);
        console.log(text);
        if (!text) {
          return <Redirect to="/404" />;
        }
        return <Text {...text} />;
      }}
    />
  </Fragment>
);

export default Writert;
