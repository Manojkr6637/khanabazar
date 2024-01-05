import React from 'react';
import UserContext from './../utils/UserContext';
class UserClass extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2:1
    }
    console.log(this.props.name+'Child constructor called')
  }
  componentDidMount() { 
    this.clear=setInterval(() => {
      console.log("Namaste APP");
     }, 1000);
  console.log(this.props.name+'Child componentdid mounte called')
  }
   componentDidUpdate(prevprops, prevstate) { 
     console.log('child component update called');
     
     if (this.state.count !== prevstate.count) { 
       //
     }
     if (this.state.count2 !== prevstate.count2) { 
       
     }
  }
  componentWillUnmount() { 
     clearInterval( this.clear)
    console.log('child will update');
  }
  render() { 
    const { name, designation } = this.props;
    const { count, count2 } = this.state
    console.log(this.props.name+'Child render')
    return (
    <div className="user-card">
        <h2>User Profile</h2>
        <p>Count:{count}</p>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update</button>
        <p>Count2:{ count2}</p>
        <p>Name:{ name}</p>
        <p>Designation:{designation}</p>
        <p><UserContext.Consumer>
          {({ loginUser}) => (<h2 className='text-w-20'>{ loginUser}</h2>)}
        </UserContext.Consumer></p>
        
    </div>
  );
  }
}

export default UserClass