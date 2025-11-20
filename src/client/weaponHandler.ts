import Object from "@rbxts/object-utils"
import { Players } from "@rbxts/services"
import { remotes } from "shared/remotes"
import { Weapons, allWeaponSettings as allWeaponsSettings } from "shared/Settings"

let x = Object.entries({})

type WeaponName = keyof Weapons

const player = Players.LocalPlayer
const mouse = player.GetMouse()
export function handleWeaponChange(character: Model) {
	const humanoid = character.WaitForChild("Humanoid") as Humanoid
	let mouseButtonConnection: RBXScriptConnection

	character.ChildAdded.Connect((child) => {
		if (child.IsA("Tool") && child.GetAttribute("ToolType") === "Weapon") {
			const weaponTool = child
			const equippedWeaponName = weaponTool.Name as WeaponName
			const weaponHandle = weaponTool.WaitForChild("Handle") as Part
			const weaponSettings = allWeaponsSettings[equippedWeaponName]

			mouseButtonConnection = mouse.Button1Down.Connect(() => {
				if (equippedWeaponName && humanoid.Health > 0) {
					const direction = mouse.Hit.Position.sub(weaponHandle.Position).Unit
					const weaponPosition = weaponHandle.Position
					remotes.weaponAttack.fire(weaponPosition, direction, weaponSettings.range)
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
