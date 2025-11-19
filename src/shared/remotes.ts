import { Client, createRemotes, remote, Server } from "@rbxts/remo"
import { t } from "@rbxts/t"

export const remotes = createRemotes({
	updateCoins: remote<Client, [coinCount: number]>(),
	weaponAttack: remote<Server, [origin: Vector3, direction: Vector3, maxDistance: number]>(
		t.Vector3,
		t.Vector3,
		t.number,
	),
})
