import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import Vesta from "./pages/Vesta";

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

function App() {
  return (
    <Router>
      <div>
          <Route component={Vesta} />
      </div>
    </Router>
  );
}

export default App;
