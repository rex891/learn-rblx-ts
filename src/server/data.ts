import * as db from "server/db"
import { PlayerData } from "shared/game-types"
import { mapEntries } from "shared/helpers"
import { remotes } from "shared/remotes"

const AUTOSAVE_INTERVAL = 45
const playerDataByUserId = new Map<number, PlayerData>()
export const currentPlayerWeapon = new Map<number, Tool | undefined>()

export function loadPlayerData(player: Player) {
	let playerData: PlayerData = db.getPlayerData(player.UserId)
	print("loaded player data: ", playerData)
	remotes.updateCoinCount.fire(player, playerData.coins)
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

export function incrementCoins(playerId: number) {
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

export function changeWeapon(playerId: number, weapon: Tool | undefined) {
	currentPlayerWeapon.set(playerId, weapon)
	print("serverweapon", weapon?.Name)
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
