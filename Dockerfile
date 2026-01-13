# Dockerfile for Google Cloud Run
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build and optional dependencies)
RUN npm install

# Copy all source
COPY . .

# Build the app
RUN npm run build

# Remove dev dependencies after build
RUN npm prune --omit=dev && npm cache clean --force

# Cloud Run expects the server to listen on PORT env var (defaults to 8080)
ENV PORT=8080
ENV NODE_ENV=production

# Expose the port
EXPOSE 8080

# Health check for Cloud Run
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the server
CMD ["node", "dist/index.cjs"]
