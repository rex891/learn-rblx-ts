import { Players } from "@rbxts/services"
import "server/create-props/checkpoints"
import "server/create-props/create-cans"
import "server/create-props/create-coins"
import "server/create-props/flashlight"
import "server/weapons"

import { changeWeapon, loadPlayerData, savePlayerData } from "./data"

Players.PlayerAdded.Connect((player) => {
	loadPlayerData(player)
	player.CharacterAdded.Connect((character: Model) => {
		//tool added
		character.ChildAdded.Connect((child) => {
			if (child.IsA("Tool")) {
				changeWeapon(player.UserId, child.Name)
			}
		})
		character.ChildRemoved.Connect((child) => {
			if (child.IsA("Tool")) {
				changeWeapon(player.UserId, undefined)
			}
		})
	})
})

Players.PlayerRemoving.Connect((player) => {
	savePlayerData(player.UserId)
})
