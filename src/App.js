import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Friend Tracker</h1>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/my-profile-pic.png'}
          alt = "Shaun Smiling"
          height="200" />
          <h2>My Profile</h2>
          <h3>Name</h3>
          <p>Oli</p>
          <h3>Age</h3>
          <p>100</p>
          <h3>Bio</h3>
          <p>I like to program and eat food.</p>
          <h3>Birthday</h3>
          <p>August 1st</p>
          <h3>Interests</h3>
          <ul>
            <li>Programming</li>
            <li>Data Science</li>
          </ul>
      </div>
    </div>

  );
}

export default App;
