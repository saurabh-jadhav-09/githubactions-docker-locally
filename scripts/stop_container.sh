#!/bin/bash

docker stop myapp-container || true
docker rm myapp-container || true

