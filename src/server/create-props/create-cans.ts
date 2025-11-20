import { ReplicatedStorage, Workspace } from "@rbxts/services"

let cans = new Instance("Folder", Workspace)
cans.Name = "Cans"

let rng = new Random()

function createPepsiCan() {
	let pepsiCan = ReplicatedStorage.PepsiCan.Clone()
	pepsiCan.CFrame = new CFrame(rng.NextNumber(-300, 300), 32.5, rng.NextNumber(-200, -900))
	pepsiCan.Parent = cans
}

for (let i = 0; i < 1000; i++) {
	createPepsiCan()
}

Workspace.ClickablePart.ClickDetector.MouseClick.Connect((player) => {
	let fire = Workspace.ClickablePart.Fire
	print("fire.enabled 1", fire.Enabled)
	fire.Enabled = !fire.Enabled
	print("fire.enabled 2", fire.Enabled)
})
