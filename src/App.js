import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./Router/RouterApp";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <RouterApp/>
        </BrowserRouter>
    </div>
  );
}

export default App;
