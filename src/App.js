import './App.css';
import './normalize.css';
import SectionNav from './components/section-nav';
import Home from './components/page-home';
import Contact from './components/page-contact';
import About from './components/page-about';
import { Route, NavLink, HashRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<SectionNav />

			<HashRouter>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</HashRouter>
		</div>
	);
}

export default App;
