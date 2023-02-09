# Development mode
FROM node:16-bullseye

WORKDIR /app

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

# Install package-manager
# use corepack for easier installation
RUN corepack enable pnpm

# Download dependencies from lockfile
COPY ./pnpm-lock.yaml ./
RUN pnpm fetch

# Install dependencies
COPY ./package.json ./
COPY ./nodemon.json ./
RUN pnpm install

# Build
COPY ./ ./
# RUN pnpm install -g pm2
# RUN pnpm build

# # Clean up devDependencies
# RUN pnpm prune --prod

EXPOSE 3000

CMD ["pnpm", "dev"]