import { useRouteError } from "react-router-dom";

const Error = () => { 
  const err = useRouteError();
  console.error("errerr", err);
  return (<div>
    <h1>Error Occured.</h1>
    <p>Something went wrongs. Try again.</p>
    <h3>{err.status}:{ err.statusText}</h3>
  </div>);
}

export default Error;