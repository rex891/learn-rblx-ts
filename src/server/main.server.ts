import { DataStoreService, Players, Workspace } from "@rbxts/services"
import "server/create-cans"
import "server/db"
import "server/flashlight"
import { makeHello } from "shared/module"

print(makeHello("main.server.ts"))

let dataStoreTesting = DataStoreService.GetDataStore("LastPlayed")

game.Workspace.ClickablePart.ClickDetector.MouseClick.Connect((player) => {
	let fire = Workspace.ClickablePart.Fire
	fire.Enabled = !fire.Enabled
})

Players.PlayerAdded.Connect((player) => {
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
	let [success, err] = dataStoreTesting.SetAsync(`Plr_${player.UserId}`, os.time())
	if (!success) warn(err)
})
