import React from "react";
import $ from 'jquery';


class App extends React.Component {
	constructor(){
		super();
		this.state = {productData : {data:[]}};
		var _this = this;
		$.ajax ({
		  url: "data.json",
		  success:function(data) {
				_this.setState({'productData' : data});
			},
		  error:function(error) {
				console.log("error data is ", error);
			}
		});
	}
	render(){
		return(
			<div className="prdcls">
				<Header />
				<div>
					<div>
						{this.state.productData.data.map((product, i) => <TableRow key = {i} data = {product} />)}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

class Header extends React.Component {
	render(){

		var myStyle = {
         fontSize: 50,
         color: '#ccc'
      }

		return(
			<div>
				<h1 style = {myStyle}>Header</h1>
			</div>
		);
	}
}

class TableRow extends React.Component {
	render(){
	var products = {
         float:'left',
         padding:40
      }
		return(
			<div style = {products}>
				<div><img src={this.props.data.imgSrc} width="200" height="150" /></div>
				<div>${this.props.data.prodPrice}</div>
				<div>{this.props.data.prodName}</div>
				<div>{this.props.data.prodDesc}</div>
				
			</div>
		);
	}
}

class Footer extends React.Component {
	render(){

		var clearb = {
         fontSize: 50,
         color: '#ccc',
         clear:'both'
      }

		return(
			<div>
				<h1 style = {clearb}>Footer</h1>
			</div>
		);
	}
}

export default App;