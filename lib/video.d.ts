import AbstractVideo from 'zombiebox/zb/device/abstract-video';
import Rect from 'zombiebox/zb/geometry/rect';
import IInfo from 'zombiebox/zb/device/interfaces/i-info';
import ViewPort from './view-port';
import TaskManager, { TaskCreator } from './task-manager';

export default class Video extends AbstractVideo {
  EVENT_PLUGIN_OPEN: string;
  EVENT_PLUGIN_CLOSE: string;
  protected _info: IInfo;
  protected _url: string;
  protected _taskManager: TaskManager;
  protected _plugin: any;
  constructor(rect: Rect, info: IInfo);
  play(url: string, opt_startFrom?: number);
  resume(): void;
  pause(): void;
  stop(): void;
  forward(): boolean;
  rewind(): boolean;
  destroy(): void;
  setPlaybackRate(rate: number): void;
  getPlaybackRate(): number;
  setPosition(milliseconds: number): void;
  getPosition(): number;
  getDuration(): number;
  setVolume(value: number): void;
  getVolume(): number;
  getUrl(): string;
  protected _play(): void;
  protected _seekTo(position: number): Promise<void>;
  protected _asyncPrepare(): Promise<void>;
  protected _createViewPort(containerRect: Rect): ViewPort;
  protected _createSuspendTask(): TaskCreator;
  protected _createStopTask(): TaskCreator;
  protected _createPlayTask(url: string, opt_position?: number): TaskCreator;
  protected _open(url: string): void;
  protected _close(): void;
  protected _play(): void;
  protected _stop(): void;
  protected _initPlugin(): void;
  protected _initVideoObject(): void;
  protected _deinitVideoObject(): void;
  protected _createStateSnapshot(): () => void;
  protected _setProxyingPluginListener(): void;
  protected _subscribeDefaultPlaybackListeners(): void;
  protected _unsubscribeDefaultPlaybackListeners(): void;
  protected _subscribeVisibilityChange(): void;
  protected _unsubscribeVisibilityChange(): void;
  protected _onVisibilityChanged(): void;
  protected _onVolumeChange(volume: number): void;
  protected _onApplicationHidden(): void;
  protected _onBufferingStart(): void;
  protected _onCurrentPlayTime(eventType: string, currentPlayTime: string): void;
  protected _onStreamCompleted(): void;
  protected _onError(eventType: string, error: any): void;
  protected _onEvent(eventType: string, eventData: any): void;
}
