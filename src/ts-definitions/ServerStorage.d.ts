interface ServerStorage extends Instance {
	Weapons: Folder & {
		RedGun: Tool & {
			Handle: Part & {
				ParticleEmitter: ParticleEmitter
				LaserShot: Sound
			}
		}
		BlueGun: Tool & {
			Handle: Part & {
				ParticleEmitter: ParticleEmitter
				LaserShot: Sound
			}
		}
	}
	Tools: Folder & {
		Flashlight: Tool & {
			Handle: Part & {
				SpotLight: SpotLight
			}
		}
	}
}
