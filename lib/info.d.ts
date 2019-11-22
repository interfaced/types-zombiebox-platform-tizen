import AbstractInfo from 'zombiebox/zb/device/abstract-info';
import { Resolution } from 'zombiebox/zb/device/resolutions';

export default class Info extends AbstractInfo {
  constructor(plugin: any);
  type(): string;
  version(): string;
  manufacturer(): string;
  model(): string;
  serialNumber(): string;
  softwareVersion(): string;
  hardwareVersion(): string;
  osdResolutionType(): Resolution;
  init(): Promise<any>;
  getProperty(propertyName: string): object;
  protected _getLocale(): string;
}
