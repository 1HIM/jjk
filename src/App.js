import React from 'react';
import Card from 'react-bootstrap/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const characters = [
  {
    name: "Satoru Gojo",
    age: "28",
    cursetechnique: "infinity and 6eyes",
    level: "special grade",
    image: "./gojo.jpg",
    desc:"had it easy all his life got humbled after" 
  },
  {
    name: "Ryumen Sukuna",
    age: "over 1000",
    cursetechnique: "slice and cleave",
    level: "special grade",
    image: "./sukuna.jpg",
    desc:"my glorius king and gojo's humbler" 
  },
  {
    name: "Okkutsu Yuta",
    age: "17",
    cursetechnique: "copy paste",
    level: "special grade",
    image: "./yuta.jpg",
    desc:"OUR curse technique plus loyal af" 
  },
  {
    name: "Kenjaku",
    age: "over 1000",
    cursetechnique: "control over",
    level: "special grade",
    image: "./kenjaku.jpg",
    desc:"damn bro you that desprate to get sukuna back ?"
  },
  {
    name: "Itadori HIM Yuji",
    age: "15",
    cursetechnique: "left right goodnight",
    level: "HIM grade",
    image: "./HIM.jpg",
    desc:"the underdog who's gonna be sukuna slayer sonn" 
  }
];

function CharacterCard({ character }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {character.image && <Card.Img variant="top" src={character.image} alt={character.name} />}
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          Age: {character.age}<br />
          Curse Technique: {character.cursetechnique}<br />
          Level: {character.level}<br/>
          description:{character.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
}

export default App;
