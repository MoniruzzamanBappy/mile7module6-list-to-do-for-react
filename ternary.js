const money = 85;
let food;
if (money > 100) {
    food = 'biriani'
}
else {
    food = 'cha biskut'
}

console.log(food);

// ternery system

const food1 = money > 100 ? 'biriani' : 'cha biskut'

console.log(food1);


// ternary shortcut
let isActive = true;
const showResult = () => console.log('show result');
const hideResult = () => console.log('hide result');

isActive ? showResult() : hideResult();
isActive && showResult()


