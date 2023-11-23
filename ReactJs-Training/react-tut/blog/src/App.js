import logo from './logo.svg';
import './App.css';
// import {User}  from './user';
import ClassComponent  from './classcompo';
import React  from 'react';




// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//       <User></User>
//       <ClassComponent/>
//     </div>
//   );
// }



// Class component in react

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:"Ashish"
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Hello {this.state.data}</h1>
        <User></User>
        {/* <ClassComponent/> */}
      </div>
    );
  }
}

export default App;export function User(){
  return (
      // <div>
          // {/* <h1>Function   Component</h1> */}
          // <h1>user Component</h1>
      // {/* </div> */}
      console.log("Hello World")
  )
}

