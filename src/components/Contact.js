import {useState, useEffect } from "react";

const Contact = () => {
  const [count1, setCount] = useState(0);
  const[count2, setCount2]=useState(0);
  useEffect(() => {
    console.log("Use Effect called");
  }, [count1, count2])
   console.log('use Effect')
  useEffect(() => { 
    console.log('use Effect')
    const timer = setInterval(() => {
      console.log('Namaste app');
    }, 1000);
    return () => {
      console.log('work as componentDidUnmount');
      clearInterval(timer);
    };
  },[]);
  console.log('use Effect')
  return (<div>Contact us
    <p>Count:{count1}</p>
     <p>Count2:{ count2}</p>
    <button onClick={() => {     
      setCount(count1 + 1);
      setCount2(count2+1);
     }}>Update</button>
  </div>)
}

export default Contact;