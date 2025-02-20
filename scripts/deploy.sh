#!/bin/bash

echo "Stopping existing container..."
./stop_container.sh

echo "Starting new container..."
./start_container.sh

echo "Deployment complete!"

