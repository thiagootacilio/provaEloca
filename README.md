# Prova Eloca 

## Tecnologias

Repositório com responsabilidade de disponibilizar uma stack com serviços que permitam trabalhar com o projeto.


## Tecnologias utilizadas

- Docker
- PHP 7.3 (php-fpm)
  - Laravel Framework
  - Eloquent ORM
- Nginx
- MySql

## Estrutura de pastas

O projeto foi divido em 2 estruturas de pastas principais:

- [backend](./api)
- database
- [frontend](./webapp)

## Serviços Disponíveis

Para reunir todos os módulos acima, foi criada uma stack Docker da aplicação, contendo os serviços abaixo:

- backend-service - Porta 8001
- db-service - Porta 5401


## Como inicializar a Stack

O comando abaixo servirá para a criação das imagens utilizadas nos serviços mencionados acima.

```console
docker-compose up --build
```