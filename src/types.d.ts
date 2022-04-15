/**
 * Battery
 * Requires a type guard to check if API is supported
 */
declare type Battery =
    | { isSupported: false }
    | (BatteryState & { isSupported: true; });

/** Holds all battery properties */
declare interface BatteryState {
    level: number,
    charging: boolean,
    chargingTime: number,
    dischargingTime: number,
}
/**
 * [BatteryManager](https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager)
 */
declare interface BatteryManager extends EventTarget, BatteryState {
    level: number,
    charging: boolean,
    chargingTime: number,
    dischargingTime: number,
    onchargingchange?: () => void;
    onchargingtimechange?: () => void;
    ondischargingtimechange?: () => void;
    onlevelchange?: () => void;
}

declare interface Navigator {
    getBattery: () => Promise<BatteryManager>
}
