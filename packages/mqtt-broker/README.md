[_Torna al documento precedente/Back_](https://github.com/niktekusho/IoTDashboard/)

# mqtt-broker

## Installazione/_Installation_

Aprire un terminale o un prompt dei comandi nella cartella in cui è stato clonato il repository e digitare i comandi seguenti:

_Open a terminal or command prompt in the directory in which you cloned this repository and type in these commands:_


```sh
npm install
```

## Utilizzo/_Usage_

Il metodo migliore per eseguire il broker MQTT è quello di utilizzare Docker Compose, in quanto esegue un'istanza del servizio di broker e un'istanza di Redis per abilitare le funzionalità offline.

_The best method in order to run the MQTT broker is to use Docker Compose cause it will run an instance of the broker along side an instance of Redis to enable offline operability._

### Comandi Docker Compose/_Docker Compose commands_

Primo avvio:

_First run:_


```sh
cd packages/mqtt-broker
docker-compose up -d
```


Fermare i servizi:

_Stop services:_

```sh
cd packages/mqtt-broker
docker-compose stop
```

Resettare i servizi:

_Resetting services:_


```sh
cd packages/mqtt-broker
docker-compose up -d --force-recreate --build
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
