import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import image from"./logo.png"
function App() {

  return (<>
  <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <img
            src={image}
            alt="myimg"
            className='image'
          />
          <h1 className='main-text'>ToDO List</h1>
          <div className="sub-text">
            <h4>Add Your List Here</h4>
          </div>

        <TodoItem/>
        </div>
      </div>
      {/* <div class="row justify-content-center">
        <div class="col-xl-6 text-center bg-secondary text-black">
          <h1>HIIIIII</h1>
        </div> */}
    </div>
  
  </>
  );
}

export default App;
