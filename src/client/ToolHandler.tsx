import { Debris, Players, Workspace } from "@rbxts/services"
import { createLaser } from "shared/laser"
import Remotes from "shared/remotes"
import { gunSettings } from "../shared/Settings"

Players.LocalPlayer.CharacterAdded.Connect((char) => {
	const backpack = Players.LocalPlayer.WaitForChild("Backpack") as Backpack
	const gun = backpack.WaitForChild("Gun") as Tool
	const gunHandle = gun.WaitForChild("Handle") as Part

	function gunEffects() {
		for (const effect of gunHandle.GetChildren()) {
			if (effect.IsA("ParticleEmitter")) effect.Emit(50)
			if (effect.IsA("Sound")) effect.Play()
		}
	}

	const raycastParams = new RaycastParams()
	raycastParams.FilterType = Enum.RaycastFilterType.Exclude
	raycastParams.FilterDescendantsInstances = [char, Workspace.Effects]

	let mouseButtonListener: RBXScriptConnection
	gun.Equipped.Connect(() => {
		const mouse = Players.LocalPlayer.GetMouse()
		const humanoid = char.WaitForChild("Humanoid") as Humanoid
		mouseButtonListener = mouse.Button1Down.Connect(() => {
			if (humanoid.Health > 0)
				fire(
					gunHandle.Position,
					mouse.Hit.Position.sub(gunHandle.Position).Unit.mul(gunSettings.range),
					gunEffects,
					raycastParams,
				)
		})
	})
	gun.Unequipped.Connect(() => {
		mouseButtonListener.Disconnect()
	})
})

function fire(gunPosition: Vector3, direction: Vector3, gunEffects: () => void, raycastParams: RaycastParams) {
	const raycastResult = Workspace.Raycast(gunPosition, direction, raycastParams)
	if (!raycastResult) return

	const hitPart = raycastResult.Instance
	const hitPosition = raycastResult.Position
	if (hitPart) {
		Remotes.Client.Get("Hit").SendToServer(hitPart, direction, gunPosition, hitPosition)
	}

	const laser = createLaser(gunPosition, hitPosition, gunSettings.rayColor, gunSettings.raySize)
	laser.Parent = Workspace.Effects
	Debris.AddItem(laser, gunSettings.debrisTime)
	task.spawn(gunEffects)

	Remotes.Client.Get("Replicate").SendToServer(gunPosition, hitPosition, gunSettings.rayColor, gunSettings.raySize)
}
