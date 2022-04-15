import { useEffect, useState } from "react";

const useBatteryStatus = (): Battery => {

    let [batteryState, setBatteryState] = useState<BatteryState>({
        level: 0,
        charging: false,
        chargingTime: 0,
        dischargingTime: 0,
    });

    useEffect(() => {
        async function getNavigator() {
            navigator.getBattery().then((batteryManager: BatteryManager) => {
                setBatteryState(batteryManager)
                batteryManager.addEventListener("chargingchange", () => {
                    setBatteryState(batteryManager);
                });
                batteryManager.addEventListener("chargingtimechange", () => {
                    setBatteryState(batteryManager);
                });
                batteryManager.addEventListener("dischargingtimechange", () => {
                    setBatteryState(batteryManager);
                });
                batteryManager.addEventListener("levelchange", () => {
                    setBatteryState(batteryManager);
                });
            });
        };

        getNavigator();

    }, [batteryState]);

    // Check browser compatiblity
    if (!navigator.getBattery) {
        return {
            isSupported: false
        }
    }
    return { ...batteryState, isSupported: true };
}
export default useBatteryStatus;
