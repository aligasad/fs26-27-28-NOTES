import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import First from "./MyFirstComponent.jsx";
// import SecondComponent from "./SecondComponent.jsx";
// import Lists from "./Lists.jsx";
// import Counter from "./Counter.jsx";
// import Main from "./todoList/Main";
// import Main from "./leaderBoard/Main.jsx";
// import Main from "./billSplitter/Main.jsx";
// import States from "./leaderBoard/States.jsx";
// import Main from "./boxesShowHide SOLVED/Main";
// import Main from "./randomUser/Main";
// import Main from "./fakestoreAPI/Main";
// import Main from "./memoization/Main";
// import Main from "./weatherApp/Main";
// import Main from "./usingRef/Main";
// import Main from "./timer/Main";
// import Main from "./reducers/todo/Main.jsx";
// import Main from "./trello-clone/Main.jsx";
// import UsingUseMemo from "./memoization/UsingUseMemo";
// import Main from "./reduxTodo/Main.jsx";
import { Provider } from "react-redux";
// import store from "./reduxTodo/store.js";
import store from "./ecommerceRedux/store.js";
import Home from "./ecommerceRedux/Home";

createRoot(document.getElementById("root")).render(
  //   <SecondComponent name="Rohit Jain" age={34} skillset={["React", "Node", "Laravel"]} />
  //   <SecondComponent name={"Rohit Jain"} />
  //   <SecondComponent age="34" />
  // <Lists />
  // <Counter />
  <Provider store={store}>
    <Home />
  </Provider>
  // <States />
);

//PROPS: arguments to functions(components)

// Second(fn, ln)

// <Second fn="Rohit" ln="Jain" />
