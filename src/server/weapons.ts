import { ServerStorage, Workspace } from "@rbxts/services"
import Remotes from "shared/remotes"
import { blueGunSettings } from "shared/Settings"
import { addKill } from "./data"
import { getPlayerFromPart } from "./player-helpers"

const SECURITY_ANGLE = 180
const ANGLE_AT_DIST = 3

const redGun = ServerStorage.Tools.RedGun.Clone()
redGun.Parent = Workspace
redGun.Handle.CFrame = new CFrame(-33, 12.05, -591.666)
const blueGun = ServerStorage.Tools.BlueGun.Clone()
blueGun.Parent = Workspace
blueGun.Parent = Workspace
blueGun.Handle.CFrame = new CFrame(-36, 12.05, -591.666)

// function verifyHit(direction: Vector3, gunPosition: Vector3, hitPosition: Vector3, gunSettings: GunSettings) {
// 	const serverDirection = hitPosition.sub(gunPosition) // this is probably wrong, need to see what the server object is
// 	if (serverDirection.Magnitude > gunSettings.range) return false
// 	if (serverDirection.Magnitude === 0 || direction.Magnitude === 0) return false

// 	let angle = serverDirection.Dot(direction) / (direction.Magnitude * serverDirection.Magnitude)
// 	if (angle > 1) angle = 0
// 	if (angle < -1) angle = math.pi
// 	angle = math.acos(angle)

// 	const adjustedSecurityAngle = math.min(SECURITY_ANGLE, (ANGLE_AT_DIST * SECURITY_ANGLE) / serverDirection.Magnitude)
// 	return angle <= adjustedSecurityAngle
// }

Remotes.Server.Get("UseWeapon").Connect((player, mouseHitPosition) => {
	const raycastParams = new RaycastParams()
	raycastParams.FilterType = Enum.RaycastFilterType.Exclude
	raycastParams.FilterDescendantsInstances = [player.Character as Model, Workspace.Effects]

	//get gun handle
	const backpack = player.WaitForChild("Backpack") as Backpack
	const gun = backpack.WaitForChild("BlueGun") as Tool
	const gunHandle = gun.WaitForChild("Handle") as Part

	const direction = mouseHitPosition.sub(gunHandle.Position).Unit.mul(blueGunSettings.range)

	const raycastResult = Workspace.Raycast(gunHandle.Position, direction, raycastParams)
	if (!raycastResult) return

	const hitPart = raycastResult.Instance
	if (hitPart) {
		const humanoid = getPlayerFromPart(hitPart)?.Character?.FindFirstChildOfClass("Humanoid")
		if (!humanoid) return

		if (humanoid.Health > 0) {
			let damage = blueGunSettings.damage
			if (hitPart.Name === "Head") damage += blueGunSettings.headshotMultiplier
			humanoid.TakeDamage(damage)
			if (humanoid.Health <= 0) addKill(player.UserId)
		}
	}
})

// Remotes.Server.Get("Replicate").Connect((player, gunPosition, hitPosition, rayColor, raySize) => {
// 	print("server fire")
// 	const laser = createLaser(gunPosition, hitPosition, rayColor, raySize)
// 	laser.Parent = Workspace.Effects
// 	Debris.AddItem(laser, blueGunSettings.debrisTime)
// })
