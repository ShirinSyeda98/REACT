import React from "react";
import { Link, Route } from "react-router-dom";
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
      exact
      render={() => <h3>Please select a Writer from above</h3>}
    />
    <Route
      path={`${url}/:writerId`}
      render={props => <Writert  {...props} writers={writers} /> }
    />
  </div>
);

export default Writerw;
