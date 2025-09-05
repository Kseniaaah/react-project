import logo from './logo.svg';
import './App.css';

export const App = () => {
	//Все, что написано в jsx декларативно, императивный подход здесь не используется
	const currentYear = new Date().getFullYear();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p className="App-year">
					{currentYear}
				</p>
			</header>
		</div>
	);
}

