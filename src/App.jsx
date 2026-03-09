
import { Route, Switch } from "wouter";

import Home from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/contact";


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

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
<>
          <Router />
</>
  );
}

export default App;
