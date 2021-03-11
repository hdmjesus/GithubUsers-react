import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import User from "../views/User";
import Contexto from "../context/StaticContext";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const URL = `https://api.github.com/users?since=1&per_page=100`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  const { Provider } = Contexto;

  return (
    <BrowserRouter>
      <Provider value={data}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={User} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
