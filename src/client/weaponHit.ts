import Remotes from "shared/remotes"

/**
 * Convenience helper: build a ray from a gun handle and the player's mouse.
 * Direction is normalized on the client; server multiplies by maxDistance.
 */
export function weaponHitFromMouse(gunPosition: Vector3, mousePosition: Vector3, maxDistance: number) {
	const dir = mousePosition.sub(gunPosition)
	if (dir.Magnitude === 0) return
	Remotes.Client.Get("WeaponHit").SendToServer(gunPosition, dir.Unit, maxDistance)
}
