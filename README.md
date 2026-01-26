<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo DB API

1. Clonar proyecto

2. Instalar dependencias
```bash
yarn install
```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```

4. Cambiar las variables de entorno

5. Levantar la base de datos
```bash
docker-compose up -d
```

6. Habilitar variables de entorno
```bash
yarn add @nestjs/config
```

7. Instalar base de datos postgres
```bash
yarn add @nestjs/typeorm typeorm pg
```

8. Levantar proyecto
```bash
yarn run start:dev
```

9. Crear crud de productos
```bash
nest g res products --no-spec
```

10. Añadir las validaciones
```bash
yarn add class-validator class-transformer
```

11. Crear paginación en common
```bash
nest g mo common --no-spec
```

12. Instalas UUID
```bash
yarn add uuid
yarn add -D @types/uuid
```
