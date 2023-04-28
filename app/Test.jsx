import {useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Test = () => {

  const router = useRouter()

  return (
    <View>
        <Button title='Test' onPress={() =>
           {router.push({pathname: "Test2", params: {testparam: "This is test"}}
           )}}/>
    </View>
  )
}

export default Test