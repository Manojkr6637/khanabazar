import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const ResMenu = () => { 
  const params = useParams();
  // console.log("paramsparams", params);
  const [resData, setResData] =useState(null);

  useEffect(() => { 
    fetdata();
  }, []);
   
  const fetdata = async () => {
    const dd = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const dd1 = await dd.json();     
    setResData(dd1);
    // console.log("dd1dd1", dd1);
    // console.log("resData", resData);
    
  }
  if(resData==null) return <Shimmer/>

  const { title}=resData

  return (
    <div className="ResMenu">
      <ul>
        <li>{ title}</li> 
      </ul>
    </div>
  );
}

export default ResMenu;