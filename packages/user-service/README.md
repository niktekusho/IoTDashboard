[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# user-service

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
cd packages/user-service
npm start
```

### Analisi Statica/_Static Analysis_

```sh
cd packages/user-service
npm run lint
```

### Test/_Tests_

```sh
cd packages/user-service
npm test
```

## Variabili d'ambiente disponibili/_Available environment variables_

È possibile scrivere un file `.env` in cui dare un valore alle seguenti variabili d'ambiente.

_You can write a `.env` file with the following environment variables._

| Variabile/_Variable_ | Descrizione/_Description_                                            | Valore di default/_Default value_ |
| -------------------- | -------------------------------------------------------------------- | --------------------------------- |
| `REDIS_HOST`          | Indica in quale host è in esecuzione il database Redis.                 | `localhost`                       |
| `REDIS_PORT`          | Indica a quale porta risponde il database Redis.                        | `6379`                            |
| `REDIS_DB_ID`           | Indica a quale database collegarsi all'interno di Redis (`0`-`16`).           | `10`                            |
| `API_PORT`         | Indica a quale porta il servizio risponde.            | `6000`                       |

## API del servizio/_Service's API_

### Modelli/_Models_

#### UserData

| Proprietà/_Property_ | Tipo/_Type_            | Descrizione/_Description_                                                                                            |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `name`               | `String`               | Nome dell'utente.                                                                      |
| `units`              | `SystemUnitDefinition` | Oggetto contenente la definizione di tutte le unità di misura in utilizzo nel sistema. |

#### SystemUnitDefinition

| Proprietà/_Property_ | Tipo/_Type_ | Descrizione/_Description_                                                      |
| -------------------- | ----------- | ------------------------------------------------------------------------------ |
| `temperature`        | `String`    | Simbolo dell'unità di misura della temperatura scelta dall'utente (default C). |

#### UnitDefinition

| Proprietà/_Property_ | Tipo/_Type_ | Descrizione/_Description_                                                       |
| -------------------- | ----------- | ---------------------------------------------------------------- |
| `abbr`               | `String`    | Simbolo dell'unità di misura.                                    |
| `system`             | `String`    | Sistema a cui l'unità di misura appartiene (metrico/imperiale).  |
| `singular`           | `String`    | Nome completo dell'unità di misura al singolare.                 |
| `plural`             | `String`    | Nome completo dell'unità di misura al plurale.                   |


### API sincrona

| Endpoint            | Metodo HTTP | Risposte                                                                           | Descrizione                                                                              |
|---------------------|-------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| `/`                 | `GET`       | `200`: `UserData`                                                    | Ottiene tutte preferenze utente.                         |
| `/` | `POST`       | <ul><li>`200`: `ok`</li><li>`406`: Dettaglio errore.</li></ul> | Modifica/aggiorna le preferenze dell'utente. Nella richiesta va incluso un oggetto `UserData` (anche incompleto). |
| `/temperature`        | `GET`       | `200`: Array[UnitDefinition] | Ottiene tutte le unità di misura di temperatura supportate dal servizio. |


## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
