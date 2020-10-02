import React, { Component } from "react";
import MenuHome from "./Page/MenuHome"

class App extends Component{
  render(){
    return(
      <div>

        <MenuHome/>
        <br/>
      </div>
    );
  }
}
export default App;


//
//
// import React, {Component} from "react";
// import MenuHome from "./Page/MenuHome"
// import MenuMakanan from "./Page/MenuMakanan"
// import MenuMinuman from "./Page/MenuMinuman"
//
// import Kontak from "./Page/Kontak";
//
//
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from 'react-router-dom'
//
//
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Router>
//
//         <br/>
//         <Switch>
//               <Route path="/" exact component={MenuHome} />
//               <Route path="/menu_makanan" component={MenuMakanan} />
//               <Route path="/menu_minuman" component={MenuMinuman} />
//               <Route path="/kontak" component={Kontak} />
//         </Switch>
//         </Router>
//       </div>
//     );
//   }
// }
//
// export default App;
