const cats = [];
cats.push("Milo", "Otis", "Garfield");
function destructivelyAppendCat(name){
  cats.push("Ralph");
}
function destructivelyPrependCat(name){
  cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(){
  cats.shift("Milo");
}
function destructivelyRemoveLastCat(){
  cats.pop("Garfield");
}
function appendCat(name){
  const copyOfCats = cats.slice();
  copyOfCats.push("Broom"); 
  return copyOfCats;
}
function prependCat(name){
  const copyOfCatsTwo = cats.slice();
  copyOfCatsTwo.unshift("Arnold"); 
  return copyOfCatsTwo;
}
function removeFirstCat(){
   const removeFirstCat=cats.slice(1);
   return removeFirstCat;
}
function removeLastCat(){
   const removeLastCat=cats.slice(0,-1);
   return removeLastCat;  
}

