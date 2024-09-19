#!/bin/bash

# Step 3: Initialize Node.js project
echo "Initializing new Node.js project..."
npm init -y

# Step 4: Install TypeScript and Node.js types
echo "Installing TypeScript and Node types..."
npm install typescript @types/node --save-dev

# Step 5: Initialize TypeScript configuration
echo "Initializing TypeScript configuration (tsconfig.json)..."
npx tsc --init

# Step 6: Install Nodemon for development (optional)
echo "Installing Nodemon for automatic restarts..."
npm install nodemon --save-dev

# Step 7: Create project structure
echo "Creating project structure..."
mkdir -p src
cat <<EOL > src/index.ts
const sayHello = (name: string) => {
    console.log(\`Hello, \${name}!\`);
};

sayHello('TypeScript');
EOL

# Modify package.json to include build, start, and dev scripts
echo "Updating package.json scripts..."
npx json -I -f package.json -e 'this.scripts={
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
}'

echo "Setup complete! You can now run 'npm run dev' to start your development environment."