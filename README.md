# Pré-requisitos

Este pequeno exemplo foi baseado neste artigo. Não se trata de uma implementação 100% fidedígna, houve algumas adaptações, o que não exclui a necessidade de ler o artigo em que este exemplo se baseia. Antes de iniciar, certifique-se de que node.js esteja instalado.

# Antes de testar a aplicação
Nas seguintes pastas, via command line, execute os passos indicados

post-transport

- cd post-transport
- npm link

home

- cd home
- npm install
- npm link post-transport
- npm start

main-app

- cd container
- npm install
- npm link post-transport
- npm start

Para acessar a aplicação, vá ao browser e abra o endereço http://localhost:3000