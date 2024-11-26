import React from "react";
import Card from "./Card";
import contacts from "../Contact";
import Avatar from "./Avatar";
function createCard(contact){
  return (
    <Card
    id={contact.id}
   // key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
    );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://4.bp.blogspot.com/-hUcx4fAPgSY/WaVTsADjR0I/AAAAAAAABzg/uVO_SlJAHTUFZWpa8CNuQfoDcgTU2elhACLcBGAs/s1600/4.jpeg"/>
      {contacts.map(createCard)}
      
    </div>
  );
}

export default App;
