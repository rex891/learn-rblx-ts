import { CreateDefinitions, Definitions } from "@rbxts/net"
const Remotes = CreateDefinitions({
	UpdateCoins: Definitions.ServerToClientEvent<[coinCount: number]>(),
	RemFuncExample: Definitions.ServerAsyncFunction<(text: string) => unknown>(),
	Replicate:
		Definitions.ClientToServerEvent<
			[gunPosition: Vector3, hitPosition: Vector3, rayColor: Color3, raySize: Vector2]
		>(),
	Hit: Definitions.ClientToServerEvent<
		[hitPart: BasePart, direction: Vector3, gunPosition: Vector3, hitPosition: Vector3]
	>(),
})
export default Remotes
