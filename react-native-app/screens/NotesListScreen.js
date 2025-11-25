import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { getNotes } from "../api/notes";

export default function NotesListScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            accessibilityLabel={`Open note titled ${item.title}`}
            style={{ padding: 16, borderBottomWidth: 1 }}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Note" onPress={() => navigation.navigate("Edit")} accessibilityLabel="Add new note" />
      <Button title="About" onPress={() => navigation.navigate("About")} accessibilityLabel="About the app" />
    </View>
  );
}
