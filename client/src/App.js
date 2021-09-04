import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import CreateScreen from "./Screens/CreateScreen";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/create" component={CreateScreen} />
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
