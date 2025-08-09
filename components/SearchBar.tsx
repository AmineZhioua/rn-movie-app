import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      {/* <Image source={require('../assets/images/react-logo.png')} className='max-h-5' /> */}
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white'
      />
    </View>
  );
}

export default SearchBar;