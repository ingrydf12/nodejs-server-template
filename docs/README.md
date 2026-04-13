# LIBS

express-session @types/express-session
- Cookies e persistência de dados.

zod
- Validação de dados com Typescript.

Winston
- Sistema de logging mais complexo para depuração e debug.

jsonwebtoken
- Handle signing, verifying, and decoding tokens to secure API routes

# Structure

```
src
 ┣ config
 ┃ ┗ logger.ts # Configuração do sistema de logging usando o Winston
 ┣ controllers
 ┃ ┗ .gitkeep
 ┣ database
 ┃ ┣ prisma.ts # Inicialização e export do prisma para conexão
 ┃ ┗ schema.prisma # Vinculado ao banco usando PrismaORM
 ┣ generated # Geração do cliente Prisma
 ┃ ┗ prisma
 ┣ middleware
 ┃ ┣ authMiddleware.ts
 ┃ ┗ authorizationAdmin.ts
 ┣ models # Domínios da aplicação
 ┃ ┗ user.ts # Exemplo para usuário
 ┣ routes
 ┃ ┣ router.ts # Rotas da aplicação
 ┃ ┗ userRoutes.ts
 ┣ types
 ┃ ┗ authRequest.ts # Tipos específicos para requests, ex: Autenticação
 ┣ utils
 ┃ ┗ generateToken.ts # Geração do token JWT
 ┗ server.ts
 ```