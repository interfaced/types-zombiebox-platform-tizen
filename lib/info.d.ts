import AbstractInfo from 'zombiebox/zb/device/abstract-info';
import { Resolution } from 'zombiebox/zb/device/resolutions';

export default class Info extends AbstractInfo {
	constructor(plugin: any);
	protected _systeminfo: any;
	protected _properties: {
		[x: string]: {
			[x: string]: any;
		};
	};
	type(): string;
	manufacturer(): string;
	model(): string;
	serialNumber(): string;
	version(): string;
	softwareVersion(): string;
	hardwareVersion(): string;
	osdResolutionType(): Resolution;
	getPanelResolution(): Resolution;
	init(): Promise<any>;
	getProperty(propertyName: string): object;
	protected _getLocale(): string;
	protected _normalizeLocale(rawLocale: string): string;
	protected _fetchProperty(propertyName: string): Promise<any>;
}
