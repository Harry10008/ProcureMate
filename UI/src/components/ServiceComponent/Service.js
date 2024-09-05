import './Service.css';
import { useState , useEffect } from 'react';
import axios from 'axios';


function Service() {

  const [ pDetails , setPostDetails ] = useState([]);
  const [ apiURL , setApiURL ] = useState("https://jsonplaceholder.typicode.com/posts");
  
  useEffect(()=>{
    axios.get(apiURL).then((result)=>{
      //console.log(result);
      setPostDetails(result.data);
    }).catch((error)=>{
      console.log(error);  
    });
  },[]);

  return (
  <>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">View & Manage <span class="text-primary">Post Details</span></h1>

<table>
<tr>
<th>UserID</th>
<th>Id</th>
<th>Title</th>
<th>Body</th>
</tr>  
{
  pDetails.map((row)=>(
    <tr>
      <td>{row.userId}</td>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.body}</td>
    </tr>
  ))
}

</table>

            </div>
        </div>
    </div>
    {/* About End */}
  </>
  );
}

export default Service;
