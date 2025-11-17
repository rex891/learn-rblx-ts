import { CreateDefinitions, Definitions } from "@rbxts/net"
const Remotes = CreateDefinitions({
	UpdateCoins: Definitions.ServerToClientEvent<[coinCount: number]>(),
	UseWeapon: Definitions.ClientToServerEvent<[hitPosition: Vector3]>(),
	// Client reports a weapon ray for server verification
	WeaponHit: Definitions.ClientToServerEvent<[origin: Vector3, direction: Vector3, maxDistance: number]>(),
	Hit: Definitions.ClientToServerEvent<
		[hitPart: BasePart, direction: Vector3, gunPosition: Vector3, hitPosition: Vector3]
	>(),
})
export default Remotes
