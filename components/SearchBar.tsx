import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchBarProps } from '../types/index';

export function SearchBar({ searchText, setSearchText }: SearchBarProps) {
  return (
    <View style={styles.searchBox}>
      {/* todo: INPUT add textInput*/}
      <TextInput
        placeholder='Search products...'
        style={styles.textInput}
        value={searchText}
        onChangeText={setSearchText}
        accessibilityLabel='Search products filter'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
  },
  textInput: {
    padding: 8,
  },
});
