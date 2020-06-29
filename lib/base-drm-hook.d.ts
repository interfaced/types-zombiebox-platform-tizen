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
	protected _avplay: any;
	protected _isHigherThan5: boolean;
	protected _client: any;
	protected _initPromise: Promise<any>;
	protected _onClientError: (event: any, error: any) => any;
	protected _init(): Promise<any>;
	protected _onError(error: Error): void;
	protected _isDestroyed(): boolean;
	protected _assertIsAlive(): void;
}
