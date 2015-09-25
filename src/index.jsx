import React from 'react';
import Voting from './components/Voting';
import Router, {Route, DefaultRoute} from 'react-router';
import App from './components/App';
import Results from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route handler={App}>
  <Route path="/results" handler={Results} />
  <DefaultRoute handler={Voting} />
</Route>;

Router.run(routes, (Root) => {
  React.render(
    <Root />,
    document.getElementById('app')
  );
});
