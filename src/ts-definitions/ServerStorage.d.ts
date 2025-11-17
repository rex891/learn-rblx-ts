interface ServerStorage extends Instance {
	Tools: Folder & {
		BlueGun: Tool & {
			Handle: Part & {
				ParticleEmitter: ParticleEmitter
				LaserShot: Sound
			}
		}
		Flashlight: Tool & {
			Handle: Part & {
				SpotLight: SpotLight
			}
		}
		RedGun: Tool & {
			Handle: Part & {
				ParticleEmitter: ParticleEmitter
				LaserShot: Sound
			}
		}
	}
}
