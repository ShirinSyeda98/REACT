import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Writersw from "./Writers/Writer_w";

import axios from "axios";

const App = () => {
  const [writers, setWriters] = useState([]);

  const getWriters = () => {
    axios
      .get("http://localhost:3000/Writers?_embed=texts")
      .then((response) => {
        console.log(response);
        setWriters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWriters();
  }, []);

  //const { writers } = useState([]);

  return (
    <BrowserRouter>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Writers">Writers</Link>
        </li>
      </ol>

      <hr />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route
          path="/Writers"
          render={(props) => <Writersw {...props} writers={writers} />}
        />

        <Route component={() => <h3>Not Found</h3>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
