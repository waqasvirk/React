import React from 'react';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Button } from 'react-bootstrap';

function App() {
  const [count,setCount] = React.useState(0);
  const [count1,setCount1] = React.useState("");
  const add = ()=>{
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount1("hello")
    console.log(count)
    console.log(count1)
  }
  return (
    // <div className="container">
    //   <h1><i className="fa fa-home"></i>Hello from React</h1>
    //   <Button variant="danger">Bootstrap Button</Button>
    //   <br></br>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
    // </div>
    <div className="container">
      <h1><i className="fa fa-home"></i>Hello from React</h1>
     <Button variant="danger" onClick={add}>Add{count}</Button>
    </div>
  );
}
export default App;
