import Object from "@rbxts/object-utils"
import { Players } from "@rbxts/services"
import { remotes } from "shared/remotes"
import { Weapons, allWeaponSettings as allWeaponsSettings } from "shared/Settings"

let x = Object.entries({})

type WeaponName = keyof Weapons

export function isWeapon(instance: Instance): instance is Tool {
	return instance.IsA("Tool") && instance.GetAttribute("ToolType") === "Weapon"
}

export function enableWeapon(weaponTool: Tool): RBXScriptConnection {
	const mouse = Players.LocalPlayer.GetMouse()
	const equippedWeaponName = weaponTool.Name as WeaponName
	const weaponHandle = weaponTool.WaitForChild("Handle") as Part
	const weaponSettings = allWeaponsSettings[equippedWeaponName]

	return mouse.Button1Down.Connect(() => {
		if (equippedWeaponName) {
			const weaponPosition = weaponHandle.Position
			const direction = mouse.Hit.Position.sub(weaponPosition).Unit
			remotes.weaponAttack.fire(weaponPosition, direction, weaponSettings.range)
		}
	})
}
