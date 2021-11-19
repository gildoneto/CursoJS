# DOCUMENT OBJECT MODEL

**Modelo de Objetos para Documentos:** um conjunto de objetos dentro do navegador que dá acesso aos componentes internos de um site.

### Árvore DOM

<img src="https://raw.githubusercontent.com/gildoneto/CursoJS/90c74c5286864287cadbb2bd0039d0cc96669e33/aula09/arvoreDOM.png" alt="Árvore DOM" width="400" />

- **window**: Raíz do objeto DOM
    - **location**: URL
    - **history**: salva a navegação
    - **document**: site
        - **head**
            - meta
            - title
        - **body**
            - h1
            - p
                - strong
            - div

### Selecionando Elementos

Podemos selecionar/acessar elementos para navegar na Árvore DOM de várias formas.

#### Por Marca(tag):
```HTML
<p>Aqui vai o resultado</p>
<p>Aprendendo a usar o <strong>DOM</strong> em JavaScript.</p>
```
```javascript
var p1 = document.getElementsByTagName('p')[0]
document.write(p1.innerText) //-> Aqui vai o resultado
document.write(p1.innerHTML) //-> <p>Aqui vai o resultado</p>
p1.style.color = 'blue'
```
#### Por ID:
```HTML
<div id="msg">Clique Aqui</div>
```
```javascript
var d1 = document.getElementById('msg')
d1.style.background = 'green'
d1.innerText = 'Estou aguardando...'
```
#### Por Nome:
```HTML
<div name="msg">Clique Aqui</div>
```
```javascript
var d2 = document.getElementsByName('msg')[0]
d2.innerText = 'Olá!'
```
#### Por Classe:
```HTML
<div class="msg">Clique Aqui</div>
```
```javascript
var d3 = document.getElementsByClassName('msg')[0]
d3.innerText = 'Olá!'
```
#### Por Seletor (mais recente):
```HTML
<div name="msg">Clique Aqui</div>
```
```javascript
var divMsg = document.querySelector('div#msg') //sintaxe do CSS
divMsg.style.color = 'blue'
querySelectorAll()
```

##### OBS

Toda classe em CSS é representada por ponto `.`
Todo ID em CSS é representado por hash `#`