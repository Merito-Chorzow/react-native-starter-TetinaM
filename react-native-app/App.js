import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotesListScreen from "./screens/NotesListScreen";
import NoteDetailScreen from "./screens/NoteDetailScreen";
import EditNoteScreen from "./screens/EditNoteScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={NotesListScreen} />
        <Stack.Screen name="Details" component={NoteDetailScreen} />
        <Stack.Screen name="Edit" component={EditNoteScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
