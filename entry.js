

import React from 'react';
import ReactDOM from 'react-dom';

import AsideLeft from './components/AsideLeft.js';
import Top from './components/top.js';
import Log from './components/log.js';

import './scss/style.scss';


class App extends React.Component{
	render(){
		return(
			<div>
				<Log />
				<Top />
				<div className = 'section'>
					
					<div className = 'down'>
						<AsideLeft />
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("box"));

