// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const caty =[...cats];
    caty.push(name);
    console.log(caty);
    return caty;
}
function prependCat(name)
{
    const caty =[...cats];
    caty.unshift(name);
    console.log(caty);
    return caty;
}
function removeLastCat()
{
    const yellow=[...cats];
    yellow.pop();
    console.log(yellow);
    return yellow;

    
}
function removeFirstCat()
{
    const hello =[...cats];
    hello.shift();
    return hello;

}