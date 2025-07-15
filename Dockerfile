FROM node:20-slim

# Install libvips only (required for sharp runtime)
RUN apt-get update && apt-get install -y \
  libvips \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only the built app from builder
COPY . .

# Expose app port (optional)
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]