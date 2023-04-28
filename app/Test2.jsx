import React from 'react'
import { Text, View } from 'react-native'
import { useSearchParams } from 'expo-router'

const Test = () => {

  const params = useSearchParams()

  return (
    <View>
        <Text>
            {params.testparam}
        </Text>
    </View>
  )
}

export default Test