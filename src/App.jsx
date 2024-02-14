import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Button2 from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import UuseState from "./UuseState";
import Counter from "./Counter";
import OonChange from "./OonChange";
import ColorPicker from "./ColorPicker";
import Updater from "./Updater";
import UpdateObject from "./UpdateObject" 
import UpdateArray from "./UpdateArray";
import UpdateArrayObject from "./UpdateArrayObject";
import TodoList from "./TodoList";
import UseEffect from "./UseEffect";
import Digitalclock from "./DigitalClock"
import ComponentA from "./useContext/ComponentA";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                {id: 2, name: "orange", calories: 45}, 
                {id: 3, name: "banana", calories: 105}, 
                {id: 4, name: "coconut", calories: 159}, 
                {id: 5, name: "pineapple", calories: 37}] 

const vegetables = [{id: 1, name: "potatoes", calories: 110}, 
                {id: 2, name: "celery", calories: 15}, 
                {id: 3, name: "carrot", calories: 25}, 
                {id: 4, name: "corn", calories: 63}, 
                {id: 5, name: "barcoli", calories: 50}] 


  return (
    <>
      <ComponentA />
      <hr />
      <Digitalclock />
      <hr />
      <Header />
      <UseEffect />
      <hr />

     <TodoList />
      <hr />
      <UpdateArrayObject />
      <hr />
      <UpdateArray />
      <hr />
      <UpdateObject />
      <hr />
      <h3>Updater</h3>
      <Updater />
      <hr />
      <ColorPicker />
      <hr />
      <OonChange />
      <hr />
      <Counter />
      <hr />
      <UuseState />
      <hr />
      <ProfilePicture />
      <hr />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null }

      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" /> }
      <hr />
      <UserGreeting isLoggedIn={true} username="jack" />
      <UserGreeting />
      <hr />
      <Student name="Jack" age={30} isStudent={true} />
      <Student name="Patrick" age={40} isStudent={false} />
      <Student name="Sqidward" age={50} isStudent={false} />
      <Student  />
      <hr />
      <Button />
      <Button2 />
      <hr />
      <Card />
      <Card /><Card /><Card /><Card />
      <Food />
      <Footer />
    </>
  );
}

export default App;
