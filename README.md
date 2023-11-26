# Projeto Restaurante Sentinelas do Mar

Este projeto está em produção, alinhado com as necessidades operacionais da empresa cliente. Algumas funcionalidades estão sendo continuamente desenvolvidas e atualizadas conforme necessário.

A aba relatorio esta em desenvolvimento visual, irá mostrar dados estatisticos sobre os items mais pedidos, quantidade de produtos gastos, entre outros.

## Interface "Clientes"

Na interface "Clientes", são listadas todas as mesas com comandas abertas.

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/6ea7106a-0204-41bc-9010-691c01943111" width="300" height="400">

## Abertura de Comandas

Para abrir uma comanda para um cliente que ainda não tem uma comanda aberta, basta filtrar com o nome desejado ou clicar em "+" para criar uma nova comanda.

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/e09e8988-f61f-43a3-b721-9f8fef4d7bc0" alt="ComandOnline" width="300" height="400">

## Seleção de Itens

Ao escolher pratos ou bebidas, é possível filtrar por nome ou navegar pelos grupos. Após a seleção, clique em "CARRINHO" para revisar o pedido.

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/f46320f6-86e8-40e0-bdea-0b0f1527889a" alt="ComandOnline" width="300" height="400">

## Revisão do Pedido

O garçom revisa os itens selecionados e, se necessário, pode adicionar observações e itens adicionais. Após a revisão, basta enviar o pedido para que os pratos sejam impressos na cozinha; as bebidas, que não exigem preparo, não serão impressas.

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/8f4d149f-e638-4f62-aee6-45e28b86eb60" alt="ComandOnline" width="300" height="400">
<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/921ebe1f-2492-4513-914c-f1630cf1a746" width="300" height="400">

## Novamente na aba Clientes

Na aba "CLIENTES", é possível fazer novos pedidos ou visualizar a conta do cliente. basta clicar em cima da mesa para visualizar as opções.

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/22a80343-26b0-4a7f-95e7-a8a171a0be0a" width="300" height="400">
<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/2e3f8232-43d5-4127-a5d3-8787167661d9" width="300" height="400">

## Gerenciamento da Conta

Na aba "CONTA", é possível visualizar e gerenciar os itens em preparo pela cozinha. Edite, exclua ou marque itens como enviados ao cliente. Para marcar como enviado, basta clicar 2 vezes em cima do item, ele irá pro final da lista e mudará de cor. 

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/f6f15976-8e79-40c0-9c5a-45db4661ae6e" width="300" height="400">

## Finalização da Comanda

Após a entrega dos itens ao cliente, clique duas vezes para marcá-los como entregues. Para finalizar a comanda, clique em "FINALIZAR COMANDA" e insira os valores pagos em dinheiro, pix, débito e/ou crédito.

<img src="https://github.com/FilipiPNeves/comandaOnlineAngular-firebase-Auth-Firestore-/assets/107006848/d942b48d-6895-417f-aff7-59e463a61ef8" width="300" height="400">





Este projeto foi desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) na versão 15.1.5, integrado à poderosa plataforma Firebase para oferecer recursos robustos, incluindo Firestore para banco de dados em tempo real, Autenticação para gerenciamento de usuários e Hosting para hospedagem escalável na nuvem.

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute `ng serve`. Acesse `http://localhost:4200/` para visualizar o aplicativo, que será recarregado automaticamente após qualquer modificação nos arquivos fonte.

## Geração de Código

Utilize `ng generate component component-name` para gerar novos componentes. Outras opções incluem `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Testes Unitários

Execute `ng test` para realizar testes unitários usando o [Karma](https://karma-runner.github.io).

## Testes End-to-End

Execute `ng e2e` para realizar testes end-to-end em uma plataforma de sua escolha. Certifique-se de adicionar previamente um pacote que implementa capacidades de teste end-to-end.

## Integração Firebase

Este projeto se beneficia da integração com a plataforma Firebase, oferecendo recursos adicionais:

- **Firestore:** Banco de dados NoSQL em tempo real, proporcionando uma base de dados dinâmica e eficiente.
- **Autenticação:** Mecanismo robusto para autenticação de usuários, garantindo a segurança e personalização das interações.
- **Hospedagem (Hosting):** Serviço de hospedagem na nuvem Firebase, proporcionando escalabilidade e confiabilidade.

Para obter assistência adicional com o Angular CLI, utilize `ng help` ou consulte a [Angular CLI Overview and Command Reference](https://angular.io/cli).
