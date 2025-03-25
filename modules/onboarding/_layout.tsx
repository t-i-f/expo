import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


export default function {{name}}Layout() {
  return (<>
    <Stack
      screenOptions=\{{
        headerShown: false
      }}
    />
    <StatusBar backgroundColor="transparent" translucent />
  </>);
}
