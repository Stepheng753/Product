import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ToDoList from './src/components/ToDoList.jsx';
import RewardList from './src/components/RewardList.jsx';
import { rewardsData, todoData } from './src/data/mockData.jsx';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.contentWrapper}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>My To-Do App</Text>
				</View>

				{console.log(StatusBar.currentHeight)}
				<View style={styles.rewardsSection}>
					<Text style={styles.sectionHeaderText}>Rewards</Text>
					<RewardList data={rewardsData} />
				</View>
				<View style={styles.todoSection}>
					<Text style={styles.sectionHeaderText}>To-Do</Text>
					<ToDoList data={todoData} style={styles.listContainer} />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8F9FA',
	},
	contentWrapper: {
		flex: 1,
	},
	headerContainer: {
		padding: 20,
		alignItems: 'center',
	},
	headerText: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#333',
	},
	rewardsSection: {},
	todoSection: {
		flex: 1,
	},
	sectionHeaderText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginLeft: 20,
		marginBottom: 8,
	},
	listContainer: {
		flex: 1,
	},
});
