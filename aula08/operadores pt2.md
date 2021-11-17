# TIPOS DE OPERADORES


- **ARITMÉTICOS** `-> aula 07`
- **de ATRIBUIÇÃO** `-> aula 07`
- **RELACIONAIS** 
- **LÓGICOS** 
- **TERNÁRIO** 

### OPERADORES RELACIONAIS


- **`>`** -> Maior que
- **`<`** -> Menor que
- **`>=`** -> Maior ou igual
- **`<=`** -> Menor ou igual
- **`==`** -> Igual
- **`!=`** -> Diferente
- **`===`** -> Igual e do mesmo tipo?
- **`!==`** -> Diferente e tipos diferentes?


```javascript
5 > 2 //-> true
7 < 4 //-> false
8 >= 8  //-> true
9 <= 7  //-> false
5 == 5  //-> true
4 != 4  //-> false
```

### OPERADORES LÓGICOS

- **`!`** -> Negação
- **`&&`** -> E (conjunção)
- **`||`** -> OU (disjunção)

```javascript
// NEGAÇÃO -> Operador Unário
!true //-> false
!false //-> true
```

```javascript
// CONJUNÇÃO -> Operador Binário
true && true //-> true
true && false //-> false
false && true //-> false
false && false //-> false
```

```javascript
// DISJUNÇÃO -> Operador Binário
true || true //-> true
true || false //-> true
false || true //-> true
false || false //-> false
```

#### PRECEDÊNCIA DE OPERADORES DE TIPOS DIFERENTE

1. Operadores Aritméticos `()` `**` `/` ...
2. Operadores Relacionais `>` `<` `>=` ... 
3. Operadores Lógicos
    3.1 **`!`**
    3.2 **`&&`**
    3.3 **`||`**

```javascript
// EXEMPLOS
idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salario > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?
```

### OPERADOR TERNÁRIO

Composto pelos caracteres **`?`** e **`:`**
Primeiro vem o teste lógico.
Se o teste for `true` o valor após a interrogação **`?`** será retornado.
Se o teste for `false` o valor após os 'dois pontos' **`:`** será retornado.

```javascript
let media = 8
media >= 7.0 ? "Aprovado" : "Reprovado" //-> Aprovado
media = 5.7
media >= 7.0 ? "Aprovado" : "Reprovado" //-> Reprovado
```