[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# temperature-service

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
cd packages/temperature-service
npm start
```

### Analisi Statica/_Static Analysis_

```sh
cd packages/temperature-service
npm run lint
```

### Test/_Tests_

```sh
cd packages/temperature-service
npm test
```

## Variabili d'ambiente disponibili/_Available environment variables_

È possibile scrivere un file `.env` in cui dare un valore alle seguenti variabili d'ambiente.

_You can write a `.env` file with the following environment variables._

| Variabile/_Variable_ | Descrizione/_Description_                                            | Valore di default/_Default value_ |
| -------------------- | -------------------------------------------------------------------- | --------------------------------- |
| `MQTT_HOST`          | Indica in quale host è in esecuzione il broker MQTT.                 | `localhost`                       |
| `MQTT_PORT`          | Indica a quale porta risponde il broker MQTT.                        | `1883`                            |
| `API_PORT`           | Indica la porta alla quale le api del servizio rispondono.           | `5000`                            |
| `MONGO_HOST`         | Indica in quale host è in esecuzione il database MongoDB.            | `localhost`                       |
| `MONGO_PORT`         | Indica la porta alla quale il database MongoDB risponde.             | `27017`                           |
| `MONGO_USER`         | Indica il nome utente con cui collegarsi al database MongoDB.        | `root`                            |
| `MONGO_PASSWORD`     | Indica la password associata all'utente di cui sopra.                | `root`                            |
| `MONGO_DB_NAME`      | Indica il nome del daatbase MongoDB in cui salvare e leggere i dati. | `temperature`                     |


## API del servizio/_Service's API_

### Modelli/_Models_

#### TemperatureData

| Proprietà/_Property_ | Tipo/_Type_ | Descrizione/_Description_                                                                                            |
| -------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `temperature`        | `Number`    | Temperatura ricevuta dai sensori in gradi Centigradi (°C).                                                           |
| `device`             | `String`    | Id del dispositivo che ha inviato la misurazione.                                                                    |
| `created_at`         | `Date`      | Data di salvataggio della misurazione. In condizioni normali corrisponde alla data di rilevazione della misurazione. |

### API sincrona

| Endpoint            | Metodo HTTP | Risposte                                                                           | Descrizione                                                                              |
|---------------------|-------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| `/`                 | `GET`       | `200`: `Array[TemperatureData]`                                                    | Ottiene tutte le rilevazioni presenti nel database del servizio.                         |
| `/device/:deviceId` | `GET`       | <ul><li>`200`: `Array[TemperatureData]`</li><li>`404`: Dettaglio errore.</li></ul> | Ottiene tutte le misurazioni presenti nel database per l'id del dispositivo specificato. |
| `/:from/:to`        | `GET`       | <ul><li>`200`: `Array[TemperatureData]`</li><li>`404`: Dettaglio errore.</li><li>`406`: Dettaglio errore.</li></ul> | Ottiene tutte le misurazioni presenti nel database per l'intervallo di date specificato. Le date devono essere inserite in formato ISO 8601 (`YYYY-MM-DD`, `YYYY-MM-DDThh:mm:ss` e `YYYY-MM-DDThh:mm:ssTZD` (TZD = Time Zone Designator)). |



## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
