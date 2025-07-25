import { StyleSheet, View, FlatList } from 'react-native';
import ToDoItem from './ToDoItem.jsx';

export default function ToDoList({ data, style }) {
	return (
		<FlatList
			style={style}
			data={data}
			renderItem={({ item }) => <ToDoItem {...item} />}
			keyExtractor={(item) => item.id}
			contentContainerStyle={styles.listContent}
		/>
	);
}

const styles = StyleSheet.create({
	listContent: {
		paddingHorizontal: 20,
		paddingTop: 2,
		paddingBottom: 50,
	},
});
