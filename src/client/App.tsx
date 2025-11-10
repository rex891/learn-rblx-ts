import React, { useEffect, useState } from "@rbxts/react"

import { Remotes } from "shared/remotes"
import { Counter } from "./components/Counter"

export function App() {
	let [coinCount, setCoinCount] = useState<number>(0)

	useEffect(() => {
		const updateCoinsConnection = Remotes.Client.Get("UpdateCoins").Connect((coins: number) => {
			setCoinCount(coins)
		})

		// remote function
		async function remoteFunc() {
			const example = await Remotes.Client.Get("RemFuncExample").CallServerAsync("Wsasup bra")
			if (typeOf(example) === "string") print(example)
		}
		remoteFunc()

		return () => updateCoinsConnection.Disconnect()
	})

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
			<frame
				Position={new UDim2(0.7, 0, 0.05, 0)}
				Visible={true}
				Size={new UDim2(0.25, 0, 0.25, 0)}
				BackgroundColor3={new Color3(0.22, 0.73, 0.67)}
			>
				<textlabel
					FontSize={"Size28"}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Text={`coins: ${coinCount}`}
				></textlabel>
			</frame>
		</screengui>
	)
}
