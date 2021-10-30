import './App.css';
import './normalize.css';
import SectionNav from './components/section-nav';
import Header from './components/section-header';
import Home from './components/page-home';
import Contact from './components/page-contact';
import About from './components/page-about';
import Footer from './components/section-footer';
import Portfolio from './components/page-portfolio';
import Fixed from './components/section-fixed';
import Fixed2 from './components/section-fixed2';
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
				<Header />
				<SectionNav />
				<Home/>
				<About />
				<Portfolio />
				<Contact />
				{/* <HashRouter>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
				</HashRouter> */}
			</opacityContext.Provider>
			<Footer/>
			<Fixed/>
			<Fixed2/>
		</div>
	);
}

export default App;
