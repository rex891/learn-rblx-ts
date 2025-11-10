import React, { useState } from "@rbxts/react"
type CounterProps = {
	initialCount: number
}
export function Counter({ initialCount }: CounterProps) {
	const [count, setCount] = useState(initialCount)

	return (
		<textbutton
			Text={`Count: ${count}`}
			AnchorPoint={new Vector2(0.15, 0.15)}
			BackgroundColor3={new Color3(255, 0, 0)}
			Size={new UDim2(0, 100, 0, 50)}
			Position={new UDim2(0.15, 0, 0.15, 0)}
			Event={{
				Activated: () => setCount(count + 1),
			}}
		/>
	)
}
