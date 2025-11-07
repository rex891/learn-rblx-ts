import React, { StrictMode } from "@rbxts/react"
import { createPortal, createRoot } from "@rbxts/react-roblox"
import { Players } from "@rbxts/services"
import { App } from "client/App"

let playerGui = Players.LocalPlayer.WaitForChild("PlayerGui").WaitForChild("ScreenGui")

const root = createRoot(new Instance("Folder"))

root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>)
