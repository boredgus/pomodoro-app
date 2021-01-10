import './App.css';
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Timer from "./pages/Timer";
import Faq from "./pages/Faq";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";

export const initialUrl = "/pomodoro-app"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={`${initialUrl}/`}>
          <Timer />
        </Route>
        <Route path={`${initialUrl}/faq`}>
          <Faq />
        </Route>
        <Route path={`${initialUrl}/settings`}>
          <Settings />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
