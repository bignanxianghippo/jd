import React from "react"
import ReactDOM from "react-dom"

import Asidetop from "./components/asidetop.js"
import Asidemiddle from "./components/asidemiddle.js"

class Box extends React.Component{
	render(){
		return(
			<div className="box">
				<Asidetop/>
				<Asidemiddle/>
				
			</div>
		)
	}
}
ReactDOM.render(<Box/>,document.getElementById("app"))
