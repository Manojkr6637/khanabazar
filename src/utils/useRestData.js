import { useState, useEffect } from "react"

const useRestData = () => { 
  const [userData, setUserData] = useState(null)
  useEffect(() => { 
    fetchData();
  }, []);
  const fetchData =async () => { 
    const dd = await fetch('https://reqres.in/api/users?page=2');
    const json = await dd.json();
    // console.log("json", json)
   setUserData(json);
  }
  return userData;
}

export default useRestData;