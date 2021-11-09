FROM node:16.13 AS base


FROM base AS build

WORKDIR /data
ENTRYPOINT [ "npm", "install"]


FROM base AS lint

WORKDIR /data
ENTRYPOINT [ "npx", "prettier", "--write" ]

