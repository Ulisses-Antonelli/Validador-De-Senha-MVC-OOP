# Validador de Senha - Implementação MVC e Orientada a Objetos

Este repositório contém um aplicativo simples de validação de senha implementado utilizando a arquitetura MVC (Model-View-Controller) e escrito em JavaScript com uma abordagem orientada a objetos. O aplicativo permite que os usuários insiram uma senha e verifiquem se ela atende a determinados critérios de segurança.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white)](https://www.javascript.com/)
[![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## Arquitetura MVC

O aplicativo segue o padrão arquitetural MVC (Model-View-Controller) para manter uma clara separação de responsabilidades e melhorar a organização do código. Aqui está uma breve visão geral de cada componente:

### Model (Modelo)

O Model representa os dados e a lógica de negócio da aplicação. Neste projeto, a classe `ValidatorModel` armazena a senha inserida pelo usuário.

### View (Visualização)

A View é responsável por apresentar a interface do usuário aos usuários e exibir os resultados da validação. Neste projeto, a classe `ValidatorView` lida com os elementos do DOM, como a caixa de entrada de senha e o botão de validação.

### Controller (Controlador)

O Controller atua como intermediário entre o Model e a View, tratando a interação do usuário e atualizando o Model de acordo. Neste projeto, a classe `ValidatorController` vincula manipuladores de eventos ao botão de validação e atualiza a View com base nos resultados da validação.

### Classe Erro (Classe de Tratamento de Erros)

A classe `ValidateErros` encapsula a lógica para validar a senha de acordo com os critérios especificados. Ela verifica se a senha atende aos requisitos de comprimento, contém pelo menos um dígito, pelo menos uma letra maiúscula, pelo menos um caractere especial e consiste apenas de caracteres alfanuméricos ou caracteres especiais.

## Como Começar

Para executar o Validador de Senha localmente, siga os seguintes passos:

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` localizado na pasta `public` em seu navegador da web.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir issues e enviar pull requests.

---

O objetivo de implementar o Validador de Senha com a arquitetura MVC e a abordagem orientada a objetos é meramente um exercício de aprendizado. O projeto foi desenvolvido com o intuito de compreender melhor os princípios da arquitetura MVC e da programação orientada a objetos em JavaScript, bem como as técnicas de implementação de um validador de senha.
