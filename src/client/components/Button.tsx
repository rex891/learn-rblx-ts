import React from "@rbxts/react"

interface ButtonProps {
	text: string
	onClick?: () => void
}

export function Button({ text, onClick }: ButtonProps) {
	return (
		<textbutton
			Text={text}
			Size={new UDim2(0, 200, 0, 50)}
			Position={new UDim2(0.5, -100, 0.5, -25)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={new Color3(1, 1, 1)}
			AutoButtonColor={true}
			Event={{
				MouseButton1Click: onClick,
			}}
		/>
	)
}
