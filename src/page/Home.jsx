import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

export function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.titleEvent}> Nome do evento </Text>
			<Text style={styles.dateEvent}> Sexta, 2 de Junho de 2023 </Text>
			<TextInput
				style={styles.input}
				placeholder='Nome do participante...'
				placeholderTextColor={"#6b6b6b"}
			/>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.addButton}> + </Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},
	titleEvent: {
		color: "#fdfcfe",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	dateEvent: {
		color: "#6b6b6b",
		fontSize: 16,
	},
	input: {
		height: 56,
		backgroundColor: "#1f1e25",
		borderRadius: 5,
		color: "#fff",
		padding: 16,
		fontSize: 16,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31cf65",
		alignItems: "center",
		justifyContent: "center",
	},
	addButton: {
		color: "#fff",
		fontSize: 24,
	},
});
