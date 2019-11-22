import Rect from 'zombiebox/zb/geometry/rect';
import { State } from 'zombiebox/zb/device/interfaces/i-video';
import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Info from './info';
import StatefulVideo from './stateful-video';
import Video from './video';

export default class Device extends AbstractDevice {
  info: Info;
  protected _tizen: any;
  protected _webapis: any;
  EVENT_APP_CONTROL: string;
  constructor();
  init(): void;
  createVideo(rect: Rect): Video;
  createStatefulVideo(rect: Rect): StatefulVideo;
  getMAC(): string;
  getIP(): string;
  exit(): void;
  setOSDOpacity(value: number): void;
  getOSDOpacity(): number;
  setOSDChromaKey(chromaKey: string): void;
  getOSDChromaKey(): string | null;
  removeOSDChromaKey(): void;
  hasOSDOpacityFeature(): boolean;
  hasOSDAlphaBlendingFeature(): boolean;
  hasOSDChromaKeyFeature(): boolean;
  isUHDSupported(): boolean;
  getEnvironment(): object;
  getLaunchParams(): object;
  protected _onAppControl(): void;
  protected _updateScreensaverState(event: string, newState: State): void;
}
