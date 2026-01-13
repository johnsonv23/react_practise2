import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";  
import MyComponent2 from "./MyComponent2.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MyComponent3 from "./MyComponent3.jsx"
import MyComponent4 from "./MyComponent4.jsx";
import MyComponent5 from "./MyComponent5.jsx";
import MyComponent6 from "./MyComponent6.jsx";
import ToDoList from "./ToDoList.jsx";
import MyComponenet7 from "./MyComponent7.jsx";
import MyComponenet8 from "./MyComponent8.jsx";
import DigitalClock from "./DigitalCLock.jsx";
import ComponentA from "./ComponentA.jsx";
import MyComponent9 from "./MyComponenet9.jsx";

function App() {

  const fruits = [{id:1, name:"apple", calories: 95},
                    {id:2, name:"orange", calories: 45},
                    {id:3, name:"banana", calories:105},
                    {id:4, name:"coconut", calories:159},
                    {id:5, name:"pineapple", calories:37}];

  const vegetables = [{id:6, name:"potatoes", calories: 110},
                    {id:7, name:"celery", calories: 15},
                    {id:8, name:"carrots", calories:25},
                    {id:9, name:"corn", calories:63},
                    {id:10, name:"broccoli", calories:50}];                  
  
  return(
    <>
    <Header/>
    <Food/>
    <Card/>
    <Button/>
    <Student name="Spongebob" age="30" isStudent={true}/>
    <Student name="Patrick" age={32} isStudent={false}/>
    <Student/>
    <UserGreeting isLoggedIn = {false} username="john"/>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/>: null}
    {vegetables.length > 0 ? <List items={vegetables} category="Veges"/>:null}

    {/* {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Veges"/>} */}
    <ProfilePicture/>
    <MyComponent/>
    <Counter/>
    <MyComponent2/>
    <ColorPicker/>
    <MyComponent3/>
    <MyComponent4/>
    <MyComponent5/>
    <MyComponent6/>
    <ToDoList/>
    <MyComponenet7/>
    <MyComponenet8/>
    <DigitalClock/>
    <ComponentA/>
    <MyComponent9/>
    <Footer/>
    </>
  );

}

export default App
