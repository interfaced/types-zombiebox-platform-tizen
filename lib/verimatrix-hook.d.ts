import VerimatrixClient from 'zombiebox/zb/device/drm/verimatrix-client';
import BaseDRMHook from './base-drm-hook';

export default class VerimatrixHook extends BaseDRMHook {
    constructor(client: VerimatrixClient);
    prepare(): Promise<undefined>;
    destroy(): Promise<undefined>;
    onAVPlayEvent(data: Object): void;
}