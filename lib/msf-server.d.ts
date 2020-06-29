import EventPublisher from 'zombiebox/zb/events/event-publisher';

export default class MSFServer extends EventPublisher {
	constructor(serverName: string);
	protected _service: any;
	protected _channel: any;
	protected _ownClientName: string;
	protected _msf: any;
	EVENT_SERVER_STARTED: string;
	EVENT_SERVER_STOPPED: string;
	EVENT_CLIENT_CONNECTED: string;
	EVENT_CLIENT_DISCONNECTED: string;
	EVENT_ERROR: string;
	sendEvent(target: string | any, event: string, message?: any | undefined): void;
	onRemoteEvent(event: string, callback: (arg0: any, arg1: any) => ): void;
	offRemoteEvent(event: string, callback: (arg0: any, arg1: any) => ): void;
	onceRemoteEvent(event: string, callback: (arg0: any, arg1: any) => ): void;
	start(channelName: string): Promise<any>;
	protected _createLocalService(): Promise<any>;
	protected _bindListeners(): void;
	protected _connect(): Promise<any>;
	protected _assertChannel(): void;
}

