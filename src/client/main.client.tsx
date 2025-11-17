import Object from "@rbxts/object-utils"
import React, { StrictMode } from "@rbxts/react"
import { createPortal, createRoot } from "@rbxts/react-roblox"
import { Players } from "@rbxts/services"
import { App } from "client/App"

let x = Object.entries({})

Players.LocalPlayer.CharacterAdded.Connect((char) => {
	// const backpack = Players.LocalPlayer.WaitForChild("Backpack") as Backpack
	// const gun = backpack.WaitForChild("BlueGun") as Tool
	// const gunHandle = gun.WaitForChild("Handle") as Part
	// function gunEffects() {
	// 	for (const effect of gunHandle.GetChildren()) {
	// 		if (effect.IsA("ParticleEmitter")) effect.Emit(50)
	// 		if (effect.IsA("Sound")) effect.Play()
	// 	}
	// }
	// 	const raycastParams = new RaycastParams()
	// 	raycastParams.FilterType = Enum.RaycastFilterType.Exclude
	// 	raycastParams.FilterDescendantsInstances = [char, Workspace.Effects]
	// 	let mouseButtonListener: RBXScriptConnection
	// 	gun.Equipped.Connect(() => {
	// 		const mouse = Players.LocalPlayer.GetMouse()
	// 		const humanoid = char.WaitForChild("Humanoid") as Humanoid
	// 		mouseButtonListener = mouse.Button1Down.Connect(() => {
	// 			if (humanoid.Health > 0) Remotes.Client.Get("UseWeapon").SendToServer(mouse.Hit.Position)
	// 			// 	gunHandle.Position,
	// 			// 	mouse.Hit.Position.sub(gunHandle.Position).Unit.mul(blueGunSettings.range),
	// 			// 	gunEffects,
	// 			// 	raycastParams,
	// 			// )
	// 		})
	// 	})
	// 	gun.Unequipped.Connect(() => {
	// 		mouseButtonListener.Disconnect()
	// 	})
})

// function fire(gunPosition: Vector3, direction: Vector3, gunEffects: () => void, raycastParams: RaycastParams) {
// 	const raycastResult = Workspace.Raycast(gunPosition, direction, raycastParams)
// 	if (!raycastResult) return

// 	const hitPart = raycastResult.Instance
// 	const hitPosition = raycastResult.Position
// 	if (hitPart) {
// 		Remotes.Client.Get("Hit").SendToServer(hitPart, direction, gunPosition, hitPosition)
// 	}

// 	const laser = createLaser(gunPosition, hitPosition, blueGunSettings.rayColor, blueGunSettings.raySize)
// 	laser.Parent = Workspace.Effects
// 	Debris.AddItem(laser, blueGunSettings.debrisTime)
// 	task.spawn(gunEffects)
// export interface TodosState {
// 	readonly todos: readonly string[]
// }

// const initialState: TodosState = {
// 	todos: [],
// }

// export const todos = createProducer(initialState, {
// 	addTodo: (state, todo: string) => ({
// 		...state,
// 		todos: [...state.todos, todo],
// 	}),

// 	removeTodo: (state, todo: string) => ({
// 		...state,
// 		todos: state.todos.filter((t) => t !== todo),
// 	}),
// })

let playerGui = Players.LocalPlayer.WaitForChild("PlayerGui").WaitForChild("ScreenGui")

const root = createRoot(new Instance("Folder"))

root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>)
