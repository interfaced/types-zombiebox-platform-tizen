import VerimatrixClient from 'zombiebox/zb/device/drm/verimatrix-client';
import BaseDRMHook from './base-drm-hook';

export default class VerimatrixHook extends BaseDRMHook {
    constructor(client: VerimatrixClient);
    prepare(): Promise<any>;
    destroy(): Promise<any>;
    onAVPlayEvent(data: Object): void;
}