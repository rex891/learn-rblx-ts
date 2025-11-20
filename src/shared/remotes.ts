import { Client, createRemotes, remote, Server } from "@rbxts/remo"
import { t } from "@rbxts/t"

export const remotes = createRemotes({
	updateCoinCount: remote<Client, [coinCount: number]>(t.number),
	weaponAttack: remote<Server, [origin: Vector3, direction: Vector3, maxDistance: number]>(
		t.Vector3,
		t.Vector3,
		t.number,
	),
})
