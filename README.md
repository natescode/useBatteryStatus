# React Hook for the Battery Status API 

This API is currently only supported in Chrome 38+, Edge 78+, Opera 25+ but not in Firefox, Safari or IE.

## Installation

    npm i battery-status-hook

## Usage

    import { useBatteryStatus } from 'battery-status-hook'

    const Battery = (): ReactElement => {
        let battery = useBatteryStatus();
    return (
        battery.isSupported ? 
            <h1> Current Battery Level {level * 100}% </h1>
            : <h1>Battery Status API not supported in this browser</h1>
    )
}
