import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login/";
import Main from "./pages/Main";

const appNavegation = createStackNavigator(
  {
    Login,
    Main
  },
  {
    initialRouteName: "Login",
    mode: "modal",
    headerMode: "none"
  }
);

const appContainer = createAppContainer(appNavegation);

export default appContainer;
