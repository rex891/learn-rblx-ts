import { Debris, Workspace } from "@rbxts/services"
import { createLaser } from "shared/laser"
import Remotes from "shared/remotes"
import { GunSettings, gunSettings } from "shared/Settings"
import { addKill } from "./data"
import { getPlayerFromPart } from "./player-helpers"

const SECURITY_ANGLE = 180
const ANGLE_AT_DIST = 3

function verifyHit(direction: Vector3, gunPosition: Vector3, hitPosition: Vector3, gunSettings: GunSettings) {
	const serverDirection = hitPosition.sub(gunPosition) // this is probably wrong, need to see what the server object is
	if (serverDirection.Magnitude > gunSettings.range) return false
	if (serverDirection.Magnitude === 0 || direction.Magnitude === 0) return false

	let angle = serverDirection.Dot(direction) / (direction.Magnitude * serverDirection.Magnitude)
	if (angle > 1) angle = 0
	if (angle < -1) angle = math.pi
	angle = math.acos(angle)

	const adjustedSecurityAngle = math.min(SECURITY_ANGLE, (ANGLE_AT_DIST * SECURITY_ANGLE) / serverDirection.Magnitude)
	return angle <= adjustedSecurityAngle
}

Remotes.Server.Get("Hit").Connect((player, hitPart, direction, gunPosition, hitPosition) => {
	const objectHit = verifyHit(direction, gunPosition, hitPosition, gunSettings)
	print("objectHit", objectHit)
	if (!objectHit) return

	const humanoid = getPlayerFromPart(hitPart)?.Character?.FindFirstChildOfClass("Humanoid")
	if (!humanoid) return

	if (humanoid.Health > 0) {
		let damage = gunSettings.damage
		if (hitPart.Name === "Head") damage += gunSettings.headshotMultiplier
		humanoid.TakeDamage(damage)
		if (humanoid.Health <= 0) addKill(player.UserId)
	}
})

Remotes.Server.Get("Replicate").Connect((player, gunPosition, hitPosition, rayColor, raySize) => {
	print("server fire")
	const laser = createLaser(gunPosition, hitPosition, rayColor, raySize)
	laser.Parent = Workspace.Effects
	Debris.AddItem(laser, gunSettings.debrisTime)
})
