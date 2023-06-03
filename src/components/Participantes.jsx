import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export function Participantes({ name }) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}> {name} </Text>
			<TouchableOpacity style={styles.button} activeOpacity={0.7}>
				<Text style={styles.buttonText}> - </Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#1f1e25",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	name: {
		flex: 1,
		fontSize: 16,
		color: "#fff",
		marginLeft: 16,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#E23C44",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 24,
	},
});
