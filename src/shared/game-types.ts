export type PlayerData = {
	coins: number
	stage: number
	lastPlayed: number | undefined
}

export type PubilcPlayerData = Pick<PlayerData, "coins">
