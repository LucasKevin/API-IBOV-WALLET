### Este é um projeto de uma carteira digital que permite aos usuários monitorar seu saldo atual, investimentos, e fazer uma divisão inteligente do salário para organizar despesas e investimentos. A aplicação também exibe informações do IBOVESPA em tempo real, tornando-se uma ferramenta útil para acompanhamento financeiro.


![{A367999E-9F16-44E9-A911-F8C445E12FA7}](https://github.com/user-attachments/assets/718fa19b-635c-4273-899f-f857a15bea64)

## Funcionalidades

- Saldo Atual: Exibe o saldo disponível na conta do usuário.
- Investimentos: Exibe os valores aplicados em diferentes investimentos, como LCI, Selic e Bolsa de Valores.
- IBOVESPA em Tempo Real: Mostra o valor atual do índice IBOVESPA e um gráfico atualizado.
- Divisão de Salário: Permite ao usuário calcular a distribuição do salário entre despesas essenciais, gastos e investimentos, baseado no valor do salário inserido.

## Tecnologias Utilizadas

- HTML/CSS: Para estrutura e estilização da interface.
- JavaScript: Para manipulação do DOM, cálculo de divisão de salário e atualização de dados em tempo real.
- API de Bolsa de Valores: Para obter informações atualizadas sobre o índice IBOVESPA.
- Highcharts: Biblioteca de gráficos utilizada para exibir o gráfico do IBOVESPA.

## Pré-requisitos
- Node.js e NPM instalados (se o projeto utiliza um backend para servir a aplicação ou consumir APIs)
- Acesso a uma API de bolsa de valores para atualizar o índice IBOVESPA (ex.: Alpha Vantage, Twelve Data ou outra de sua escolha).

## Instalação
Clone o repositório:

- bash
```git clone https://github.com/seu-usuario/carteira-investimentos.git```
```cd carteira-investimentos```

### Instale as dependências:

- bash
```npm install```
Configure a API para a Bolsa de Valores: (https://brapi.dev/docs)

Adicione sua chave da API em um arquivo de configuração (como .env ou config.js, conforme sua implementação).
Inicie a aplicação:

bash
```npm start```
Acesse a aplicação:

Abra o navegador e vá para http://localhost:3000
