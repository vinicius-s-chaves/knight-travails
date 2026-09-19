function findShortestPath(start, end) {
    const queue = [{ pos: start, parent: null }]
    const visited = new Set()
    const path = new Array()

    while(queue.length > 0) {
        let curr = queue[0]
        visited.add(curr.toString())
        if(curr.pos.toString() === end.toString()) {
            while(curr !== null) {
                path.unshift(curr.pos)
                curr = curr.parent
            }
            return path
        } else {
            let currMoves = findAllMoves(curr.pos)
            currMoves.forEach(move => {
                if(!visited.has(move.toString())) {
                    queue.push({ pos: move, parent: curr })
                }
            })
        }
        queue.shift()
    }
}

function findAllMoves(position, visited) {
    if(!Array.isArray(position) || position.length !== 2) return

    const allMoves = new Array()
    const [column, row] = position

    allMoves.push([column + 2, row - 1])
    allMoves.push([column + 2, row + 1])
    allMoves.push([column - 2, row + 1])
    allMoves.push([column - 2, row - 1])
    allMoves.push([column + 1, row + 2])
    allMoves.push([column + 1, row - 2])
    allMoves.push([column - 1, row + 2])
    allMoves.push([column - 1, row - 2])

    return allMoves.filter(move => {
        return (
            move[0] >= 0 &&
            move[0] <= 7 &&
            move[1] >= 0 &&
            move[1] <= 7
        )
    })
}

function knightTravails(start, end) {
    const path = findShortestPath(start, end)

    console.log(`You made it in ${path.length - 1} moves! Here's your path:`)
    path.forEach(position => console.log(position))
}
