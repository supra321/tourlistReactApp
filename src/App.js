import React,{Component} from 'react';
/*import {connect} from 'react-redux';*/
import Placeset from './Placeset';
/*import {placelists}  from './Placelist';*/
import './App.css'
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary'
/*import {setSearcheditem} from './actions.js'*/
/*const mapStateToProps=(state)=>{
	return{
		searcheditem:state.searcheditem
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onSearchChange:(event)=>dispatch(setSearcheditem(event.target.value))
	}
}*/
class App extends Component{
	constructor(){
		super()
		this.state={
			placelists:[],
			searcheditem:''
		}
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    .then(user => {this.setState({ placelists: user})}).catch(()=>console.log("Error in FETCH URL"));
  	}
	onSearchChange=(event)=>{
		this.setState({searcheditem:event.target.value});
	}
	render(){
		const {placelists,searcheditem}=this.state;
		/*const{searcheditem,onSearchChange}=this.props;*/
		const filteredplaces=placelists.filter(placelist=>{
			return placelist/*.destination*/.address.city.toLowerCase().includes(searcheditem.toLowerCase());
		})
		return !placelists.length?<h1 className='f-3 tc'>Loading Please Wait!!!</h1>:(
			<div className='tc'>
				<h1 className='f-5'>Tour Gallary</h1>
				<input className='tc pa2 ba-1 b--gold bg-light-yellow' type='search' placeholder='Search Tour Places' onChange={this.onSearchChange} />
				<br/>
				<br/>
				<Scroll>
					<ErrorBoundary>
						<Placeset placelists={filteredplaces} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}
export default /*connect(mapStateToProps,mapDispatchToProps)(*/App/*)*/;