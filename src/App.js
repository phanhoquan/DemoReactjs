import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeMain from './components/home/index';
import Login from './components/login/login';
import EditBook from './components/table/edit';
import AddNew from './components/table/addNew';
import ProductsIndex from './components/product/index';
import Catergory from './components/product/page/category';
import PostPage from './components/product/page/postPage';
import NotFound from './components/product/page/404'

function App() {
  return (
    <Router>
		<Switch>
			<Route exact path='/' component={HomeMain}/>
			<Route path='/login' component={Login} />
			<Route path='/edit/:id' component={EditBook}/>
			<Route path='/addnew' component={AddNew} />
			<Route path='/shop' component={ProductsIndex}/>
			<Route path='/category' component={Catergory}/>
			<Route path='/post-page' component={PostPage}/>
			<Route component={NotFound}/>
		</Switch>
	</Router>
  );
}
export default App;
