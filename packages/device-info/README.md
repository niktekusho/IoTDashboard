[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# device-info

## Installazione/_Installation_

Aprire un terminale o un prompt dei comandi nella cartella in cui è stato clonato il repository e digitare i comandi seguenti:

_Open a terminal or command prompt in the directory in which you cloned this repository and type in these commands:_

```sh
npm install
npm run lerna -- add device-info --scope=SERVICE
npm run refresh
```

## Usage

Il modulo espone la classe `DeviceInfo` per l'utilizzo con i servizi che la trattano.

_This module publishes the class `DeviceInfo` for use in the appropriate services._

```js
const DeviceInfo = require('device-info');

...

const hw = new DeviceInfo({ manufacturer, model, revision, deviceClass, deviceId });
```



## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
