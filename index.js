/*
const gifts = ["teddy bear", "drone", "doll"];

function giftWrap(jgifts){
  for (let i = 0; i < jgifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
giftWrap(gifts);
*/

function writeCards(personalNames, supriseEvent) {
  const array = [];
  for (let i = 0; i < personalNames.length; i++){
    array.push(`Thank you, ${personalNames[i]}, for the wonderful ${supriseEvent} gift!`);
  };
  return array;
};


function countDown(n){
  while (n >= 0){
    console.log(n);
    n--;
  }
}