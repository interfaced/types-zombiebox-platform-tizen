import AbstractViewPort from 'zombiebox/zb/device/abstract-view-port';
import { Resolution, ResolutionInfoItem } from 'zombiebox/zb/device/resolutions';
import {AVPlayDisplayMethod} from './consts/avplay';
import { AspectRatio } from 'zombiebox/zb/device/aspect-ratio/aspect-ratio';
import Rect from 'zombiebox/zb/geometry/rect';

export default class ViewPort extends AbstractViewPort {
	protected _avplay: any;
	protected _videoObject: HTMLObjectElement;
	protected _displayMethodsMap: DisplayMethodsMap;
	protected _tizenVersion: string;
	constructor(avplay: any, videoObject: HTMLObjectElement, panelResolution: ResolutionInfoItem, appResolution: ResolutionInfoItem, version: string);
	hasAspectRatioFeature(): boolean;
	hasAreaChangeFeature(): boolean;
	isAspectRatioSupported(ratio: AspectRatio): boolean;
	updateViewPort(): void;
	protected _getDisplayMethodByRatio(requestedRatio: AspectRatio): AVPlayDisplayMethod | null;
	protected _createDisplayMethodsMap(version: string): DisplayMethodsMap;
}

export type DisplayMethodsMap = Map<AspectRatio, AVPlayDisplayMethod>;
