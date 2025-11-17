import { Players, Workspace } from "@rbxts/services"

/**
 * Verifies a weapon hit on the server.
 * @param player The player who fired the weapon.
 * @param origin The world position from which the raycast starts (e.g., weapon muzzle).
 * @param direction The direction of the raycast.
 * @param maxDistance The maximum distance the raycast can travel.
 * @returns The Humanoid of the hit target if a valid hit occurred, otherwise null.
 */
function verifyWeaponHit(
	player: Player,
	origin: Vector3,
	direction: Vector3,
	maxDistance: number,
): Humanoid | undefined {
	// Define RaycastParams to exclude the firing player's character and the weapon itself.
	const raycastParams = new RaycastParams()
	raycastParams.FilterType = Enum.RaycastFilterType.Exclude

	const character = player.Character
	if (character) {
		raycastParams.FilterDescendantsInstances = [character]
		// You might also want to exclude the weapon model itself if it's a separate part.
		// const weapon = character.FindFirstChildOfClass("Tool");
		// if (weapon) {
		//     raycastParams.FilterDescendantsInstances.push(weapon);
		// }
	}

	// Perform the raycast.
	const raycastResult = Workspace.Raycast(origin, direction.mul(maxDistance), raycastParams)
	if (!raycastResult) return

	const hitPart = raycastResult.Instance
	const hitModel = hitPart.Parent
	if (!(hitModel && hitModel.IsA("Model"))) return

	const hitHumanoid = hitModel.FindFirstChildOfClass("Humanoid")
	if (!hitHumanoid) return

	// Further verification: Ensure the hit target is not the firing player.
	const hitPlayer = Players.GetPlayerFromCharacter(hitModel)
	if (hitPlayer === player) return

	return hitHumanoid
}
