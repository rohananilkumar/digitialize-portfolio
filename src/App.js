import './App.css';
import HomePage from './pages/HomePage';
import Order from './pages/Order';
import {Redirect, Route, Switch} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { portfolioActions } from './store';
import useHttp from './hooks/use-http';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  dispatch(portfolioActions.loadOrdering());
  dispatch(portfolioActions.loadOrderCount());

  const httpReviewLoader = useHttp('reviews',{method:'GET'});

  useEffect(async ()=>{
    const reviews = await httpReviewLoader.fetchData();
    console.log(reviews);
    for(let review in reviews){
      dispatch(portfolioActions.addReview({
        id:review,...reviews[review]
      }))
    }
  },[])

  return <>
      <Route path='/home'>
        <HomePage/>
      </Route>
      <Route path='/order'>
        <Order/>
      </Route>
      <Route path='/' exact>
        <Redirect to='/home/pre-designed'/>
      </Route>
      <Route path='/home' exact>
        <Redirect to='/home/pre-designed'/>
      </Route>
  </>
}

export default App;

/*
  TODO:
    All input fields at order.js page
*/