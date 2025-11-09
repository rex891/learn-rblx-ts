export function mapEntries<K, V>(map: Map<K, V>): [K[], V[]] {
	let keys: K[] = []
	let values: V[] = []
	map.forEach((value, key) => {
		keys = [...keys, key]
		values = [...values, value]
	})
	return [keys, values]
}
