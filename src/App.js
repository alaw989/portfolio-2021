import './App.css';
import './normalize.css';
import SectionNav from './components/section-nav';
import Mmenu from './components/mmenu';
import Home from './components/page-home';
import Contact from './components/page-contact';
import About from './components/page-about';
import Portfolio from './components/page-portfolio';
import { Route, HashRouter } from 'react-router-dom';
import { opacityContext } from './contexts/siteContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
	const [ opacity, setOpacity ] = useState();

	return (
		<div className="App">
			<opacityContext.Provider
				value={{
					opacity,
					setOpacity
				}}
			>
				<Mmenu />
				<SectionNav />
		

			<HashRouter>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</HashRouter>
      </opacityContext.Provider>
		</div>
	);
}

export default App;
