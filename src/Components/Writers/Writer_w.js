import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Writert from "./Writer/Writer_t";

const Writerw = ({ match: { url }, writers }) => (
  <div>
    {writers.map(({ id, name }) => (
      <li key={id}>
        <Link to={`${url}/${id}`}>{name}</Link>
      </li>
    ))}
    <Route
      path={url}
      render={() => <h3>Please select a Writer from above</h3>}
    />
    <Route
      exact
      path={`${url}/:writerId`}
      render={(props) => {
        const writer = writers.find((writer) => {
          return writer.id === props.match.params.writerId;
        });
        console.log(props.match.params);
        if (!writer) {
          return <Redirect to="/404" />;
        }
        return <Writert {...props} {...writer} />;
      }}
    />
  </div>
);

export default Writerw;
