# Routes

- Rota pública — sem middleware
- Rota autenticada — só authMiddleware (verifica se o token é válido)
- Rota de admin — authMiddleware + authorizationAdmin (autenticado e com role ADMIN)