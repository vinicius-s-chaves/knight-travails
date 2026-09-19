# Knight Travails

Um algoritmo em JavaScript que encontra o caminho mais curto que um cavalo pode percorrer em um tabuleiro de xadrez 8×8.

## Tech Stack

* **Linguagem**: JavaScript (ES6)
* **Runtime**: Node.js
* **Algoritmo**: Breadth-First Search (BFS)

## Estrutura do projeto

```text
knight-travails/
├── knightTravails.js
└── README.md
```

## Pré-requisitos

* Node.js (v18+)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/vinicius-s-chaves/knight-travails.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd knight-travails
   ```

## Como usar

O algoritmo recebe duas posições do tabuleiro no formato `[coluna, linha]`, utilizando valores de `0` a `7`.

Para encontrar o caminho entre duas posições:

```javascript
knightTravails([0, 0], [7, 7])
```

Execute o arquivo com:

```bash
node knightTravails.js
```

O resultado será exibido no terminal:

```text
You made it in 6 moves! Here's your path:
[ 0, 0 ]
[ 2, 1 ]
[ 4, 2 ]
[ 6, 3 ]
[ 5, 5 ]
[ 7, 6 ]
[ 7, 7 ]
```

## Funcionamento

O projeto utiliza o algoritmo **Breadth-First Search (BFS)** para encontrar o caminho mais curto.

Como todos os movimentos do cavalo possuem o mesmo custo, a BFS garante que a primeira vez que o destino for encontrado será através de um caminho com o menor número possível de movimentos.

### Movimentos do cavalo

A partir de uma posição, o cavalo pode realizar até 8 movimentos:

```text
(+2, -1)    (+2, +1)
(-2, +1)    (-2, -1)
(+1, +2)    (+1, -2)
(-1, +2)    (-1, -2)
```

Movimentos que ultrapassam os limites do tabuleiro são descartados.
