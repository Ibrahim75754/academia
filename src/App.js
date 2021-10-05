import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import CourseDetails from './component/CourseDetails/CourseDetails';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/courses">
            <Services></Services>
          </Route>
          <Route exact path="/course/:courseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
