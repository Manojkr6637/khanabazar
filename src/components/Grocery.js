const Grocery = () => { 
  return (<div>
    <h1>This is a heading.</h1>
    This is a Grocery shop.
     
      <form className="bg-pink-100">
        <label >Name:</label>
        <input type="text" placeholder="Name" />
          <label  >Age:</label>
        <input type="text" placeholder="Age" />
        <button>Send</button>
      </form>
    
  </div>);
}

export default Grocery;