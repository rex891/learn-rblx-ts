interface StarterPack extends Instance {
	Gun: Tool & {
		Handle: Part & {
			LaserShot: Sound
			ParticleEmitter: ParticleEmitter
		}
	}
}
