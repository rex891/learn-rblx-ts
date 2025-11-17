import { DataStoreService } from "@rbxts/services"
import { PlayerData } from "../shared/game-types"

let playerDataStore = DataStoreService.GetDataStore("playerData")

export function savePlayerData(playerId: number, playerData: PlayerData) {
	playerDataStore.SetAsync(`${playerId}`, playerData)
}

export function getPlayerData(playerId: number) {
	let [remoteData, _] = playerDataStore.GetAsync<PlayerData>(`${playerId}`)
	let playerData: PlayerData = remoteData || { coins: 0, stage: 1, lastPlayed: undefined, kills: 0 }
	return playerData
}
