import AbstractViewPort from 'zombiebox/zb/device/abstract-view-port';
import { Resolution } from 'zombiebox/zb/device/resolutions';
import { AspectRatio } from 'zombiebox/zb/device/aspect-ratio/aspect-ratio';
import Rect from 'zombiebox/zb/geometry/rect';

export default class ViewPort extends AbstractViewPort {
  protected _plugin: any;
  protected _videoObject: HTMLObjectElement;
  protected _tizenVersion: string;
  protected _displayRatio: number;
  constructor(containerRect: Rect, plugin: any, videoObject: HTMLObjectElement, osdResolution: Resolution, version: string);
  public updateViewPort(): void;
  public isAspectRatioSupported(ratio: AspectRatio): boolean;
  public hasAspectRatioFeature(): boolean;
  public hasAreaChangeFeature(): boolean;
}
