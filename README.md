# IoTDashboard

[Documentazione/_Documentation_](https://github.com/niktekusho/IoT-docs)

Questo repository contiene i servizi implementati per il progetto di Stage di Nicola Dal Maso (CdL Informatica, Università di Padova).

_This repository contains all of the implemented services for Nicola Dal Maso's internship project (Bachelor Degree in CS, University of Padua)._

Lo stage prevede lo sviluppo e la realizzazione di una dashboard per la gestione di dispositivi interconnessi (IoT). L'idea alla base del sistema è quella di un centro di controllo attraverso cui l'utente del sistema gestisce i dispositivi smart presenti nella propria rete domestica, permettendo operazioni del tipo:

-   avvio/spegnimento di un dispositivo;
-   monitoraggio dei dispositivi collegati;
-   richiesta di dati per conoscere lo stato dei dispositivi (es. per una lampadina: accesa/spenta, assorbimento energetico, ecc.);
-   collegamento all'eventuale interfaccia proprietaria del dispositivo (es. supporto tecnico).

_The goals of this internship will be the development and the implementation of a dashboard for managing interconnected devices (IoT).<br>
The system in its core is a control center thanks to which the user is able to manage his/her network smart devices, allowing the following operations for example:_

-   _turning on/off device(s);_
-   _monitoring connected device(s);_
-   _gathering devices' status (e.g. a light bulb: on/off, power usage, etc.);_
-   _link to device's proprietary interface (e.g. for technical support)._


# Prerequisiti/_Requirements_

1.  Installazione di Node.js funzionante: [sito ufficiale](https://nodejs.org/)
2.  Installazione di Docker funzionante: [sito ufficiale](https://www.docker.com/community-edition)
3.  Installazione di git funzionante: [sito ufficiale](https://git-scm.com/)
4.  **Opzionale**: installazione di Yarn funzionante: [sito ufficiale](https://yarnpkg.com/en/)
5.  **Opzionale**: installazione di Yeoman funzionante: [sito ufficiale](http://yeoman.io)

<p></p>

1.  _Working Node.js installation_ [official site](https://nodejs.org/)
2.  _Working Docker installation_ [official site](https://www.docker.com/community-edition)
3.  _Working git installation_ [official site](https://git-scm.com/)
4.  _**Optional**: Working Yarn installation_ [official site](https://yarnpkg.com/en/)
5.  _**Optional**: Working Yeoman installation_ [official site](https://yarnpkg.com/en/)


# Indice del repository/_Repository index_
-   [Template Servizi per Yeoman/_Services Template for Yeoman_](./packages/generator-iot-service) - `./packages/generator-iot-service`
-   [MQTT Broker](./packages/mqtt-broker) - `./packages/mqtt-broker`
-   [Sensore di temperatura _virtualizzato_/_Virtualized Temperature Sensor_](./packages/temperature-sensor) - `./packages/temperature-sensor`
-   [Servizio temperatura /_Temperature Service_](./packages/temperature-service) - `./packages/temperature-service`
-   [Lampada _virtualizzata_/_Virtualized Lamp_](./packages/smart-lamp) - `./packages/smart-lamp`
-   [Servizio illuminazione/_Lighting Service_](./packages/lighting-service) - `./packages/lighting-service`
-   [Servizio informazioni dispositivi/_Devices Info Service_](./packages/devices-info) - `./packages/devices-info`
-   [Servizio _Gateway_ delle API/_API Gateway Service_](./packages/iot-api) - `./packages/iot-api`
