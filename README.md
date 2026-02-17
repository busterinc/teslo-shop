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

13. Crear seed
```bash
nest g res seed --no-spec
```

13. Ejecutar Seed
```bash
http://localhost:3000/api/seed
```

14. Generar nuevo endpoint para los files
```bash
nest g res files --no-spec
```

15. Instalar Tipos de multer para carga de archivos
```bash
yarn add -D @types/multer
```

16. Instalar UUID
```bash
yarn add uuid
```

17. Instalar servidor contenido estático
```bash
yarn add @nestjs/serve-static
```

18. Crear nuevo endpoint para el auth
```bash
nest g res auth --no-spec 
```

19. Encriptar
```bash
yarn add bcrypt
yarn add -D @types/bcrypt
```

20. Se instala passport para JWT
```bash
yarn add @nestjs/passport passport
yarn add @nestjs/jwt passport-jwt
yarn add -D @types/passport-jwt
```

21. Generar un Guard
```bash
nest g gu auth/guards/userRole --no-spec
```

22. Paquete para generar documentación
```bash
yarn add @nestjs/swagger
```



7979711630
7979711630