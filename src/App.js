import { Container } from "react-bootstrap";
import Header from "./screens/Header";
import Service from "./screens/Service";
import "./App.css";
import Work from "./components/Work";
import Details from "./screens/Details";
import Team from "./screens/Team";
import OurProjects from "./screens/OurProjects";
import ContactForm from "./screens/ContactForm";
import Footer from "./screens/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./screens/Admin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
      {/* <Header />
      <Service />
      <Details />
      <OurProjects />
      <Team />
      <ContactForm /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
