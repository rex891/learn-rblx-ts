import React from "@rbxts/react"
import { Button } from "./components/Button"
import { Counter } from "./components/Counter"

export function App() {
	return (
		<screengui>
			<Button
				text="Click me!"
				onClick={() => {
					print("Button clicked!")
				}}
			/>
			<Counter initialCount={3}></Counter>
		</screengui>
	)
}
