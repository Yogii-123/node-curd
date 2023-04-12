import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Form.css';
function FormPage(){
    const [Name,setName]=useState();
    const [Address,setAddress]=useState();
    const [City,setCity]=useState();
    const [Pincode,setPincode]=useState();
    const [Country,setCountry]=useState();

    
    const navigate=useNavigate();

    function qualfun(e){
        setName(e.target.value)
    }

    function Address1(e){
        setAddress(e.target.value)
    }
    function cityfun(e){
        setCity(e.target.value)
    }
    function pinfun(e){
        setPincode(e.target.value)
    }
    function counfun(e){
        setCountry(e.target.value)
    }
    function sub(e){
        e.preventDefault();
        axios.post("http://localhost:9000/",
        {
            Name:Name,
            Address:Address,
            City:City,
            Pincode:Pincode,
            Country:Country,
        }
        )
        .then((res)=>{
            console.log(res.data);
            navigate("/TableFile")
        })

   }
    return(
        <div>
            <h3 className='head'>Customer Details</h3>
            <form onSubmit={sub}>

                {/* <label className='select1'>Name
                           <select  onChange={qualfun} className='select2'>
                           <option>Thomas Hardy</option>
                    <option>Maria Anders</option>
                    <option>Fran Wilson</option>
                    <option>Dominique perrier</option>
                    <option>Martin Blank</option>
                    </select>
                    </label><br></br> */}
                                    <label className='text'>Name
                    <input type='text'  onChange={qualfun}></input>
                </label><br></br>

                <label className='password'>Address
                    <input type='text'  onChange={Address1}></input>
                </label><br></br>
                
                {/* <label className='select1'>City

<select  onChange={cityfun} className='select2'>
<option>Portland</option>
<option>Berlin</option>
<option>Madrid</option>
<option>Paris</option>
<option>Turin</option>
</select>
</label><br></br> */}

<label className='select1'>City
<input type='text' onChange={cityfun}></input>
</label><br></br>


                <label className='mail'>Pincode
                    <input type='number' onChange={pinfun}></input>
                </label><br></br>

                <label className='select1'>Country

{/* <select  onChange={counfun} className='select2'>
<option>USA</option>
<option>Germany</option>
<option>Spain</option>
<option>France</option>
<option>Italy</option>
</select>
</label><br></br> */}
<input type='text' onChange={counfun} className='select2'></input></label><br></br>



                <button type='submit' className='btn1'>submit</button>
            </form>

        </div>
    )
}
export default FormPage;