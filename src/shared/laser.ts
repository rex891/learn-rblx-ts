import { Workspace } from "@rbxts/services"

export function createLaser(weaponPosition: Vector3, hitPosition: Vector3, rayColor: Color3, raySize: Vector2) {
	const laser = new Instance("Part") as Part
	const length = hitPosition.sub(weaponPosition).Magnitude
	laser.Anchored = true
	laser.CanCollide = false
	laser.Material = Enum.Material.Neon
	laser.Color = rayColor
	laser.Size = new Vector3(raySize.X, raySize.Y, length)
	laser.CFrame = new CFrame(weaponPosition, hitPosition).mul(new CFrame(0, 0, -length / 2))
	return laser
}

export function raycastWeapon(character: Model, origin: Vector3, direction: Vector3, range: number) {
	const raycastParams = new RaycastParams()
	raycastParams.FilterType = Enum.RaycastFilterType.Exclude
	raycastParams.FilterDescendantsInstances = [character, Workspace.Effects]
	return Workspace.Raycast(origin, direction.mul(range), raycastParams)
}
