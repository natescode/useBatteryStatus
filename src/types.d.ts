/**
 * BatteryState 
 * Required type guard to check if API is supported
 * Required type guard to check if API is loaded
 */
declare type UseBatteryState =
    | { isSupported: false }
    | { isSupported: true; fetched: false }
    | (BatteryState & { isSupported: true; fetched: true });

declare interface BatteryState {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
}

declare interface BatteryManager extends EventTarget {
    level: number,
    charging?: boolean,
    chargingTime?: number,
    dischargingTime: number,
    onchargingchange: () => void;
    onchargingtimechange: () => void;
    ondischargingtimechange: () => void;
    onlevelchange: () => void;
}

declare interface Navigator {
    getBattery: () => Promise<BatteryManager>
}
