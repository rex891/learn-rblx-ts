interface Workspace extends Model {
	Checkpoints: Folder & {
		Checkpoint3: Part
		Checkpoint1: Part
		Checkpoint2: Part
		Checkpoint4: Part
	}
	AlignOrientation: AlignOrientation
	SpawnLocation: SpawnLocation & {
		Decal: Decal
	}
	FoilStrip: Part
	Camera: Camera
	ClickablePart: Part & {
		Fire: Fire
		ClickDetector: ClickDetector
		SurfaceGui: SurfaceGui & {
			Frame: Frame
		}
	}
	Effects: Folder
	Baseplate: Part
	["Končar-Thyssen Escalator"]: Model & {
		Model: Model & {
			["Escalator Key"]: Tool & {
				LocalScript: LocalScript
				Handle: UnionOperation & {
					TouchInterest: TouchTransmitter
				}
			}
			INSTRUCTIONS: Part & {
				SurfaceGui: SurfaceGui & {
					TextLabel: TextLabel
				}
			}
			["WARNING!"]: Part & {
				SurfaceGui: SurfaceGui & {
					TextLabel: TextLabel
				}
			}
			Part: Part
		}
	}
	FlashlightGiver: Part & {
		ProximityPrompt: ProximityPrompt
	}
}
