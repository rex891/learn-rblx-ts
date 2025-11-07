import { DataStoreService, Players, Workspace } from "@rbxts/services"
import "server/create-cans"
import { PlayerData, getData, save } from "server/db"
import "server/flashlight"

let AUTOSAVE_INTERVAL = 45

let dataStoreTesting = DataStoreService.GetDataStore("LastPlayed")

let playerDataByUserId = new Map<number, PlayerData>()

game.Workspace.ClickablePart.ClickDetector.MouseClick.Connect((player) => {
	let fire = Workspace.ClickablePart.Fire
	fire.Enabled = !fire.Enabled
})

Players.PlayerAdded.Connect((player) => {
	playerDataByUserId.set(player.UserId, getData(player.UserId))

	let currentPlayingSeconds = os.time()
	let [success, lastPlayingSecondsResult] = pcall(() => dataStoreTesting.GetAsync(`Plr_${player.UserId}`))
	if (!success) {
		print("it is your first time playing!")
	} else {
		print(
			`it has been [${currentPlayingSeconds - (lastPlayingSecondsResult as number)} seconds since you last played!`,
		)
	}
})

Players.PlayerRemoving.Connect((player) => {
	let playerData = playerDataByUserId.get(player.UserId)
	if (playerData) save(player.UserId, playerData)

	let [success, err] = dataStoreTesting.SetAsync(`Plr_${player.UserId}`, os.time())
	if (!success) warn(err)
})

// autosave
task.spawn(() => {
	while (true) {
		task.wait(AUTOSAVE_INTERVAL)
		print("autosaving")
		playerDataByUserId.forEach((playerData, playerId) => {
			save(playerId, playerData)
		})
	}
})
