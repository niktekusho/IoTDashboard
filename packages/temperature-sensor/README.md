[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# temperature-sensor

## Installazione/_Installation_

Aprire un terminale o un prompt dei comandi nella cartella in cui è stato clonato il repository e digitare i comandi seguenti:

_Open a terminal or command prompt in the directory in which you cloned this repository and type in these commands:_

```sh
npm install
```

## Usage

```js
npm start
```


### Variabili d'ambiente disponibili/_Available environment variables_

| Variabile/_Variable_           | Descrizione/_Description_                                                                 | Valore di default/_Default value_ |
|--------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------|
| `MQTT_PERSISTANCE`             | Indica che tecnologia lato backend utilizzare.                                            | `mongo`                           |
| `PERSISTANCE_HOST`             | Indica a quale host collegarsi. Vale sia per Redis che per MongoDB.                       | `localhost`                       |
| `PERSISTANCE_PORT`             | Indica quale porta del host è dedicata al database. Vale sia per Redis che per MongoDB.   | `27017`                           |
| `PERSISTANCE_USER`             | Indica il nome utente con cui collegarsi al database. Vale sia per Redis che per MongoDB. | `root`                            |
| `PERSISTANCE_PASSWORD`         | Indica la password associata al nome utente. Vale sia per Redis che per MongoDB.          | `root`                            |
| `MONGO_PERSISTANCE_COLLECTION` | Indica la "collection" di MongoDB da utilizzare. Vale **solo** per MongoDB.               | `ascoltatori`                     |
| `REDIS_DB_NUMBER`              | Indica l'id del database di Redis da utilizzare. Vale **solo** per Redis.                 | `12`                              |
| `MQTT_PORT`                    | Indica a quale porta risponde il broker MQTT.                                             | `1883`                            |


## License

MIT ©  [Nicola Dal Maso](https://github.com/niktekusho)
