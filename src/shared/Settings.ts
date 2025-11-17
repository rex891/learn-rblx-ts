export type GunSettings = {
	fireMode: string
	damage: number
	headshotMultiplier: number
	rateOfFire: number
	range: number
	rayColor: Color3
	raySize: Vector2
	debrisTime: number
}

export const blueGunSettings: GunSettings = {
	fireMode: "SEMI",
	damage: 25,
	headshotMultiplier: 1.5,
	rateOfFire: 300, //Rounds per minute
	range: 500,
	rayColor: Color3.fromRGB(38, 15, 207),
	raySize: new Vector2(0.25, 0.25), //--Width and height
	debrisTime: 0.075,
}

export const redGunSettings: GunSettings = {
	fireMode: "SEMI",
	damage: 25,
	headshotMultiplier: 1.5,
	rateOfFire: 300, //Rounds per minute
	range: 500,
	rayColor: Color3.fromRGB(255, 74, 92),
	raySize: new Vector2(0.25, 0.25), //--Width and height
	debrisTime: 0.075,
}
