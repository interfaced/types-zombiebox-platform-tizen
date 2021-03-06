import PlayReadyClient from 'zombiebox/zb/device/drm/playready-client';
import BaseDRMHook from './base-drm-hook';

export default class PlayReadyHook extends BaseDRMHook {
	constructor(client: PlayReadyClient);
	prepare(): Promise<any>;
	destroy(): Promise<any>;
	protected _drmWasInitialized: boolean;
	protected _client: PlayReadyClient;
}
