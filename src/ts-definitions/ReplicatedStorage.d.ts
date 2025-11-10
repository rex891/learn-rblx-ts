interface ReplicatedStorage extends Instance {
	CollectibleCoin: Part & {
		FloatingCoinScript: Script
		CoinMesh: SpecialMesh
		SpiningCoinScript: Script
		CollectCoinScript: Script & {
			Sound: Sound
		}
	}
	TS: Folder & {
		module: ModuleScript
		["public-types"]: ModuleScript
		helpers: ModuleScript
		["game-types"]: ModuleScript
	}
	PepsiCan: Part
}
