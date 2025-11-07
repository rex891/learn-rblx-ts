import { DataStoreService, Players } from "@rbxts/services"

let AUTOSAVE_INTERVAL = 45
let playerDataStore = DataStoreService.GetDataStore("playerData")

type PlayerData = {
	coins: number
	stage: number
}

let playerDataByUserId = new Map<number, PlayerData>()

Players.PlayerAdded.Connect((player) => {
	// setup data
	let [remoteData, _] = playerDataStore.GetAsync<PlayerData>(`${player.UserId}`)
	let playerData: PlayerData = remoteData || { coins: 0, stage: 1 }
	playerDataByUserId.set(player.UserId, playerData)
})

function save(playerId: number) {
	playerDataStore.SetAsync(`${playerId}`, playerDataByUserId.get(playerId))
}

Players.PlayerRemoving.Connect((player) => save(player.UserId))

// autosave
task.spawn(() => {
	while (true) {
		task.wait(AUTOSAVE_INTERVAL)
		print("autosaving")
		playerDataByUserId.forEach((_, playerId) => save(playerId))

		for (const [playerId, _] of playerDataByUserId) {
			save(playerId)
		}
	}
})
