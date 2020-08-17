import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react';

import Film from '../components/film/Film';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';

const props = () => {
    return (
            <div className="app">
                <Film/>
                <Nav/>
                <Footer />
            </div>
    );
}

export default props;