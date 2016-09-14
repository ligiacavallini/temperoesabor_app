import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { history } from './redux/store';

// Pages.
import Home from './views/pages/home';
import About from './views/pages/about';
import PageNotFound from './views/pages/404';

let onUpdate = () => { window.scrollTo(0, 0); };

// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={Home} title="Home" onUpdate={onUpdate} />
		<Route path="/about" component={About} title="About" onUpdate={onUpdate} />
		<Route path="/receitas" component={RecipesList} title="Recipes List" onUpdate={onUpdate} />
		<Route path="/oops" component={PageNotFound} title="Page Not Found" onUpdate={onUpdate} />
		<Redirect from="*" to="/oops" />
	</Router>
);
