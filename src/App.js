import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Message from "./components/Message";
import ProductContainer from "./container/ProductContainer";
import CartContainer from "./container/CartContainer";

function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductContainer />
          <Message />
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
