[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# devices-info

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
cd packages/devices-info
npm start
```

### Analisi Statica/_Static Analysis_

```sh
cd packages/devices-info
npm run lint
```

### Test/_Tests_

```sh
cd packages/devices-info
npm test
```

## Variabili d'ambiente disponibili/_Available environment variables_

È possibile scrivere un file `.env` in cui dare un valore alle seguenti variabili d'ambiente.

_You can write a `.env` file with the following environment variables._

| Variabile/_Variable_ | Descrizione/_Description_                                            | Valore di default/_Default value_ |
| -------------------- | -------------------------------------------------------------------- | --------------------------------- |
| `MQTT_HOST`          | Indica in quale host è in esecuzione il broker MQTT.                 | `localhost`                       |
| `MQTT_PORT`          | Indica a quale porta risponde il broker MQTT.                        | `1883`                            |
| `API_PORT`           | Indica la porta alla quale le api del servizio rispondono.           | `3000`                            |
| `MONGO_HOST`         | Indica in quale host è in esecuzione il database MongoDB.            | `localhost`                       |
| `MONGO_PORT`         | Indica la porta alla quale il database MongoDB risponde.             | `27018`                           |
| `MONGO_USER`         | Indica il nome utente con cui collegarsi al database MongoDB.        | `root`                            |
| `MONGO_PASSWORD`     | Indica la password associata all'utente di cui sopra.                | `root`                            |
| `MONGO_DB_NAME`      | Indica il nome del daatbase MongoDB in cui salvare e leggere i dati. | `devices`                         |


## API del servizio/_Service's API_

### Modelli/_Models_

#### DeviceInfo

| Proprietà/_Property_ | Tipo/_Type_  | Descrizione/_Description_                                                 |
| -------------------- | ------------ | ------------------------------------------------------------------------- |
| `Manufacturer`       | `String`     | Nome del produttore del dispositivo.                                      |
| `Model`              | `String`     | Nome assegnato dal produttore al dispositivo.                             |
| `Revision`           | `String`     | Revisione del dispositivo.                                                |
| `DeviceClass`        | `String`     | Categoria di utilizzo del dispositivo (temperatura, illuminazione, ecc.). |
| `DeviceId`           | `String`     | Identificativo del dispositivo.                                           |
| `SensorSpec`         | `SensorSpec` | Oggetto contenente informazioni specifiche sul funzionamento del sensore. |

#### SensorSpec

| Proprietà/_Property_ | Tipo/_Type_ | Descrizione/_Description_                                                              |
| -------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `Range`              | `Object`    | Condizioni di funzionamento del dispositivo. Struttura: `{ min: Number, max: Number }` |
| `Zero`               | `Number`    | Valore in cui il dispositivo rileva lo zero.                                           |
| `Resolution`         | `Number`    | La più piccola unità di misura rilevabile dal sensore.                                 |
| `Frequency`          | `Number`    | Numero di misurazioni al secondo (Hz).                                                 |

### API sincrona

| Endpoint            | Metodo HTTP | Risposte                                                                      | Descrizione                                                                                  |
|---------------------|-------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `/`                 | `GET`       | `200`: `Array[DeviceInfo]`                                                    | Ottiene tutti i dispositivi presenti nel database del servizio (collegati almeno una volta). |
| `/device/:deviceId` | `GET`       | <ul><li>`200`: `Array[DeviceInfo]`</li><li>`404`: Dettaglio errore.</li></ul> | Ottiene tutte le informazioni per l'id del dispositivo specificato.                          |
| `/classes`          | `GET`       | `200`: `Array[String]`                                                        | Ottiene tutte le categorie di dispositivi presenti a database.                               |
| `/classes/:class`   | `GET`       | <ul><li>`200`: `Array[DeviceInfo]`</li><li>`404`: Dettaglio errore.</li></ul> | Ottiene tutti i dispositivi presenti a database con la categoria specificata.                |


## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
