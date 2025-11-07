/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />

declare namespace JSX {
	interface IntrinsicElements {
		screengui: Partial<ScreenGui> & { children?: React.ReactNode }
		frame: Partial<Frame> & { children?: React.ReactNode }
		textlabel: Partial<TextLabel> & { children?: React.ReactNode }
		textbutton: Partial<TextButton> & { children?: React.ReactNode }
		uipadding: Partial<UIPadding>
		uicorner: Partial<UICorner>
		folder: Partial<Folder> & { children?: React.ReactNode }
	}
}
