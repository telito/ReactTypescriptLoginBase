# ReactTypescriptLoginBase
Base de login, feita com Typescript, React e contextAPI

----------------------------------------------------------------------------------------------------------

## Você precisa ter uma noção de contextAPI para entender oque esta acontecendo neste projeto.

## Você precisa editar os types e util's para passar os seus valores.

O sistema faz toda autenticação das rotas direto na APP, você só precisa passar o  "ProtectedLayout" dentro do element da rota, existe um exemplo no app.tsx

Dentro de context -> services -> api.ts: você encontra a rota base de autenticação principal, ela vai ser usada dentro da util.ts, em context -> AuthProvider -> util.ts

Em index.tsx( context -> AuthProvider -> index.tsx), são criadas as funções que podem ser chamadas nos seus componentes.
  
### para executar o projeto, apos instalar o comando do script é dev.

ex: yarn dev
