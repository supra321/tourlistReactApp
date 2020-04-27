import React,{Component} from 'react';
import {Placelists} from '../components/Placelists';
import Placeset from '../components/Placeset';
import './App.css'
import Scroll from '../components/Scroll';
import Searchbar from '../components/Searchbar'
import ErrorBoundary from './ErrorBoundary'
class App extends Component{
	constructor(){
		super()
		this.state={
			/*placelists:[],*/
			searcheditem:''
		}
	}
	/*componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    .then(user => {this.setState({ placelists: user})}).catch(()=>console.log("Error in FETCH URL"));
  	}*/
	onSearchChange=(event)=>{
		this.setState({searcheditem:event.target.value});
	}
	render(){
		const {searcheditem}=this.state;
		const filteredplaces=Placelists.filter(placelist=>{
			return placelist.destination.toLowerCase().includes(searcheditem.toLowerCase());
		})
		return !Placelists.length?<h1 className='f-3 tc'>Loading Please Wait!!!</h1>:(
			<div className='tc'>
				<h1 className='f-5'>Tour Gallary</h1>
				<Searchbar onSearchChange={this.onSearchChange} />
				<br/>
				<br/>
				<Scroll>
					<ErrorBoundary>
						<Placeset Placelists={filteredplaces} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}
export default App;