// TIPOS DE OPERADORES

/*
- Aritméticos
- de Atribuição
- Relacionais (Aula 08)
- Lógicos (Aula 08)
- Ternário (Aula 08)
*/

// OPERADORES ARITMÉTICOS

5 + 2 //-> 7
5 - 2 //-> 3
5 * 2 //-> 10
5 / 2 //-> 2.5
5 % 2 //-> 1
5 ** 2 //-> 25

// ORDEM DE PRECEDÊNCIA DE OPERADORES ARITMÉTICOS

/*
1 - PARÊNTESES -> ()
2 - POTÊNCIA -> **
3 - MULTIPLICAÇÃO, DIVISÃO E RESTO -> *  /  %
4 - SOMA E SUBTRAÇÃO -> + -
*/

// OPERADORES DE ATRIBUIÇÃO

    // Atribuição Simples

    var a = 5 + 3 //-> 8
    var b = a % 5 //-> 3
    var c = 5 * b ** 2 //-> 45
    var d = 10 - a / 2 //-> 6
    var e = 6 * 2 / d //-> 2
    var f = b % e + 4 / e //-> 3

    // Auto-atribuição

    var n = 3

    n = n + 4 //-> 7
    n = n - 5 //-> 2
    n = n * 4 //-> 8
    n = n / 2 //-> 4
    n = n ** 2 //-> 16
    n = n % 5 //-> 1

    // Auto-atribuição SIMPLIFICADA

    var y = 3

    y += 4 //-> y = y + 4 
    y -= 5 //-> y = y - 5  
    y *= 4 //-> y = y * 4 
    y /= 2 //-> y = y / 2 
    y **= 2 //-> y = y ** 2 
    y %= 5 //-> y = y % 5

    // Operadores de Incremento

    var z = 5

    z++ //-> z += 1 || z = z + 1
    z-- //-> z -= 1 || z = z - 1