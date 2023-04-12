import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Update(){

    const [id1, setid1] = useState(0);

    const [Name1,setName1]=useState();
    const [Address1,setAddress1]=useState();
    const [City1,setCity1]=useState();
    const [Pincode1,setPincode1]=useState();
    const [Country1,setCountry1]=useState();

    const navigate=useNavigate();


function update2(e){
    e.preventDefault();

    axios.put(`http://localhost:9000/get/up/${id1}`,
    {
        Name:Name1,
        Address:Address1,
        City:City1,
        Pincode:Pincode1,
        Country:Country1,
    })
    .then((res)=>{
        // console.log(res.data);
        console.log('updated');
        navigate("/TableFile")

    })


}


useEffect(() => {
    setid1(localStorage.getItem("id1"))
    setName1(localStorage.getItem("Name1"))
    setAddress1(localStorage.getItem("Address1"))
    setCity1(localStorage.getItem("City1"))
    setPincode1(localStorage.getItem("Pincode1"))
    setCountry1(localStorage.getItem("Country1"))
},[])

    return(
        <div>
                        <h3 className='head'> Updates </h3>
            <form onSubmit={update2}>

                {/* <label className='select1'>Name
                           <select  onChange={(e)=>setName1(e.target.value)} value={Name1}className='select2'>
                           <option>Thomas Hardy</option>
                    <option>Maria Anders</option>
                    <option>Fran Wilson</option>
                    <option>Dominique perrier</option>
                    <option>Martin Blank</option>
                    </select>
                    </label><br></br> */}

<label className='text'>Name
                    <input type='text'  onChange={(e)=>setName1(e.target.value)} value={Name1}className='select2'></input>
                </label><br></br>

                <label className='password'>Address
                    <input type='text'onChange={(e)=>setAddress1(e.target.value)} value={Address1}></input>
                </label><br></br>
                
                {/* <label className='select1'>City

<select onChange={(e)=>setCity1(e.target.value)} value={City1} className='select2'>
<option>Portland</option>
<option>Berlin</option>
<option>Madrid</option>
<option>Paris</option>
<option>Turin</option>
</select>
</label><br></br> */}

<label className='select1'>City
<input type='text' onChange={(e)=>setCity1(e.target.value)} value={City1} className='select2'></input>
</label><br></br>


                <label className='mail'>Pincode
                    <input type='number' onChange={(e)=>setPincode1(e.target.value)} value={Pincode1}></input>
                </label><br></br>

                <label className='select1'>Country

{/* <select  onChange={(e)=>setCountry1(e.target.value)} value={Country1} className='select2'>
<option>USA</option>
<option>Germany</option>
<option>Spain</option>
<option>France</option>
<option>Italy</option>
</select>
</label><br></br> */}

<input type='text' onChange={(e)=>setCountry1(e.target.value)} value={Country1} className='select2'></input></label><br></br>


                <button type='submit' className='btn1'>Update</button>

            </form>    
        </div>
    )
}
export default Update;