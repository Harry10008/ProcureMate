import './Viewsctenders.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl , _subcategoryapiurl } from '../../APIurls';
import { useParams , Link } from 'react-router-dom';

function Viewsctenders() {

  const params = useParams();
  const [ sclist , setSubCatList ] = useState([]);

  useEffect(()=>{
    axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((result)=>{
      setSubCatList(result.data);
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
<h1 class="display-5 mb-4">SubCategory for <span class="text-primary">Tenders &gt;&gt; {params.catnm}</span></h1>
<center>
<div id="category_main">
{
  sclist.map((row)=>(
  <Link to="" >
    <div class="category_part">
      <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150" />
      <br/>
      <b>{row.subcatnm}</b>
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

export default Viewsctenders;
