import { ReplicatedStorage, Workspace } from "@rbxts/services"

let cans = new Instance("Folder", Workspace)
cans.Name = "Cans"

let rng = new Random()

for (let i = 0; i < 500; i++) {
	let pepsiCan = ReplicatedStorage.PepsiCan.Clone()
	pepsiCan.CFrame = new CFrame(rng.NextNumber(-512, 512), 32.5, rng.NextNumber(-512, 512))
	pepsiCan.Parent = cans
}
