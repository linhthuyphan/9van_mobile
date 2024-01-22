const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import EditClass from "./screens/EditClass";
import EditStudent from "./screens/EditStudent";
import NewwClass from "./screens/NewwClass";
import DeleteStudent from "./screens/DeleteStudent";
import ClassEnd from "./screens/ClassEnd";
import ShareClass from "./screens/ShareClass";
import AssignmentScored from "./screens/AssignmentScored";
import AssignmentAssign from "./screens/AssignmentAssign";
import AssignmentWait from "./components/AssignmentWait";
import Logout from "./screens/Logout";
import ListStudent from "./components/ListStudent";
import DeleteClass from "./screens/DeleteClass";
import LpHcToLp from "./screens/LpHcToLp";
import EndClass from "./screens/EndClass";
import ClassActive from "./components/ClassActive";
import Topic from "./screens/Topic";
import SaveProfile from "./screens/SaveProfile";
import Profile from "./components/Profile";
import SaveSuccess from "./screens/SaveSuccess";
import Role from "./screens/Role";
import Home from "./components/Home";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EditClass"
              component={EditClass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditStudent"
              component={EditStudent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewwClass"
              component={NewwClass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteStudent"
              component={DeleteStudent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClassEnd"
              component={ClassEnd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShareClass"
              component={ShareClass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AssignmentScored"
              component={AssignmentScored}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AssignmentAssign"
              component={AssignmentAssign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Logout"
              component={Logout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteClass"
              component={DeleteClass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LpHcToLp"
              component={LpHcToLp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EndClass"
              component={EndClass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Topic"
              component={Topic}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveProfile"
              component={SaveProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveSuccess"
              component={SaveSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Role"
              component={Role}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
