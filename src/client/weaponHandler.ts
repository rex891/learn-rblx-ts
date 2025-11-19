import Object from "@rbxts/object-utils"
import { Debris, Players, Workspace } from "@rbxts/services"
import { calculateHit, createLaser } from "shared/laser"
import { remotes } from "shared/remotes"
import { Weapons, weapons as allWeaponsSettings } from "shared/Settings"

let x = Object.entries({})

type WeaponName = keyof Weapons

const player = Players.LocalPlayer
const mouse = player.GetMouse()
export function handleWeaponChange(character: Model) {
	const humanoid = character.WaitForChild("Humanoid") as Humanoid
	let mouseButtonConnection: RBXScriptConnection

	character.ChildAdded.Connect((child) => {
		if (child.IsA("Tool") && child.Name in allWeaponsSettings) {
			const weaponTool = child
			const equippedWeaponName = weaponTool.Name as WeaponName
			const weaponHandle = weaponTool.WaitForChild("Handle") as Part
			const weaponSettings = allWeaponsSettings[equippedWeaponName]

			function weaponEffects() {
				for (const effect of weaponHandle.GetChildren()) {
					if (effect.IsA("ParticleEmitter")) effect.Emit(50)
					if (effect.IsA("Sound")) effect.Play()
				}
			}

			mouseButtonConnection = mouse.Button1Down.Connect(() => {
				if (equippedWeaponName && humanoid.Health > 0) {
					const direction = mouse.Hit.Position.sub(weaponHandle.Position).Unit
					const weaponPosition = weaponHandle.Position

					remotes.weaponAttack.fire(weaponPosition, direction, weaponSettings.range)

					const hit = calculateHit(character, weaponPosition, direction, weaponSettings.range)

					const laser = createLaser(
						weaponPosition,
						hit?.Position || weaponPosition.add(direction.mul(weaponSettings.range)),
						weaponSettings.rayColor,
						weaponSettings.raySize,
					)
					laser.Parent = Workspace.Effects
					Debris.AddItem(laser, weaponSettings.debrisTime)
					task.spawn(weaponEffects)
				}
			})
		}
	})

	character.ChildRemoved.Connect((child) => {
		if (child.IsA("Tool")) {
			mouseButtonConnection.Disconnect()
		}
	})
}
