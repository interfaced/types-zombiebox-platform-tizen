import AbstractVideo from 'zombiebox/zb/device/abstract-video';
import Rect from 'zombiebox/zb/geometry/rect';
import IViewPort from 'zombiebox/zb/device/interfaces/i-view-port';
import TaskManager, { TaskCreator } from './task-manager';
import IInfo from 'zombiebox/zb/device/interfaces/i-info';

export default class Video extends AbstractVideo {
  public EVENT_PLUGIN_OPEN: string;
  public EVENT_PLUGIN_CLOSE: string;
  protected _info: IInfo;
  protected _url: string;
  protected _taskManager: TaskManager;
  protected _plugin: any;
  constructor(rect: Rect, info: IInfo);
  public play(url: string, opt_startFrom?: number);
  public resume(): void;
  public pause(): void;
  public stop(): void;
  public forward(): boolean;
  public rewind(): boolean;
  public destroy(): void;
  public setPlaybackRate(rate: number): void;
  public getPlaybackRate(): number;
  public setPosition(milliseconds: number): void;
  public getPosition(): number;
  public getDuration(): number;
  public setVolume(value: number): void;
  public getVolume(): number;
  public getUrl(): string;
  protected _play(): void;
  protected _createViewPort(containerRect: Rect): IViewPort;
  protected _createSuspendTask(): TaskCreator;
  protected _open(url: string): void;
  protected _onError(eventType: string, error: any): void;
}
