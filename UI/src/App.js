import './App.css';

import { Routes , Route } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import Banner from './components/BannerComponent/Banner';
import Main from './components/MainComponent/Main'; 
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Footer from './components/FooterComponent/Footer';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import Userhome from './components/UserhomeComponent/Userhome';
import Logout from './components/LogoutComponent/Logout';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import Manageusers from './components/ManageusersComponent/Manageusers';
import Addcategory from './components/AddcategoryComponent/Addcategory';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory';
import Viewtenders from './components/ViewtendersComponent/Viewtenders';
import Viewsctenders from './components/ViewsctendersComponent/Viewsctenders';

function App() {
  return (
  <>

    <Header />

    <Nav />

    <Banner />


    <Routes>
        <Route path="/" element={<Main />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/admin" element={<Adminhome />} ></Route>  
        <Route path="/user" element={<Userhome />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/cpadmin" element={<CPAdmin />} ></Route> 
        <Route path="/epadmin" element={<EPAdmin />} ></Route>
        <Route path="/manageusers" element={<Manageusers />} ></Route>
        <Route path="/addcategory" element={<Addcategory />} ></Route>
        <Route path="/addsubcategory" element={<Addsubcategory />} ></Route>
        <Route path="/viewtenders" element={<Viewtenders />} ></Route>
        <Route path="/viewsctenders/:catnm" element={<Viewsctenders />} ></Route>
    </Routes>


    

  <Footer />  

  </>
  );
}

export default App;
