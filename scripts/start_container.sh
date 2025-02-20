#!/bin/bash

docker pull myapp:latest
docker run -d --name myapp-container -p 8080:8080 myapp:latest

