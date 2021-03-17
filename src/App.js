// import React from "react";
import { render } from "react-dom";
import { StrictMode, useState } from "react";
import { Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <header>
        <Router>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </Router>
      </header>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
      </div>
    </ThemeContext.Provider>
      // {/* <Pet name="Luna" animal="Dog" breed="Havanase" />
      // <Pet name="Pepper" animal="Bird" breed="Cookatiel" />
      // <Pet name="Doink" animal="Cat" breed="Mix" /> */}
  )
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
