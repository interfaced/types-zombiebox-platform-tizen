import Rect from 'zombiebox/zb/geometry/rect';
import IVideo, { State } from 'zombiebox/zb/device/interfaces/i-video';
import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Info from './info';

export default class Device extends AbstractDevice {
  public info: Info;
  protected _tizen: any;
  protected _webapis: any;
  public EVENT_APP_CONTROL: string;
  constructor();
  public init(): void;
  public createVideo(rect: Rect): IVideo;
  public getMAC(): string;
  public getIP(): string;
  public exit(): void;
  public setOSDOpacity(value: number): void;
  public getOSDOpacity(): number;
  public setOSDChromaKey(chromaKey: string): void;
  public getOSDChromaKey(): string | null;
  public removeOSDChromaKey(): void;
  public hasOSDOpacityFeature(): boolean;
  public hasOSDAlphaBlendingFeature(): boolean;
  public hasOSDChromaKeyFeature(): boolean;
  public isUHDSupported(): boolean;
  public getEnvironment(): object;
  public getLaunchParams(): object;
  protected _onAppControl(): void;
  protected _updateScreensaverState(event: string, newState: State): void;
}
