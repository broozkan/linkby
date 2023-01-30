const projects = [
    { id: 1, name: 'Option 1', probability: 0.3 },
    { id: 2, name: 'Option 2', probability: 0.5 },
    { id: 3, name: 'Option 3', probability: 0.15 },
    { id: 4, name: 'Option 4', probability: 0.05 }
]

const counts = [0.3, 0.5, 0.15, 0.05]


let itemCallMap = {}
for (let i = 0; i < 500; i++) {
    const goal = Math.random() * 1

    let closest = counts.reduce(function (prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    let calledItem = projects.find(item => item.probability === closest)
    itemCallMap[`ID ${calledItem.id}`] = itemCallMap[`ID ${calledItem.id}`] ? itemCallMap[`ID ${calledItem.id}`] + 1 : 1
}

console.log(itemCallMap);

