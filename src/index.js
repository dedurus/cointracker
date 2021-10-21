import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Provider from "./Provider";

import SignIn from './Components/RegisterUser/SignIn'
import SignUp from './Components/RegisterUser/SignUp'
import WelcomePage from "./Components/WelcomeWizard/WelcomePage";
import Overview from "./Components/Overview/Overview"
import Categories from "./Components/Categories/Categories";
/* import ChooseCategory from "./Components/WelcomeWizard/ChooseCategory";
import SetBudget from "./Components/WelcomeWizard/SetBudget";
import Statistics from "./Components/Overview/Statistics/Statistics"; */


// const styles = {

// }
// const main_css = {

// };

// const parent_1 = {
//   /* width: '40%', */

// }

const App = () => (


  <Provider>
    <BrowserRouter>


      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/overview" component={Overview} />
        <Route path="/categories" component={Categories} />
        {/* <Route path="/welcome" component={WelcomePage} />
        <Route path="/choosecategory" component={ChooseCategory} />
        <Route path="/budget" component={SetBudget} />
        <Route path="/statistics" component={Statistics} /> */}
      </Switch>
    </BrowserRouter>



  </Provider>


);

render(<App />, document.getElementById("root"));
