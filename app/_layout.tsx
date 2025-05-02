// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack >
// <Stack.Screen 
// name="(tabs)"
// options={{headerShown:false}}
// />
// <Stack.Screen 
// name="movie/[id]"
// options={{headerShown:false}}
// />


//   </Stack>;
// }
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} >
        </Stack.Screen>
    </Stack>
  );
}

