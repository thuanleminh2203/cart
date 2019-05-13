import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Cart from './components/Cart';
import Products from './components/Products';


function App() {
  return (
   <div>
   
       <Header/>
        <main id="mainContainer">
            <div className="container">
      
              <Products />
               <Message />
   
               <Cart />
            </div>
        </main>
    <Footer />
       </div>
  );
}

export default App;
