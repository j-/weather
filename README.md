weather
=======

[![master branch build status][build-icon]][build-link]

Current weather conditions at your location

## Local development

### Client development only

```sh
$ git clone https://github.com/j-/weather.git && cd weather
$ npm install && npm start
```

Then open [localhost:8080](http://localhost:8080/).

### Client/Server development

After obtaining a [forecast.io API key][register-key]:

```sh
$ git clone https://github.com/j-/weather.git && cd weather
$ npm install
$ APIKEY=abcdef node .
```

Then open [localhost:8080](http://localhost:8080/).

## Testing

```sh
$ npm install && npm test
```

## License

MIT

[build-icon]: https://travis-ci.org/j-/weather.svg?branch=master
[build-link]: https://travis-ci.org/j-/weather
[register-key]: https://developer.forecast.io/register
