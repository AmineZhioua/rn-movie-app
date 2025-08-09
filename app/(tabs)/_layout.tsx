import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                marginHorizontal: 12,
                marginBottom: 36,
                borderRadius: 20,
                height: 54,
                position: 'absolute',
                overflow: 'hidden',
            }
        }}
    >
        {/* Home Tab */}
        <Tabs.Screen 
            name='index'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View className={
                        `flex flex-row flex-1 min-w-[100px] items-center justify-center rounded-full ${focused ? 'bg-blue-400' : 'bg-transparent'}`
                    }>
                        <Image 
                            source={require('../../assets/images/react-logo.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text className='text-blue-300 text-sm'>Home</Text>
                    </View>
                )
            }}
        />

        {/* Search Tab */}
        <Tabs.Screen 
            name='search'
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View className={
                        `flex flex-row flex-1 min-w-[100px] items-center justify-center rounded-full ${focused ? 'bg-blue-400' : 'bg-transparent'}`
                    }>                        
                        <Image 
                            source={require('../../assets/images/react-logo.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text className='text-blue-300 text-sm'>Search</Text>
                    </View>
                )
            }}
        />

        {/* Saved Tab */}
        <Tabs.Screen 
            name='saved'
            options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View className={
                        `flex flex-row flex-1 min-w-[100px] items-center justify-center rounded-full ${focused ? 'bg-blue-400' : 'bg-transparent'}`
                    }>
                        <Image 
                            source={require('../../assets/images/react-logo.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text className='text-blue-300 text-sm'>Saved</Text>
                    </View>
                )
            }}
        />

        {/* Profile Tab */}
        <Tabs.Screen 
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View className={
                        `flex flex-row flex-1 min-w-[100px] items-center justify-center rounded-full ${focused ? 'bg-blue-400' : 'bg-transparent'}`
                    }>
                        <Image 
                            source={require('../../assets/images/react-logo.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text className='text-blue-300 text-sm'>Profile</Text>
                    </View>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout