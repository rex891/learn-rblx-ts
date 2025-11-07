import { DataStoreService } from "@rbxts/services"

let playerDataStore = DataStoreService.GetDataStore("playerData")

export type PlayerData = {
	coins: number
	stage: number
}

export function save(playerId: number, playerData: PlayerData) {
	playerDataStore.SetAsync(`${playerId}`, playerData)
}

export function getData(playerId: number) {
	let [remoteData, _] = playerDataStore.GetAsync<PlayerData>(`${playerId}`)
	let playerData: PlayerData = remoteData || { coins: 0, stage: 1 }
	return playerData
}
