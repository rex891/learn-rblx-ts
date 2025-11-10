import Net from "@rbxts/net"
export const Remotes = Net.Definitions.Create({
	UpdateCoins: Net.Definitions.ServerToClientEvent<[coinCount: number]>(),
	RemFuncExample: Net.Definitions.ServerAsyncFunction<(text: string) => unknown>(),
})
export default Remotes
