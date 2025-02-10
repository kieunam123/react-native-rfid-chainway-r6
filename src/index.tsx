import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-rfid-chainway-r6' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const RfidChainwayR6 = NativeModules.RfidChainwayR6 ? NativeModules.RfidChainwayR6 : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

export function multiply(a: number, b: number): Promise<number> {
  return RfidChainwayR6.multiply(a, b);
}

export function connectAddress(address: string): Promise<any> {
  return RfidChainwayR6.connectAddress(address);
}
export function stopScanBLE(): void {
  return RfidChainwayR6.stopScanBLE();
}
export function setPower(power: number): void {
  return RfidChainwayR6.setPower(power);
}
export function startScanRFIDWithRfid(tag: string): void {
  return RfidChainwayR6.startScanRFIDWithRfid(tag);
}
export function ScanBLE(): void {
  return RfidChainwayR6.ScanBLE();
}
export function startScanRFID(): void {
  return RfidChainwayR6.startScanRFID();
}
export function stop(): void {
  return RfidChainwayR6.stop();
}
export function clearData(): Promise<any> {
  return RfidChainwayR6.clearData();
}
export function getBatteryLevel(): Promise<number> {
  return RfidChainwayR6.getBatteryLevel();
}
export function isConnected(): Promise<boolean> {
  return RfidChainwayR6.isConnected();
}
export function disconnect(): Promise<void> {
  return RfidChainwayR6.disconnect();
}
export function setFrequency(frequency: number): Promise<void> {
  return RfidChainwayR6.setFrequency(frequency);
}
export function getDeviceInfo(): Promise<{
  serialNumber: string;
  firmwareVersion: string;
  model: string;
}> {
  return RfidChainwayR6.getDeviceInfo();
}
export function onTagFound(callback: (tag: {
  epc: string;
  rssi: number;
  antenna: number;
  timestamp: number;
}) => void): void {
  return RfidChainwayR6.onTagFound(callback);
}
export function removeTagListener(): void {
  return RfidChainwayR6.removeTagListener();
}
export function setBeep(enabled: boolean): Promise<void> {
  return RfidChainwayR6.setBeep(enabled);
}
export function setInventoryMode(mode: 'single' | 'continuous'): Promise<void> {
  return RfidChainwayR6.setInventoryMode(mode);
}
