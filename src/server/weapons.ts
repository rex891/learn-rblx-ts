import { ServerStorage, Workspace } from "@rbxts/services"

const SECURITY_ANGLE = 180
const ANGLE_AT_DIST = 3

const redWeapon = ServerStorage.Tools.RedGun.Clone()
redWeapon.Parent = Workspace
redWeapon.Handle.CFrame = new CFrame(-33, 12.05, -591.666)
const blueWeapon = ServerStorage.Tools.BlueGun.Clone()
blueWeapon.Parent = Workspace
blueWeapon.Parent = Workspace
blueWeapon.Handle.CFrame = new CFrame(-36, 12.05, -591.666)

// function verifyHit(direction: Vector3, weaponPosition: Vector3, hitPosition: Vector3, weaponSettings: WeaponSettings) {
// 	const serverDirection = hitPosition.sub(weaponPosition) // this is probably wrong, need to see what the server object is
// 	if (serverDirection.Magnitude > weaponSettings.range) return false
// 	if (serverDirection.Magnitude === 0 || direction.Magnitude === 0) return false

// 	let angle = serverDirection.Dot(direction) / (direction.Magnitude * serverDirection.Magnitude)
// 	if (angle > 1) angle = 0
// 	if (angle < -1) angle = math.pi
// 	angle = math.acos(angle)

// 	const adjustedSecurityAngle = math.min(SECURITY_ANGLE, (ANGLE_AT_DIST * SECURITY_ANGLE) / serverDirection.Magnitude)
// 	return angle <= adjustedSecurityAngle
// }

// Remotes.Server.Get("UseWeapon").Connect((player, mouseHitPosition) => {
// 	const raycastParams = new RaycastParams()
// 	raycastParams.FilterType = Enum.RaycastFilterType.Exclude
// 	raycastParams.FilterDescendantsInstances = [player.Character as Model, Workspace.Effects]

// 	//get weapon handle
// 	const backpack = player.WaitForChild("Backpack") as Backpack
// 	const weapon = backpack.WaitForChild("BlueWeapon") as Tool
// 	const weaponHandle = weapon.WaitForChild("Handle") as Part

// 	const direction = mouseHitPosition.sub(weaponHandle.Position).Unit.mul(blueWeaponSettings.range)

// 	const raycastResult = Workspace.Raycast(weaponHandle.Position, direction, raycastParams)
// 	if (!raycastResult) return

// 	const hitPart = raycastResult.Instance
// 	if (hitPart) {
// 		const humanoid = getPlayerFromPart(hitPart)?.Character?.FindFirstChildOfClass("Humanoid")
// 		if (!humanoid) return

// 		if (humanoid.Health > 0) {
// 			let damage = blueWeaponSettings.damage
// 			if (hitPart.Name === "Head") damage += blueWeaponSettings.headshotMultiplier
// 			humanoid.TakeDamage(damage)
// 			if (humanoid.Health <= 0) addKill(player.UserId)
// 		}
// 	}
// })

// Remotes.Server.Get("Replicate").Connect((player, weaponPosition, hitPosition, rayColor, raySize) => {
// 	print("server fire")
// 	const laser = createLaser(weaponPosition, hitPosition, rayColor, raySize)
// 	laser.Parent = Workspace.Effects
// 	Debris.AddItem(laser, blueWeaponSettings.debrisTime)
// })
