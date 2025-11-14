export function createLaser(gunPosition: Vector3, hitPosition: Vector3, rayColor: Color3, raySize: Vector2) {
	const laser = new Instance("Part") as Part
	const length = hitPosition.sub(gunPosition).Magnitude
	laser.Anchored = true
	laser.CanCollide = false
	laser.Material = Enum.Material.Neon
	laser.Color = rayColor
	laser.Size = new Vector3(raySize.X, raySize.Y, length)
	laser.CFrame = new CFrame(gunPosition, hitPosition).mul(new CFrame(0, 0, -length / 2))
	return laser
}
