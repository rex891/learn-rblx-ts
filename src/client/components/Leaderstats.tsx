import React from "@rbxts/react"

export function Leaderstats({ playerScores }: { playerScores: number[] }) {
	return (
		<frame
			Position={new UDim2(0.7, 0, 0.05, 0)}
			Visible={true}
			Size={new UDim2(0.25, 0, 0.25, 0)}
			BackgroundColor3={new Color3(0.22, 0.73, 0.67)}
		>
			<textlabel FontSize={"Size28"} Position={new UDim2(0.5, 0, 0.5, 0)} Text={"hello bro"}></textlabel>
		</frame>
	)
}
