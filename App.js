import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.tinyLogo} source={require('./assets/icon.png')} />
			<Text>Product</Text>
			<StatusBar style="dark" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffs',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tinyLogo: {
		width: 150,
		height: 150,
		marginBottom: 50,
	},
});
