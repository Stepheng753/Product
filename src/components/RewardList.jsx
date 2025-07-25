import { StyleSheet, View, FlatList } from 'react-native';
import RewardItem from './RewardItem';

export default function RewardList({ data, style }) {
	return (
		<FlatList
			style={style}
			data={data}
			renderItem={({ item }) => <RewardItem {...item} />}
			keyExtractor={(item) => item.id}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.listContent}
			ItemSeparatorComponent={() => <View style={styles.separator} />}
		/>
	);
}

const styles = StyleSheet.create({
	listContent: {
		paddingHorizontal: 20,
		paddingTop: 2,
		paddingBottom: 10,
	},
	separator: {
		width: 16,
	},
});
