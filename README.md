# Exercícios JavaScript - Formação Desenvolvedor Full Stack Júnior

Este repositório contém uma coleção de exercícios em JavaScript para praticar lógica de programação e conceitos fundamentais da linguagem. Cada exercício aborda um problema específico e alguns utilizam a biblioteca `prompt-sync` para entrada de dados no terminal.

## Pré-requisitos

* **Node.js**: instalado em sua máquina.
* **Biblioteca `prompt-sync`**: instalada. Caso não esteja instalada, execute:
    ```bash
    npm install prompt-sync
    ```

## Exercícios

### Seção 1: Estruturas de Controle Avançadas

1.  [cite_start]**Validação de Datas** 
    * Crie a função `ehDataValida (dia, mes, ano)` que retorne `true` se os valores formarem uma data real (meses de 28-31 dias, ano bissexto para fevereiro) e `false` caso contrário.
    * **Arquivo:** `Exercicios/E1.js`

2.  [cite_start]**Jogo de Adivinhação** 
    * [cite_start]Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário para adivinhar. 
    * [cite_start]Use `while` para repetir até acertar, contando tentativas e exibindo "mais alto" ou "mais baixo" a cada palpite errado. 
    * **Arquivo:** `Exercicios/E2.js`

3.  [cite_start]**Palavras Únicas** 
    * [cite_start]Dada uma string (ex.: "olá olá mundo mundo"), use `if/else` e `for` para extrair todas as palavras únicas e exibi-las em um array. 
    * **Arquivo:** `Exercicios/E3.js`

### Seção 2: Funções e Recursão

4.  [cite_start]**Fatorial Recursivo** 
    * [cite_start]Implemente `function fatorial(n)` de forma recursiva; 
    * [cite_start]Trate $n<0$ lançando um `Error`, e $n===0$ retornando 1. 
    * **Arquivo:** `Exercicios/E4.js`

5.  [cite_start]**Debounce** 
    * [cite_start]Crie `function debounce(fn, delay)` que receba uma função `fn` e um `delay` em `ms`, retornando uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo. 
    * **Arquivo:** `Exercicios/E5.JS`

6.  [cite_start]**Memoization** 
    * [cite_start]Implemente `function memoize(fn)` que armazene em cache chamadas anteriores de `fn` (por argumentos), retornando resultados instantâneos em repetidas invocações. 
    * **Arquivo:** `Exercicios/E6.JS`

### Seção 3: Arrays e Objetos Complexos

7.  [cite_start]**Mapeamento e Ordenação** 
    * [cite_start]Dado um array `produtos = [{ nome, preco }, ...]`, crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando `map`, `sort`. 
    * **Arquivo:** `Exercicios/E7.JS`

8.  [cite_start]**Agrupamento por Propriedade** 
    * [cite_start]Em `vendas = [{ cliente, total }, ...]`, use `reduce` para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus `total`. 
    * **Arquivo:** `Exercicios/E8.JS`

9.  [cite_start]**Conversão Entre Formatos** 
    * Escreva duas funções:
        * [cite_start]`paresParaObjeto (pares)`: recebe um array de pares `[ [chave, valor], ...]` e retorna o objeto equivalente. 
        * [cite_start]`objetoParaPares(obj)`: faz o inverso, retornando um array de pares. 
    * **Arquivo:** `Exercicios/E9.JS`

## Como Executar

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/exercicios-js.git](https://github.com/seu-usuario/exercicios-js.git)
    cd exercicios-js
    ```
    *(Note: Replace `seu-usuario` with your actual GitHub username if you create a repository with this content.)*

2.  **Execute o exercício desejado:**
    * Para o exercício 1 (Par/Ímpar):
        ```bash
        node Exercicios/E1.js
        ```
    * Para o exercício 2 (Classificação por idade):
        ```bash
        node Exercicios/E2.js
        ```
    * ...e assim por diante para os demais exercícios.

## Contribuição

Contribuições são bem-vindas!