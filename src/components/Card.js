import React from "react";
import { useContext } from "react";
import UserContext from "./../utils/UserContext";
// import { useDispatch } from "react-redux";
// import { addItem} from "../utils/cartSlice"

const Card = (props) => { 
  // console.log("propsprops", props)
  //   console.log("props.dataprops.data", props.data)
  const { id, title, description, image_url } = props?.data;
  // const getEvent = () => {
  //   console.log("getEvent");
  //   // { props,setShowItemIndex}
  //   // setShowItemIndex()
  //  }
  const { loginUser } = useContext(UserContext)

  // const dispatch = useDispatch();
  // const addItemHandler = () => { 
  //   dispatch(addItem("Test iatmes"))


  // }

  return (
    <div className='border hover:bg-slate-300' key={ id}>        
            <div className="card-image">
              <img src={ image_url} className='w-56'></img>
            </div> 
             <div className='card-description'>
        <p className='title'>{ title}</p> 
        <p className="description">{description}</p>
        {/* <button
          // onClick={getEvent}
          className="m-2 p-2  
        text-center bg-pink-400 rounded-lg text-white"
          onClick={ addItemHandler}
        >Add+</button> */}
      </div>
      <p>{ loginUser}</p>
      </div>  
  );
}

export const CardUpdate = (Card) => { 
  return (props) => { 
    console.log('propsprops', props)    
    return (
      <div>
        <label>Promoted</label>
        <Card {...props} />
      </div>
    )
  }
}

export default Card;