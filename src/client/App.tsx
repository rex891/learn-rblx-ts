import React from "@rbxts/react"
import { myRemote } from "client/remote-functions"
import { Counter } from "./components/Counter"
import { Leaderstats } from "./components/Leaderstats"

export function App() {
	print(myRemote.InvokeServer("Wassup bro"))
	print("hello app")
	return (
		<screengui>
			{/* <Button
                
				text="Click me!"
				onClick={() => {
					print("Button clicked!")
				}}
			/> */}
			<Counter initialCount={3}></Counter>
			<Leaderstats playerScores={[1, 2, 3]} />
		</screengui>
	)
}
