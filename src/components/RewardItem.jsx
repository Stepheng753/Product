import { StyleSheet, Text, Pressable, View, Image } from 'react-native';

const CONTAINER_SIZE = 100;
const BORDER_WIDTH = 2;
const IMAGE_SIZE = CONTAINER_SIZE - BORDER_WIDTH * 2;

export default function RewardItem({ imageURL, points }) {
	return (
		<View style={styles.wrapper}>
			<Pressable style={styles.container}>
				{({ pressed }) => (
					<>
						<Image
							style={styles.image}
							source={{
								uri: imageURL,
							}}
						/>
						{pressed && <View style={styles.overlay} />}
					</>
				)}
			</Pressable>
			<Text style={styles.pointsText}>{points} Pts</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
	},
	container: {
		width: CONTAINER_SIZE,
		height: CONTAINER_SIZE,
		borderRadius: CONTAINER_SIZE / 2,
		borderWidth: BORDER_WIDTH,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: IMAGE_SIZE,
		height: IMAGE_SIZE,
		borderRadius: IMAGE_SIZE / 2,
	},
	overlay: {
		position: 'absolute',
		width: IMAGE_SIZE,
		height: IMAGE_SIZE,
		borderRadius: IMAGE_SIZE / 2,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	pointsText: {
		marginTop: 8,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
});
