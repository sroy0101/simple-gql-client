import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import fetch from 'isomorphic-fetch';
// for no type def files 
// @ts-ignore
import GraphiQL from 'graphiql';
import graphUrl from './env';


// Open GraphQl servers for testing. 
// https://graphql.anilist.co/
// https://swapi-graphql.netlify.com/.netlify/functions/index

function graphQLFetcher (graphQLParams:any): any {
    return fetch(graphUrl, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }
   
  ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
