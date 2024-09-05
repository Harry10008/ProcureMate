import './Viewtenders.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../APIurls';
import { Link } from 'react-router-dom';

function Viewtenders() {

  const [ clist , setCatList ] = useState([]);

  useEffect(()=>{
    axios.get(_categoryapiurl+"fetch").then((result)=>{
      setCatList(result.data);
    }).catch((error)=>{
      console.log(error);  
    });
  });

  return (
  <>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Category for <span class="text-primary">Tenders &gt;&gt; </span></h1>
<center>
<div id="category_main">
{
  clist.map((row)=>(
  <Link to={`/viewsctenders/${row.catnm}`} >
    <div class="category_part">
      <img src={`assets/uploads/caticons/${row.caticonnm}`} height="100" width="150" />
      <br/>
      <b>{row.catnm}</b>
    </div>
  </Link>  
  ))
}


</div>
</center>
            </div>
        </div>
    </div>
    {/* About End */}
  </>
  );
}

export default Viewtenders;
