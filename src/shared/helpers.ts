export function mapEntries<K, V>(map: Map<K, V>): [K[], V[]] {
	let keys: K[] = []
	let values: V[] = []
	map.forEach((value, key) => {
		keys = [...keys, key]
		values = [...values, value]
	})
	return [keys, values]
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
	let timeout: thread | undefined

	return function (...args: Parameters<T>): void {
		if (timeout) {
			task.cancel(timeout)
		}

		timeout = task.spawn(() => {
			task.wait(wait / 1000) // task.wait expects seconds, convert milliseconds to seconds
			timeout = undefined
			func(args)
		})
	}
}
