import { useGrocery } from "@/contexts/GroceryContext";
import React from "react";
import { FlatList, Text, View } from "react-native";

const categories = () => {
  const { categories } = useGrocery();

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default categories;
