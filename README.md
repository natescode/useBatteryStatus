# React Hook for the Battery Status API 

> A react hook to get battery status

[![NPM](https://img.shields.io/npm/v/battery-status-hook.svg)](https://www.npmjs.com/package/battery-status-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

## Install

```bash
npm install --save use-battery-hook
```


## Usage
```jsx
import React from 'react'
import { useBatteryStatus } from 'battery-status-hook'

const Battery = (): ReactElement => {
        let battery = useBatteryStatus();
    return (
        battery.isSupported ? 
            <h1> Current Battery Level {level * 100}% </h1>
            : <h1>Battery Status API not supported in this browser</h1>
    )
}
```

## License

MIT © [NatesCode](https://github.com/natescode)
