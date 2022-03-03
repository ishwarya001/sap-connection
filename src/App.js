import './App.css';
import {useState,useEffect} from "react";
import axios from "axios"

function App() {
  const[posts,setPosts]=useState([])
  useEffect(() => {
    console.log("usefe");
    fetchData();
    }, []);

    async function fetchData() {
      console.log("fetchmethod");
      try {
        console.log("fetchmethod-try");
        const result = await axios.get("http://awsape01.collabera.io:8011/sap/opu/odata/sap/ZIV_USER_DATA_EXTRACT_SRV/UserDetailsSet/")
        console.log("result",result.json())
        setPosts(result)
        console.log("fetchmethod-try-end");
      } catch (error) {
        console.log("fetchmethod--catch");
        console.error(error);
      }
    }

// const fetchData = () => {
//   console.log("fetchmethod");
//     return axios.get("http://awsape01.collabera.io:8011/sap/opu/odata/sap/ZIV_USER_DATA_EXTRACT_SRV/UserDetailsSet/")
//           .then((response) => console.log(">>>>",response));}

  
  return (
    <div className="App">
      <h1>sap-connection</h1>
      <p>sapppp</p>
      <p>{posts}</p>
     
    </div>
  );
}

export default App;
