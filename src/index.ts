import { useEffect, useState } from "react";

const useBatteryStatus = () => {

    let [batteryManager, setBatteryManager] = useState<BatteryManager>();

    useEffect(() => {
        async function getNavigator() {
            navigator.getBattery().then((batteryManager: BatteryManager) => {
                setBatteryManager(batteryManager)
                batteryManager.addEventListener("levelchange", () => {
                    setBatteryManager(batteryManager);
                });
            });
        };

        getNavigator();

    }, [batteryManager]);

    return batteryManager;
}
export default useBatteryStatus;
