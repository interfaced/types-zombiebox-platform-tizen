import PlayReadyClient from 'zombiebox/zb/device/drm/playready-client';
import BaseDRMHook from './base-drm-hook';

export default class PlayReadyHook extends BaseDRMHook {
    constructor(client: PlayReadyClient);
    prepare(): Promise<undefined>;
    destroy(): Promise<undefined>;
}