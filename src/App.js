import Login from './containers/Login/Login';
import Header from './containers/Header/Header';
import Navbar from './containers/Navbar/Navbar';
import SideBar from './containers/SideBar/SideBar';
import Main from './containers/Main/Main';
import Feature from './containers/Feature/Feature';
import Collections from './containers/Collections/Collections';
import Trending from './containers/Trending/Trending';
import SpecialOffer from './containers/SpecialOffer/SpecialOffer';
import OurProducts from './containers/OurProducts/OurProducts';
import Customer from './containers/Customer/Customer';
import Articles from './containers/Articles/Articles';
import Footer from './containers/Footer/Footer';

import './App.scss'

function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <Navbar />
      <div className="side-main">
          <SideBar />
          <Main />
      </div>
      <div className="container">
        <Feature />
        <Collections />
        <Trending />
        <SpecialOffer />
        <OurProducts />
        <Customer/>
        <Articles/>
        <Footer/>
      </div>
      <hr />
      <p className='text-footer'>© 2021 Funking - All rights reserved.</p>
    </div>
  );
}

export default App;
