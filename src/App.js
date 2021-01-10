import './App.css';
// import {useEffect} from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Timer from "./pages/Timer";
import Faq from "./pages/Faq";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";

function App() {
  // useEffect(() => {
  //   document.title = "POMODORO";
  // }, [])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Timer />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
