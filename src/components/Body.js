
import image from './../../assets/images/dinner1.avif';
import mockdata from './../utils/mockdata'
import Card, {CardUpdate } from './Card'
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useRestData  from './../utils/useRestData'
import useOnlineStatus from './../utils/useOnlineStatus'
import UserContext from "./../utils/UserContext";
const Body = () => { 
  // if (true) {
  //   return (<Shimmer/>)
  // }
  const ddd = useRestData();
  const onlineStatus = useOnlineStatus();
  // console.log("useRestDatauseRestData", ddd)
  const [dataarr, setDataArr] = useState(mockdata)
  const [filteredarr, setfilteredarr] = useState(mockdata)
  const [searchText, setSearchText] = useState('');
  const [showItem, setShowItem] = useState(null);
   const [showItemIndex, setShowItemIndex] = useState(0);
  console.log("showItemshowItem", showItem)
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //        const json1 = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  //        const ddJson = await json1.json();
  //          setDataArr(ddJson);
  //   console.log('ddJsonddJson', ddJson);
    
  //  }
  // console.log('Body rerendered');

  const CardWithPromoted=CardUpdate(Card)

  if (onlineStatus === false) { 
    return(<h1>Looks like. you are offline.</h1>)
  }
  const {loginUser,setUserName} = useContext(UserContext);
  return (
    <div className='m-4 p-4' >
      <input type='search' placeholder='Search' className='m-4 p-2 border border-spacing-4' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />      
      <button
        className='border m-2 p-2 bg-red-100'
        onClick={() => { 
       
        const filter=dataarr.filter((item)=>item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        setfilteredarr(filter);
        }}>Search</button> 
      <div>
        <label>UserName:</label>
        <input type="text" name="user"
          className='p-2 m-2 border border-black'
          value={loginUser}
          onChange={(e) => { setUserName(e.target.value) }}
        >

        </input>
         </div>
          <div className='flex'>
            
            
        {filteredarr.map((item, index) =>
          <Link to={'/restmenu/' + item.id} key={item.id}>=={ showItem}
            {false ? (<CardWithPromoted data={item} key={item.id} />) :
              (<Card data={item} key={item.id}
              
                setShowItem={ true}
                setShowItemIndex={() => { 
                  setShowItemIndex(index)
                }}
              />)
            }
           </Link>
                          )
                        
                        }      
            </div>
      </div>)
}

export default Body;