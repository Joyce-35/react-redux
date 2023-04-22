
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./Users";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './profile pic.png';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      <h3>React Redux Forms</h3>
      {" "}
      <div className="addUser">
        <input
           className="input"
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
            
          }}
         
        />
         <br/>
        <input
          className="input"
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
            
          }}
        />
         <br/>
        <button
        className="button"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            
            <div>
               <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title>My Detais</Card.Title>
        <Card.Img variant="top" src={logo} />
        <Card.Text><h5>Name: {user.name}</h5></Card.Text>
        <Card.Text><h5>UserName: {user.username}</h5></Card.Text>

        <input
              className="input1"
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
         <button
              className="button1"
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update Username
              </button>
              <button
              className="button2"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
      </Card.Body>
    </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;