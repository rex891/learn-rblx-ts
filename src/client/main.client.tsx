import React, { StrictMode } from "@rbxts/react"
import { createPortal, createRoot } from "@rbxts/react-roblox"
import { Players } from "@rbxts/services"
import { App } from "client/App"
import { enableWeapon, isWeapon } from "./weaponHandler"

const player = Players.LocalPlayer

player.CharacterAdded.Connect((character: Model) => {
	// const humanoid = character.WaitForChild("Humanoid") as Humanoid

	let mouseButtonConnection: RBXScriptConnection

	character.ChildAdded.Connect((child) => {
		if (isWeapon(child)) {
			mouseButtonConnection = enableWeapon(child)
		}
	})

	character.ChildRemoved.Connect((child) => {
		if (isWeapon(child)) {
			mouseButtonConnection.Disconnect()
		}
	})
})

let playerGui = player.WaitForChild("PlayerGui").WaitForChild("ScreenGui")

const root = createRoot(new Instance("Folder"))
root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>)
