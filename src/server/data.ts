import * as db from "server/db"
import { PlayerData } from "shared/game-types"
import { mapEntries } from "shared/helpers"
import Remotes from "shared/remotes"

let AUTOSAVE_INTERVAL = 45
let playerDataByUserId = new Map<number, PlayerData>()

export function loadPlayerData(player: Player) {
	let playerData = db.getPlayerData(player.UserId)
	print("loaded", playerData)
	Remotes.Server.Get("UpdateCoins").SendToPlayer(player, playerData.coins)
	playerDataByUserId.set(player.UserId, playerData)
}

export function savePlayerData(playerId: number) {
	let playerData = playerDataByUserId.get(playerId)
	if (!playerData) {
		print("data not saved")
		return
	}

	playerData.lastPlayed = os.time()
	print("saved", playerData)
	if (playerData) db.savePlayerData(playerId, playerData)
}

export function addCoin(playerId: number) {
	let playerData = playerDataByUserId.get(playerId)
	if (playerData) {
		playerData.coins += 1
		return playerData.coins
	}
	return 0
}
export function addKill(playerId: number) {
	let playerData = playerDataByUserId.get(playerId)
	if (playerData) {
		playerData.kills += 1
		return playerData.kills
	}
	return 0
}

export function getPlayerCoins() {
	return mapEntries(playerDataByUserId)[0]
}

export function getPublicPlayerData() {
	return
}

// autosave all players
task.spawn(() => {
	while (true) {
		task.wait(AUTOSAVE_INTERVAL)
		print("autosaving")
		playerDataByUserId.forEach((playerData, playerId) => {
			savePlayerData(playerId)
		})
	}
})
