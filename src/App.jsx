import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";

import Home from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/contact";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
}

export default App;