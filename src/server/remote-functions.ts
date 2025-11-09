import { ReplicatedStorage } from "@rbxts/services"

function createRemote(name: string, callback: (player: Player, ...args: unknown[]) => void) {
	let myRemote = new Instance("RemoteFunction", ReplicatedStorage)
	myRemote.Name = name
	myRemote.OnServerInvoke = callback
}

export let myRemote = createRemote("Dude", (player: Player, message: unknown) => `Got ${message} from ${player.Name}`)
