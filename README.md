# Issue

Reproduces issue documented here: https://github.com/nestjs/nest/issues/4017.

# Running

- Run NATS server locally
```bash
$ docker run -p 4222:4222 -ti nats:latest
```

- Run Nest server
```
$ npm start
```

- Run test script
```
$ npm run reproduce-issue
```