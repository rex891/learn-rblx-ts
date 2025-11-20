import { Players } from "@rbxts/services"
import "server/create-props/checkpoints"
import "server/create-props/create-cans"
import "server/create-props/create-coins"
import "server/create-props/flashlight"
import "server/weapons"

import { remotes } from "shared/remotes"
import { changeWeapon, loadPlayerData, savePlayerData } from "./data"
import { calculateAttack } from "./verify"

Players.PlayerAdded.Connect((player) => {
	loadPlayerData(player)
	player.CharacterAdded.Connect((character: Model) => {
		//tool added
		character.ChildAdded.Connect((child) => {
			if (child.IsA("Tool") && child.GetAttribute("ToolType") === "Weapon") {
				changeWeapon(player.UserId, child)
			}
		})
		character.ChildRemoved.Connect((child) => {
			if (child.IsA("Tool")) {
				changeWeapon(player.UserId, undefined)
			}
		})
	})
	remotes.weaponAttack.connect(calculateAttack)
})

Players.PlayerRemoving.Connect((player) => {
	savePlayerData(player.UserId)
})
