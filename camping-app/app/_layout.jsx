import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/SignIn" options={{ title: 'Sign In' }} />
      <Stack.Screen name="auth/SignUp" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="profile/Profile" options={{title : "profile" , headerShown : false}} />
      <Stack.Screen name="profile/Profile/(drawer)" options={{title : "drawer" , headerShown : false}} />

    </Stack>
  );
}
