import PasswordBank from './pages/passwordBank.js'
import firebase from './firebase.js';
import { createGlobalStyle } from 'styled-components'

import { useEffect } from 'react';
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1D1D1D;
    margin:0;
  }
`



export default function App() {
  // Database 
  let database = firebase.database();
  let ref = database.ref("passwords");



  function addItem(name, password){
    let passwords = database.ref('passwords')
    let data = {
      name: name,
      password: password
    }
    passwords.push(data ,addItemHandler)
    
  }
  function addItemHandler(error) {
    if (error) {
      console.log('Some error happend :(');
    } else {
      console.log('data saved! :D');
    }
  }

  function removeItem(reference){
    database.ref(`passwords/${reference}`).set(null);
  }
  
    
  return (
    <>
    <PasswordBank addItem={addItem} removeItem={removeItem} itemsRef={ref}/>
    <GlobalStyle/>
    </>
    
  );
}
