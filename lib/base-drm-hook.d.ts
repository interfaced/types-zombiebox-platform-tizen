import IDrmClient from 'zombiebox/zb/device/interfaces/i-drm-client';
import EventPublisher from 'zombiebox/zb/events/event-publisher';
import { Type } from 'zombiebox/zb/device/drm/drm';

export default class BaseDrmHook extends EventPublisher {
    type: Type | string;
    EVENT_ERROR: string;
    constructor(client: IDrmClient);
    prepare(): Promise<any>;
    destroy(): Promise<any>;
    onAVPlayEvent(data: Object): void;
}