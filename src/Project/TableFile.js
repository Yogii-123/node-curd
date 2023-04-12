import './Table.css'
import {useNavigate} from "react-router-dom"
import axios  from 'axios';
import { useEffect, useState } from 'react';
// import Demo from './demo';


function TableFile(){
    
       const navigate = useNavigate();
       const [first,setfirst]=useState([]);
      //  const [searchInput, setSearchInput] = useState("");
      //  const b= [
      //   { Name: "Thomas Hardy" },
      //   { Name: "Maria Anders" },
      //   { Name: "Fran Wilson" },
      //   { Name: "Dominique perrier" },
      //   { Name: "Martin Blank" },]

       let i=1;       


       function getdata1(){
      axios.get("http://localhost:9000/get")

       .then((res)=>{
        console.log("get data");
        setfirst(res.data)

       })};


       function delbtn(_id){
        axios.delete(`http://localhost:9000/get/del/${_id}`)
        .then((res)=>{
          console.log(res.data);
          getdata1(res.data)
        })

       }



       useEffect(()=>{
        getdata1();
       },[]);


      function Update1 (_id,Name,Address,City,Pincode,Country){
        localStorage.setItem("id1",_id)
        localStorage.setItem("Name1",Name)
        localStorage.setItem('Address1',Address)
        localStorage.setItem('City1',City)
        localStorage.setItem('Pincode1',Pincode)
        localStorage.setItem('Country1',Country)
        navigate("/Update")
      }
      // const handleChange = (e) => {
      //   e.preventDefault();
      //   setSearchInput(e.target.value);
      // };
      
      // if (searchInput.length > 0) {
      //     b.filter((country) => {
      //     return country.name.match(searchInput);
      // });
      // }


    
    return(
      
        <div>

               <button className='back' onClick={()=>navigate("/")}>back to form</button>

         <div>
             {first.length===0 ?(<h3 className='head2'>No Data Found</h3>):

           (<table>
                <h3>Customer Details</h3>
                {/* <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} /> */}

                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Pincode</th>
                    <th>Country</th>
                    <th>edit or delete</th>
                 </tr>


                 {first.map((ex)=>(
                 <tr >
                    <td>{i++}</td>
                    <td>{ex._id}</td>
                    <td>{ex.Name}</td>
                    <td>{ex.Address}</td>
                    <td>{ex.City}</td>
                    <td>{ex.Pincode}</td>
                    <td>{ex.Country}</td>

                    
                    <td><button onClick={()=>Update1(ex._id,ex.Name,ex.Address,ex.City,ex.Pincode,ex.Country)}>edit</button>
                        <button onClick={()=>delbtn(ex._id)}>delete</button></td>
                 </tr>
             ))}

{/* <Demo></Demo> */}
                         </table>
                         
                         
                         )}
            </div>
            </div>
    )
}
export default TableFile;
