import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function ToDoItem({ title, dueDate, points }) {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{
					backgroundColor: pressed ? '#F5F5F5' : '#FFFFFF',
				},
			]}
		>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.dueDateContainer}>
				<Text style={styles.dueDate}>
					Due{'\n'}
					{dueDate}
				</Text>
			</View>
			<View style={styles.pointsContainer}>
				<Text style={styles.points}>
					+{points}
					{'\n'}pts
				</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: 80,
		borderRadius: 16,
		paddingHorizontal: 16,
		paddingVertical: 12,
		marginVertical: 8,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3.84,
		elevation: 5,
	},

	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		height: '100%',
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		color: '#333',
	},

	dueDateContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		marginLeft: 16,
	},
	dueDate: {
		fontSize: 14,
		fontWeight: '500',
		color: '#666',
		textAlign: 'center',
	},

	pointsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		marginLeft: 16,
		minWidth: 50,
	},
	points: {
		fontSize: 14,
		fontWeight: '700',
		color: '#4CAF50',
		textAlign: 'center',
	},
});
