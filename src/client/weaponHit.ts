import { remotes } from "shared/remotes"

/**
 * Convenience helper: build a ray from a gun handle and the player's mouse.
 * Direction is normalized on the client; server multiplies by maxDistance.
 */
export function weaponHitFromMouse(gunPosition: Vector3, mousePosition: Vector3, maxDistance: number) {
	const dir = mousePosition.sub(gunPosition)
	if (dir.Magnitude === 0) return
	remotes.weaponHit.fire(gunPosition, dir.Unit, maxDistance)
}
