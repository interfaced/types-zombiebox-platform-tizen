export enum PreviewTileAspect {
	W16H9 = '16by9',
	W4H3 = '4by3',
	W1H1 = '1by1',
	W2H3 = '2by3'
}
export const VERSION_SINCE_SUPPORTED: "2.4";
export function isSupported(): boolean;
export function canSetPreviewNotThroughService(): boolean;
export function setPreview(data: PreviewData): Promise<any>;
export function setPreviewThroughService(data: PreviewData, serviceId: string): Promise<any>;
export function checkPreviewSupported(): void;
export function checkCanSetPreviewNotThroughService(): void;
export type PreviewData = {
	sections: PreviewSection[];
};
export type PreviewSection = {
	title: string;
	tiles: PreviewTile[];
	position: (number | undefined);
};
export type PreviewTile = {
	title: (string | undefined);
	subtitle: (string | undefined);
	position: (number | undefined);
	imageUrl: string;
	imageRatio: (PreviewTileAspect | number);
	actionData: any;
	isPlayable: boolean;
	displayFrom: (number | undefined);
	displayUntil: (number | undefined);
};
