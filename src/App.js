import './App.css';
import Card from "./Components/Card";
import CircularImage from './Components/CircleImg';
import contacts from "./contacts";

function createCard(contact) {
  return <Card name={contact.name} imgURL={contact.imgURL} phone={contact.phone} email={contact.email} />
}

function App() {
  return <div><h1 className='heading'>My Contacts</h1>
    {contacts.map(createCard)}
  </div>;
}

export default App;
