[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# temperature-sensor

## Installazione/_Installation_

Aprire un terminale o un prompt dei comandi nella cartella in cui è stato clonato il repository e digitare i comandi seguenti:

_Open a terminal or command prompt in the directory in which you cloned this repository and type in these commands:_

```sh
npm install
```

## Utilizzo/_Usage_

_Tutte le istruzioni seguenti valgono a partire dalla root del progetto clonato._

_All the following instructions work from the cloned repository root._

### Esecuzione/_Run_

```sh
cd packages/temperature-sensor
npm start
```

### Analisi Statica/_Static Analysis_

```sh
cd packages/temperature-sensor
npm run lint
```

### Test/_Tests_

```sh
cd packages/temperature-sensor
npm test
```



## Variabili d'ambiente disponibili/_Available environment variables_

È possibile scrivere un file `.env` in cui dare un valore alle seguenti variabili d'ambiente.

_You can write a `.env` file with the following environment variables._

| Variabile/_Variable_        | Descrizione/_Description_                                                                | Valore di default/_Default value_                         |
| --------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `MQTT_HOST`                 | Indica in quale host è in esecuzione il broker MQTT.                                     | `localhost`                                               |
| `MQTT_PORT`                 | Indica a quale porta risponde il broker MQTT.                                            | `1883`                                                    |
| `SENSOR_SINE_FREQUENCY`     | Indica la frequenza della funzione sinusoidale che genera la curva di temperatura.       | `10`                                                      |
| `SENSOR_SINE_AMPLITUDE`     | Indica l'ampiezza della funzione sinusoidale che genera la curva di temperatura.         | `3`                                                       |
| `SENSOR_SINE_OFFSET`        | Indica la fase (offset) della funzione sinusoidale che genera la curva di temperatura    | `10`                                                      |
| `SENSOR_BASE_TEMP`          | Indica la temperatura di base che il sensore rileva. Rappresenta la temperatura "media". | `20`                                                      |
| `SENSOR_MANUFACTURER`       | Indica il produttore del sensore _virtualizzato_.                                        | `unknown`                                                 |
| `SENSOR_MODEL`              | Indica il modello del sensore _virtualizzato_.                                           | `unknown`                                                 |
| `SENSOR_REVISION`           | Indica la revisione del modello di sensore _virtualizzato_.                              | `unknown`                                                 |
| `SENSOR_CLASS`              | Indica la metrica che il sensore _virtualizzato_ misura.                                 | `temperature`                                             |
| `SENSOR_ID`                 | Indica l'id univoco del sensore _virtualizzato_.                                         | [`shortid.generate()`](https://github.com/dylang/shortid) |
| `SENSOR_MIN_RANGE`          | Indica il valore minimo di temperatura in cui il sensore funziona (°C).                  | `-10`                                                     |
| `SENSOR_MAX_RANGE`          | Indica il valore massimo di temperatura in cui il sensore funziona (°C).                 | `50`                                                      |
| `SENSOR_ZERO`               | Indica un valore della scala di misura da interpretare come zero (°C).                   | `0`                                                       |
| `SENSOR_RESOLUTION`         | Indica la più piccola differenza di temperatura rilevabile dal sensore (°C).             | `0.001`                                                   |
| `SENSOR_FREQUENCY_RESPONSE` | Indica la frequenza di misura del sensore (Hz).                                          | `1`                                                       |


## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
