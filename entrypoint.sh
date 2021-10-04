#!/bin/bash

cp -r /cache/node_modules/. /app/node_modules/
exec yarn serve