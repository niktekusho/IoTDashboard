[_Torna al documento precedente/Back_](https://github.com/<%= githubAccount %>/IoTDashboard/)

# <%= serviceName %>

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
cd packages/<%= serviceName %>
npm start
```

### Analisi Statica/_Static Analysis_

```sh
cd packages/<%= serviceName %>
npm run lint
```

### Test/_Tests_

```sh
cd packages/<%= serviceName %>
npm test
```

## License

<%= license %> © <% if (author.url) { %> [<%= author.name %>](<%= author.url %>) <% } else { %> <%= author.name %> <% } %>
