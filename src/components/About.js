// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component { 
  constructor(props) { 
    super(props);
    console.log('parent constructor called');
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Delhi", 
        avatar_url:""
      }
    }
  }
  async componentDidMount() { 
    console.log('parent component mount called');
    const dd = await fetch('https://api.github.com/users/Manojkr6637')
    const json = await dd.json();
    console.log("json", json)
    this.setState({ userInfo: json })
  }
  componentDidUpdate() { 
    console.log('parent component update called');
  }
  componentWillUnmount() { 
    console.log('Parent will update');
  }
    render() { 
      console.log('parent rendering...');
      const { name, location, avatar_url } = this.state.userInfo
      return (<div className="About">
        <h2>About Us</h2>
         <p>Location:{ name}</p>
        <p>Location:{ location}</p>
        <img src={avatar_url} height={'20px'} width={'50px'} alt="Profile image"/>
        {/* <User name="Sonu"/> */}
        {/* <UserClass name="Kalpana" designation="CA" />
         */}
         <UserClass name="Manoj" designation="Engineer"/>
      </div>);
    }
}
/*
 Parent constructor
 parent render
 
 First constructor
 second render

 second constructor
 second render

 <DOM update -in single batch >
 Frst ComponentDidMount
 Second ComponentDidMount

 Parent ComponentDidMount
  
*/

export default About;