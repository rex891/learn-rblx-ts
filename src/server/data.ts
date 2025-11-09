import * as db from "server/db"
import { PlayerData } from "shared/game-types"
import { mapEntries } from "shared/helpers"

let AUTOSAVE_INTERVAL = 45
let playerDataByUserId = new Map<number, PlayerData>()

export function loadPlayerData(playerId: number) {
	let playerData = db.getPlayerData(playerId)
	print("loaded", playerData)
	playerDataByUserId.set(playerId, playerData)
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
	if (playerData) playerData.coins += 1
}

export function getPlayerCoins() {
	return mapEntries(playerDataByUserId)[0]
}

export function getPublicPlayerData() {
	return
}

// autosave
task.spawn(() => {
	while (true) {
		task.wait(AUTOSAVE_INTERVAL)
		print("autosaving")
		playerDataByUserId.forEach((playerData, playerId) => {
			savePlayerData(playerId)
		})
	}
})
