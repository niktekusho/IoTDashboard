[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

#  iot-api

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
cd packages/ iot-api
npm start
```

### Analisi Statica/_Static Analysis_

```sh
cd packages/ iot-api
npm run lint
```

### Test/_Tests_

```sh
cd packages/ iot-api
npm test
```

## Variabili d'ambiente disponibili/_Available environment variables_

È possibile scrivere un file `.env` in cui dare un valore alle seguenti variabili d'ambiente.

_You can write a `.env` file with the following environment variables._

host: helper('', ''),
port: helper('DEVICES_PORT', 3001),

| Variabile/_Variable_ | Descrizione/_Description_                                            | Valore di default/_Default value_ |
| -------------------- | -------------------------------------------------------------------- | --------------------------------- |
| `API_PORT`           | Indica la porta alla quale le api del servizio rispondono.           | `8000`                            |
| `DEVICES_HOST`       | Indica in quale host è in esecuzione il servizio `Devices Info`.     | `localhost`                       |
| `DEVICES_PORT`       | Indica la porta alla quale il servizio `Devices Info` risponde.      | `3000`                           |
| `LIGHTING_HOST`         | Indica in quale host è in esecuzione il servizio `Lighting`.        | `localhost`                            |
| `LIGHTING_PORT`     | Indica la porta alla quale il servizio `Lighting` risponde.                | `4000`                            |
| `TEMPERATURES_HOST`       | Indica in quale host è in esecuzione il servizio `Temperature`.     | `localhost`                       |
| `TEMPERATURES_PORT`       | Indica la porta alla quale il servizio `Temperature` risponde.      | `5000`                           |
| `USER_HOST`       | Indica in quale host è in esecuzione il servizio `User`.     | `localhost`                       |
| `USER_PORT`       | Indica la porta alla quale il servizio `User` risponde.      | `6000`                           |




## API del servizio/_Service's API_

### API sincrona: _/devices_

-  `/devices` - [info](../devices-service/README.md#api-sincrona)


### API sincrona: _/temperature_

-  `/temperature` - [info](../temperature-service/README.md#api-sincrona)


### API sincrona: _/lighting_

-  `/lighting` - [info](../lighting-service/README.md#api-sincrona)


### API sincrona: _/user_

-  `/user` - [info](../user-service/README.md#api-sincrona)



## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
