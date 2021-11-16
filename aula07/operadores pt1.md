# TIPOS DE OPERADORES


- **ARITMÉTICOS**
- **de ATRIBUIÇÃO**
- **RELACIONAIS** `-> aula 08`
- **LÓGICOS** `-> aula 08`
- **TERNÁRIO** `-> aula 08`

### OPERADORES ARITMÉTICOS

```javascript
5 + 2 //-> 7 [SOMA]
5 - 2 //-> 3 [SUBTRAÇÃO]
5 * 2 //-> 10 [MULTIPLICAÇÃO]
5 / 2 //-> 2.5 [DIVISÃO]
5 % 2 //-> 1 [RESTO]
5 ** 2 //-> 25 [POTÊNCIA]
```

#### ORDEM DE PRECEDÊNCIA DE OPERADORES ARITMÉTICOS


1. Parênteses -> `()`
2. Potência -> `**`
3. Multiplicação, divisão e resto -> `*` `/` `%`
4. Soma e subtração -> `+` `-`


### OPERADORES DE ATRIBUIÇÃO

##### Atribuição Simples

```javascript
var a = 5 + 3 //-> 8
var b = a % 5 //-> 3
var c = 5 * b ** 2 //-> 45
var d = 10 - a / 2 //-> 6
var e = 6 * 2 / d //-> 2
var f = b % e + 4 / e //-> 3
```

##### Auto-atribuição

```javascript
var n = 3

n = n + 4 //-> 7
n = n - 5 //-> 2
n = n * 4 //-> 8
n = n / 2 //-> 4
n = n ** 2 //-> 16
n = n % 5 //-> 1
```

##### Auto-atribuição SIMPLIFICADA

```javascript
var y = 3

y += 4 //-> y = y + 4 
y -= 5 //-> y = y - 5  
y *= 4 //-> y = y * 4 
y /= 2 //-> y = y / 2 
y **= 2 //-> y = y ** 2 
y %= 5 //-> y = y % 5
```

##### Operadores de Incremento

```javascript
var z = 5

z++ //-> z += 1 || z = z + 1
z-- //-> z -= 1 || z = z - 1
```
