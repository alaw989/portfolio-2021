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
import SocialBar from './components/section-socialbar';
import { opacityContext } from './contexts/siteContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pluto from './img/pluto.png';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function App() {
	const [ opacity, setOpacity ] = useState();
	const [ hideOnScroll, setHideOnScroll ] = useState(true);
	const [ isAtTop, setIsAtTop ] = useState(true);
	const [ pos, setPos ] = useState('');

	useScrollPosition(
		({ prevPos, currPos }) => {
			const isShow = currPos.y > prevPos.y;
			if (isShow !== hideOnScroll) setHideOnScroll(isShow);

			currPos.y === 0 ? setIsAtTop(true) : setIsAtTop(false);
			setPos(currPos.y)
		},
		[ hideOnScroll ]
	);


	return (
		<div className="App">
			<opacityContext.Provider
				value={{
					opacity,
					setOpacity
				}}
			>
				<Header scroll={hideOnScroll} top={isAtTop} />
				<SectionNav />
				<Home pos={pos}/>
				<About />
				<Portfolio />
				<Contact />
			</opacityContext.Provider>
			<Footer />
			<Fixed />
			<SocialBar />
			<div className="fixed-bottom-bg" style={{ backgroundImage: `url(${pluto})` }} />
		</div>
	);
}

export default App;
