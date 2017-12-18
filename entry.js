

import React from 'react';
import ReactDOM from 'react-dom';

import AsideLeft from './components/asideLeft.js';
import Top from './components/top.js';
import Log from './components/log.js';
import Asidetop from "./components/asidetop.js"
import Asidemiddle from "./components/asidemiddle.js"
import AsideRight from "./components/aside-right.js"

import './scss/style.scss';


class App extends React.Component{
	render(){
		return(
			<div>
				<Log />
				<Top />
				<div className = 'section'>
					<Asidetop />
					<div className = 'down'>
						<AsideLeft />
						<Asidemiddle />
						<AsideRight />
						
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));


