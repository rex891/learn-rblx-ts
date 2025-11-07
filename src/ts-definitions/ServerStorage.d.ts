interface ServerStorage extends Instance {
	Tools: Folder & {
		Flashlight: Tool & {
			Handle: Part & {
				SpotLight: SpotLight;
			};
		};
	};
	__Rojo_SessionLock: ObjectValue;
}
