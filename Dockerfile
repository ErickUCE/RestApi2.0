# Usar la imagen oficial de Node.js
FROM node:18

# Crear y establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto en el que el servidor se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
