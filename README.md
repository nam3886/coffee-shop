# coffee-shop

## How to install npm and yarn
install npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm<br>
install yarn: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Project setup
```
yarn install
```

## Cach 1
```
yarn serve
```
## Cach 2

```
docker build -f dockerfile.dev -t coffeeshop/coffeeshop:v1 .
docker-compose -f docker-compose.dev.yml up -d
```
