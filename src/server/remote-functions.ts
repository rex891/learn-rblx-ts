import { ReplicatedStorage } from "@rbxts/services"

function createRemoteFunction(name: string, callback: (player: Player, ...args: unknown[]) => void) {
	let myRemote = new Instance("RemoteFunction", ReplicatedStorage)
	myRemote.Name = name
	myRemote.OnServerInvoke = callback
}

function createServerEvent(name: string): RemoteEvent {
	let serverEvent = new Instance("RemoteEvent", ReplicatedStorage)
	serverEvent.Name = name
	return serverEvent
}

createRemoteFunction("Dude", (player: Player, message: unknown) => `Got ${message} from ${player.Name}`)

export let UpdateCoins = createServerEvent("UpdateCoins")
