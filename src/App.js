import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AnnualReportHome from './components/pages/AnnualReportHome';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import FinancialHighlights from './components/pages/FinancialHighlights';
import Shareowners from './components/pages/Shareowners';
function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/2020-annual-report' exact component={AnnualReportHome} />
                <Route path='/contact-us' exact component={ContactUs} />
                <Route path='/sign-up' exact component={SignUp} />
                <Route path='/financial-highlights' exact component={FinancialHighlights} />
                <Route path='/letter-to-shareowners' exact component={Shareowners} />

            </Switch>
        </Router>
  );
}

export default App;
