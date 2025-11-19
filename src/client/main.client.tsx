import React, { StrictMode } from "@rbxts/react"
import { createPortal, createRoot } from "@rbxts/react-roblox"
import { Players } from "@rbxts/services"
import { App } from "client/App"
import { handleWeaponChange } from "./weaponHandler"

const player = Players.LocalPlayer

player.CharacterAdded.Connect(handleWeaponChange)

let playerGui = player.WaitForChild("PlayerGui").WaitForChild("ScreenGui")

const root = createRoot(new Instance("Folder"))
root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>)
