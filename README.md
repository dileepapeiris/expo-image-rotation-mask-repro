# expo-image is clipped to its final size during rotation (iOS)

Reproduction for https://github.com/expo/expo/issues/54040 on iOS, with slow-motion screen
recordings of the rotation and a React Native `Image` next to it for comparison.

Versions: Expo SDK 58 (`expo` 58.0.26), `expo-image` 58.0.18, `expo-modules-core` 58.1.0,
`react-native` 0.88.1, New Architecture.
Recorded on the iPhone 17 Pro simulator, iOS 26.5, Xcode 27.2, 11/23/26.
