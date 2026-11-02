FROM mcr.microsoft.com/devcontainers/typescript-node:18-bullseye

# Arguments pour les versions des outils DevOps
ARG TERRAFORM_VERSION=1.5.7
ARG KUBECTL_VERSION=v1.28.2

# Installation des dépendances système de base
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    curl \
    unzip \
    git \
    apt-transport-https \
    ca-certificates

# Installation de Terraform
RUN curl -fsSL https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip -o terraform.zip \
    && unzip terraform.zip -d /usr/local/bin/ \
    && rm terraform.zip

# Installation de kubectl
RUN curl -fsSL https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl \
    && chmod +x /usr/local/bin/kubectl

# Nettoyage du cache apt pour alléger l'image
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Retour à l'utilisateur non-root par défaut
USER node