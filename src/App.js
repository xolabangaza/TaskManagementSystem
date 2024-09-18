import logo from './logo.svg';
import './App.css';

function TopSec(){

  return(
      <div className="image-container">
      
       <h1 className="heading">Welcome to Team 25A's Task Management System</h1>
          {/* <p>This tool was created with the use of figma,html,react,javascript and c#,sql for the backend. <br />This program represents a simple task management system that allows a user to create , <br />view, delete and update a task. This is possible by using api’s that were created on the c# <br />side and it is connecting to a database that stores these values. </p> */}
          <h3>TO GET STARTED PRESS HERE!</h3>
          <a className="h" href="https://www.altcademy.com/blog/how-to-add-hyperlink-to-button-in-reactjs/">
          <button >
          <i className="fa fa-play" style={{ color: "#000714" }}></i> CLICK ME!
          </button>
          </a>
          {/* <img className ="redImage"src={Sprinters} alt="Team25A" />  */}
      </div>
  );
}

export default TopSec
