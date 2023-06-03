import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

export function Home() {
	function handleParticipanteAdd() {
		console.log("Nossa função está funcionando");
	}

	function handleParticipanteDelete() {
		console.log("Nossa função está funcionando");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titleEvent}> Nome do evento </Text>
			<Text style={styles.dateEvent}> Sexta, 2 de Junho de 2023 </Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder='Nome do participante...'
					placeholderTextColor={"#6b6b6b"}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleParticipanteAdd}
					activeOpacity={0.7}>
					<Text style={styles.addButton}> + </Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.titleEvent}>Participantes</Text>
			<View style={styles.form}>
				<TouchableOpacity
					style={styles.redButton}
					onPress={handleParticipanteDelete}
					activeOpacity={0.7}>
					<Text style={styles.deleteButton}> - </Text>
				</TouchableOpacity>
			</View>
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
	form: {
		width: "100%",
		flexDirection: "row",
		marginTop: 36,
		marginBottom: 42,
		gap: 7,
	},
	input: {
		flex: 1,
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
	redButton: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#E23C44",
		alignItems: "center",
		justifyContent: "center",
	},
	deleteButton: {
		color: "#fff",
		fontSize: 24,
	},
});
