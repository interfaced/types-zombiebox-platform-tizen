import AbstractStatefulVideo from 'zombiebox/zb/device/abstract-stateful-video';
import { PrepareOption, State } from 'zombiebox/zb/device/interfaces/i-stateful-video';
import Rect from 'zombiebox/zb/geometry/rect';
import ViewPort from './view-port';
import Info from './info';

export default class StatefulVideo extends AbstractStatefulVideo {
    constructor(rect: Rect, info: Info);
    prepare(url: string, options: { [key: string]: any }): void;
    destroy(): void;
    play(): void;
    pause(): void;
    stop(): void;
    getUrl(): string;
    getViewport(): ViewPort;
    getDuration(): number;
    getPosition(): number;
    setPosition(position: number): void;
    getPlaybackRate(): number;
    setPlaybackRate(rate: number): void;
    getMuted(): boolean;
    setMuted(muted: boolean): void;
    getVolume(): number;
    setVolume(volume: number): void;
}