import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [name , setName] = useState('');
    const [address , setAddress] = useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        const student = {name, address};


        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(student)
    }).then(()=>{
            console.log("New Student Added")
            }

        )

    }

    return (
    <form>
        <label>NAME:</label>
      <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <br/>
        <label>ADDRESS:</label>
      <input type="text" name="address" value={address} onChange={(e)=> setAddress(e.target.value)} />
        <br/>
        {name}
        <br/>
        {address}
        <button onClick={handleClick}>Submit</button>
    </form>
  );
}

export default App;
