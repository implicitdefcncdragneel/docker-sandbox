FROM alpine:3.9

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories

RUN apk upgrade --update
RUN apk add mongodb=4.0.5-r0

VOLUME [ "/data/db" ]

WORKDIR /data
EXPOSE 27017

RUN mongo --version