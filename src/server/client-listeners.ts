import { Debris, Workspace } from "@rbxts/services"
import { currentPlayerWeapon } from "server/data"
import { createLaser, raycastWeapon } from "shared/laser"
import { remotes } from "shared/remotes"
import { allWeaponSettings, Weapons } from "shared/Settings"

remotes.weaponAttack.connect((player: Player, origin: Vector3, direction: Vector3, maxDistance: number) => {
	const character = player.Character
	if (!character) return
	const currentWeapon = currentPlayerWeapon.get(player.UserId)
	if (!currentWeapon) return
	const weaponSettings = allWeaponSettings[currentWeapon.Name as keyof Weapons]

	const hit = raycastWeapon(character, origin, direction, maxDistance)

	const laser = createLaser(
		origin,
		hit?.Position || origin.add(direction.mul(weaponSettings.range)),
		weaponSettings.rayColor,
		weaponSettings.raySize,
	)
	laser.Parent = Workspace.Effects

	Debris.AddItem(laser, weaponSettings.debrisTime)
	const handle = currentWeapon.WaitForChild("Handle") as Part
	for (const effect of handle.GetChildren()) {
		if (effect.IsA("ParticleEmitter")) effect.Emit(50)
		if (effect.IsA("Sound")) effect.Play()
	}
	if (!hit) return

	const hitPart = hit.Instance
	let humanoid
	if (hitPart.Parent?.IsA("Model") && (humanoid = hitPart.Parent.FindFirstChildOfClass("Humanoid"))) {
		humanoid.TakeDamage(100)
	} else if (!hitPart.IsA("Terrain")) {
		hitPart.Destroy()
	}
})
