export const gunSettings = {
	fireMode: "SEMI",
	damage: 25,
	headshotMultiplier: 1.5,
	rateOfFire: 300, //Rounds per minute
	range: 500,
	rayColor: Color3.fromRGB(255, 160, 75),
	raySize: new Vector2(0.25, 0.25), //--Width and height
	debrisTime: 0.075,
}

export type GunSettings = typeof gunSettings
