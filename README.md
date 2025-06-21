# ClimaCheck: Previsão do Tempo em Tempo Real

![Captura de tela da aplicação em modo escuro]("public/print.jpg")

## 📖 Sobre o Projeto

**ClimaCheck** é uma aplicação web moderna e responsiva para consulta da previsão do tempo. Desenvolvido como um projeto de estudo prático, o app permite que os usuários busquem o clima de qualquer cidade do mundo em tempo real, apresentando os resultados em uma interface limpa e elegante.

O projeto foi criado para explorar conceitos fundamentais e avançados do ecossistema React, com foco especial em boas práticas de segurança, componentização e gerenciamento de estado.

[🔗 **Acesse a demonstração ao vivo!**](https://SEU_LINK_AQUI.vercel.app/) _(Substitua pelo link do seu deploy na Vercel)_

---

## ✨ Funcionalidades Principais

-   **Busca em Tempo Real:** Consulta de dados climáticos atualizados de qualquer cidade.
-   **Design Responsivo:** Interface adaptável para uma ótima experiência em desktops e dispositivos móveis.
-   **Modo Escuro (Dark Mode):** Estilização moderna e confortável para os olhos.
-   **Feedback ao Usuário:** Indicadores de carregamento (`loading`) e tratamento de erros para uma UX fluida.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias de ponta:

-   **Next.js 15:** Framework React para produção, com renderização no lado do servidor e do cliente.
-   **React 19:** Biblioteca para construção de interfaces de usuário.
-   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
-   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e moderna.
-   **React Hook Form:** Biblioteca para gerenciamento de formulários de forma performática e eficiente.

---

## 🧠 Conceitos Explorados

Durante o desenvolvimento, diversos conceitos importantes foram aplicados:

-   **Segurança com API Routes:** A aplicação foi desenvolvida com a segurança como prioridade. A chave da API da OpenWeatherMap é armazenada de forma segura em variáveis de ambiente no servidor e consumida através de uma **Rota de API (Route Handler)** do Next.js. Isso garante que a chave **nunca seja exposta** no código do cliente (navegador).

-   **Requisições e Gerenciamento de Estado Assíncrono:**

    -   Utilização da API `fetch` para comunicação com o backend (a Rota de API interna).
    -   Gerenciamento de estado com o Hook `useState` para controlar os dados da resposta, os estados de carregamento (`isLoading`) e as mensagens de erro.

-   **Renderização Condicional:** A interface é totalmente dinâmica e reage ao estado da aplicação, exibindo o formulário, mensagens de carregamento, alertas de erro ou o card de resultados do clima de forma condicional.

-   **Formulários Avançados:** Validação de formulários do lado do cliente implementada de forma eficiente com a biblioteca **React Hook Form**, garantindo uma experiência de usuário sem interrupções e com feedback instantâneo.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

**Pré-requisitos:**

-   Node.js (versão 18 ou superior)
-   npm ou yarn

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**

    -   Crie um arquivo chamado `.env.local` na raiz do projeto.
    -   Adicione sua chave da API da OpenWeatherMap a ele, como no exemplo abaixo:
        ```
        NEXT_PUBLIC_WEATHER_API_KEY=SUA_CHAVE_SECRETA_DA_API_AQUI
        ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

6.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
