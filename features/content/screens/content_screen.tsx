import { SafeAreaView, StyleSheet, Text } from "react-native";

const ContentScreen = () => {
    return (
        <Text style={styles.text}>Hello</Text>
    );
}

const styles = StyleSheet.create({
    text: {
      color: 'red',
      backgroundColor: 'white'
    },
  });

export default ContentScreen