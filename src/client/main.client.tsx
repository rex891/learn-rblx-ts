import React, { StrictMode, useState } from "@rbxts/react"
import { createPortal, createRoot } from "@rbxts/react-roblox"
import { Players } from "@rbxts/services"
import { App } from "client/App"

let playerGui = Players.LocalPlayer.WaitForChild("PlayerGui").WaitForChild("ScreenGui")

type CounterProps = {
	initialCount: number
}
export function Counter({ initialCount }: CounterProps) {
	const [count, setCount] = useState(initialCount)

	return (
		<textbutton
			Text={`Count: ${count}`}
			// Event={{
			// 	Activated: () => setCount(count + 1),
			// }}
			AnchorPoint={new Vector2(0.15, 0.15)}
			// Name="Dude"
			BackgroundColor3={new Color3(255, 0, 0)}
			Size={new UDim2(0, 100, 0, 50)}
			Position={new UDim2(0.15, 0, 0.15, 0)}
			Event={{
				Activated: () => setCount(count + 1),
			}}
		/>
	)
}

export function Counter2({ initialCount }: CounterProps) {
	const [count, setCount] = useState(initialCount)

	return <textbutton></textbutton>
}

const root = createRoot(new Instance("Folder"))

// export function App({ initialCount }: CounterProps) {
// 	return <Counter initialCount={initialCount} />
// }

root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>)
