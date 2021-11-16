## Aula 05 - Variáveis e Tipos Primitivos

### Variáveis

Variáveis servem para guardarmos dados de vários tipos. Javascript é uma liguagem fracamente tipada, ou seja, não é necessário definir o tipo quando declaramos uma variável.
O que define o tipo de uma variável é o valor atribuído a ela.
Uma variável declarada com as palavras reservadas `let` ou `var`, pode receber qualquer outro valor de qualquer tipo a qualquer momento, sempre respeitando o escopo.

### Identificadores

- Podem começar com `letra`, `$` ou `_`
- Não podem começar com números
- É possível usar `letras` ou `números`
- É possível usar `acentos` e `símbolos`
- Não podem conter `espaços`
- Não podem ser `palavras reservadas` 

**Dicas:**

- `Maiúsculas` e `minúsculas` fazem a diferença
- Tente escolher `nomes coerentes` para as variáveis

### Tipos de Dados

|     TIPO    |        SUB TIPOS         |          DEFINIÇÃO         |     EXEMPLOS   |
| ----------- | ------------------------ | -------------------------  | -------------- |
|   `number`  | `Infinity`<br> `NaN` | Números inteiros e reais.      | `8` `4.5` `1637` `32.764736`<br> `Infinity` `NaN`   |
|   `string`  |         `-`          | Qualquer sequência de caracteres que esteja<br>entre aspas simples `''`,<br>entre aspas duplas `""` ou<br> crases ` `` ` | `'Joao'` `"Carteira"` <code>&#96;Programa&#96;</code>  |
|  `boolean`  |         `-`          | Valor lógico, só pode ser verdadeiro ou falso.   | `false` `true`   |
|    `null`   |         `-`          | Valor nulo   | `let idade = null`   |
| `undefined` |         `-`          | Valor ainda não definido   | `let idade`    |
|   `object`  |  `Array`<br>`null`   | -----   | -----   |
|  `function` |         `-`          | -----   | -----   |

**Dica:** Use o operador `type of` antes de uma variável ou valor para saber o tipo.

### Comentários

Dentro de um documento HTML, podemos ter 3 tipos de linguagens num mesmo documento. Por isso é importante ter em mente que a forma de comentar em cada uma das 3 linguagens difere um pouco uma da outra.

| Linguagem       |  Comentário de uma linha  |          Comentário de múltiplas linhas              |
| --------------- | ------------------------- | ---------------------------------------------------- |
|  **HTML**       | `<!-- <h1>Título</h1> -->`| `<!-- <h1>Título</h1>`<br> `<p>Parágrafo</p> -->`    |
|  **CSS**        |  `/* color: white; */`    | `/* color: white;`<br>  `background: black; */`      |
|  **JavaScript** |  `// let num = 1`         | `/* let num = 1`<br>`console.log(num) */`            |
