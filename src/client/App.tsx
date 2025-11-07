import React from "@rbxts/react"
import { Button } from "./components/Button"

export function App() {
	return (
		<screengui>
			<Button
				text="Click me!"
				onClick={() => {
					print("Button clicked!")
				}}
			/>
		</screengui>
	)
}
