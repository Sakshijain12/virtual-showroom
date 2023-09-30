// import React, { Suspense } from 'react';
// import { Route, Switch } from "react-router-dom";
// import Auth from "../hoc/auth";
// // pages for this product
// import LandingPage from "./views/LandingPage/LandingPage.js";
// import LoginPage from "./views/LoginPage/LoginPage.js";
// import RegisterPage from "./views/RegisterPage/RegisterPage.js";
// import NavBar from "./views/NavBar/NavBar";
// import Footer from "./views/Footer/Footer"
// import UploadProductPage from './views/UploadProductPage/UploadProductPage'
// import DetailProductPage from './views/DetailProductPage/DetailProductPage';
// // import ProductInfo from './views/DetailProductPage/Sections/ProductInfo';
// import CartPage from './views/CartPage/CartPage';
// import PlaceOrderPage from './views/PlaceOrderPage/PlaceOrderPage';
// import HistoryPage from './views/HistoryPage/HistoryPage';
// import OrderList from './views/ProcessOrder/OrderList';
// import OrderView from './views/ProcessOrder/Sections/OrderView';
// ///
// import Team from './views/AboutUsPage/Team';
// import Service from './views/AboutUsPage/Service';
// import Reviews from './views/AboutUsPage/Reviews';
// import Contact from './views/AboutUsPage/Contact';

// function App() {
//   return (
//     <Suspense fallback={(<div>Loading...</div>)}>
//       <NavBar />
//       <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)'}}>
//         <Switch>
//           <Route exact path="/" component={Auth(LandingPage, null)} />
//           <Route exact path="/login" component={Auth(LoginPage, false)} />
//           <Route exact path="/register" component={Auth(RegisterPage, false)} />
//           <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
//           <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
//           <Route exact path="/user/cart" component={Auth(CartPage, true)} />
//           <Route exact path="/user/placeOrder" component={Auth(PlaceOrderPage, true)} />
//           <Route exact path="/history" component={Auth(HistoryPage, true)} />

//           <Route path="/team" component={Auth(Team, true)} />
//           <Route exact path="/service" component={Auth(Service, true)} />
//           <Route exact path="/reviews" component={Auth(Reviews, true)} />
//           <Route exact path="/contacts" component={Auth(Contact, true)} />
//           <Route exact path="/orderlist" component={Auth(OrderList, true)} />
//           <Route exact path="/orderview/:orderId" component={Auth(OrderView, true)} />
//         </Switch>
//       </div>
//       <Footer />
//     </Suspense>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import {Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';

// Import your components here
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import PlaceOrderPage from './views/PlaceOrderPage/PlaceOrderPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import OrderList from './views/ProcessOrder/OrderList';
import OrderView from './views/ProcessOrder/Sections/OrderView';
import Team from './views/AboutUsPage/Team';
import Service from './views/AboutUsPage/Service';
import Reviews from './views/AboutUsPage/Reviews';
import Contact from './views/AboutUsPage/Contact';

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
            <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/user/cart" component={Auth(CartPage, true)} />
            <Route exact path="/user/placeOrder" component={Auth(PlaceOrderPage, true)} />
            <Route exact path="/history" component={Auth(HistoryPage, true)} />
            <Route exact path="/team" component={Auth(Team, true)} />
            <Route exact path="/service" component={Auth(Service, true)} />
            <Route exact path="/reviews" component={Auth(Reviews, true)} />
            <Route exact path="/contacts" component={Auth(Contact, true)} />
            <Route exact path="/orderlist" component={Auth(OrderList, true)} />
            <Route exact path="/orderview/:orderId" component={Auth(OrderView, true)} />
            {/* Add a catch-all route for 404 errors */}
            <Route render={() => <div>404 Not Found</div>} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
  );
}

export default App;

