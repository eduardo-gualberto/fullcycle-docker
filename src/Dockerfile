FROM golang:alpine as builder 

RUN apk add --no-cache git bash

RUN git clone https://github.com/eduardo-gualberto/fullcycle-docker.git fc-docker

RUN cd fc-docker/src \
    && go build hello.go \
    && mv hello /

FROM scratch

COPY --from=builder /hello .

CMD ["./hello"]
