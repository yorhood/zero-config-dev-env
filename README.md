# 🚀 zero-config-dev-env

A turnkey, isolated, and standardized Cloud Native development environment powered by VS Code and Docker Devcontainers.

No more endless setups and the infamous *"it works on my machine"* syndrome: this repository bundles a ready-to-use stack with **Node.js**, **Terraform CLI**, and **kubectl**, automatically configured as soon as you open it in your editor.

---

## 📋 Prerequisites

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Visual Studio Code](https://code.visualstudio.com/)
* VS Code Extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

---

## 🛠️ Quick Start

1. **Clone the repository :**
   ```bash
   git clone https://github.com/yorhood/zero-config-dev-env.git
   cd zero-config-dev-env
   ```

2. **Open in VS Code :**
   ```bash
   code .
   ```

3. **Launch the container :**
   When the notification appears in the bottom right (*"Folder contains a Dev Container configuration file"*), click  **Reopen in Container**.  
   *(Alternative : press `F1` and select **Dev Containers: Reopen in Container**)*.

4. **Test the environment :**
   Once the container is ready, run the quick audit script in the VS Code terminal :
   ```bash
   node src/index.js
   ```

   ```output
    🚀 [Devcontainer Test] Validating environment tools...

    ✅ Node.js: v22.16.0
    ✅ Terraform CLI: Terraform v1.12.1
    ✅ Kubectl CLI: clientVersion:

    🎉 Everything is ready! Your environment is 100% operational.
  ```

---

## 🧪 Project Contents

* `.devcontainer/` : Configuration for the isolated environment (Dockerfile + devcontainer.json).
* `src/index.js` : Quick Hello World test script validating Node.js, Terraform, and kubectl versions


