import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Film from '../components/film/Film';
import Search from '../components/search/Search';

const props = () => {
    return (
        <Switch>
            <Route exact path='/' component={Film}/>
            <Route parth='/search' component={Search}/>
            <Redirect from='*' to='/'/>
        </Switch>
    );
}

export default props;