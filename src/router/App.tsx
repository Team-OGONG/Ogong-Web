import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { HeaderNavigation } from './navigation/header';
import { MobileHeader } from './navigation/mobileHeader';
import { Home, Portfolio, Resume } from '../component';
import { MobileHome, MobileResume, MobilePortfolio } from '../component/Mobile';
import { DeviceProvider } from '../context/DeviceContext';
import { ProjectProvider } from '../context/ProjectContext';
import { isMobile } from 'react-device-detect';
import { EN } from '../TextPackage/EN.json';
import { KR } from '../TextPackage/KR.json';
const App: React.FC = () => {
	const [lang, setLang] = useState<string>('KR'); // KR, EN
	return (
		<Router>
			<DeviceProvider>
				<ProjectProvider>
					{isMobile ? (
						<>
							<MobileHeader lang={lang} setLang={setLang} />
							<Switch>
								<Route exact path="/">
									<MobileHome language={lang === 'EN' ? EN.Home : KR.Home} lang={lang} />
								</Route>
								<Route exact path="/Resume">
									<MobileResume lang={lang} />
								</Route>
								<Route exact path="/Portfolio">
									<MobilePortfolio language={lang === 'EN' ? EN.Portfolio : KR.Portfolio} lang={lang} />
								</Route>
							</Switch>
						</>
					) : (
						<>
							<HeaderNavigation lang={lang} setLang={setLang} />
							<Switch>
								<Route exact path="/">
									<Home language={lang === 'EN' ? EN.Home : KR.Home} lang={lang} />
								</Route>
								<Route exact path="/Portfolio">
									<Portfolio language={lang === 'EN' ? EN.Portfolio : KR.Portfolio} lang={lang} />
								</Route>
								<Route exact path="/Resume">
									<Resume lang={lang} />
								</Route>
							</Switch>
						</>
					)}
				</ProjectProvider>
			</DeviceProvider>
		</Router>
	);
};

export default App;
