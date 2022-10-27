import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from '../components/Themed';
import { ResultPost } from "../interface/Post";
import { RootTabScreenProps } from "../types";


export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  const [post, setPost] = useState([])

  const getPosts = async  ()  => {
    

    const response = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await response.json();

    setPost(results);
    return results;

  }

  useEffect(() => {

    getPosts()
    
  },[] )




  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHARACTER LIST </Text>
   
      <FlatList
        data={ post }
        renderItem={({ item }) => (
            <Text>{item.name}</Text>      
        )
         
      }
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
