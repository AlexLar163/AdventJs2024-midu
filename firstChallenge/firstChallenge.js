// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
// pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
// Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
// Tu tarea es escribir una función que reciba una lista de números 
// enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, 
// ordenada en orden ascendente.
function prepareGifts(gifts) {
    var finallyGiftList = gifts.filter(function (gift, index) {
        return gifts.indexOf(gift) === index;
    });
    return finallyGiftList.sort(function (a, b) { return a - b; });
}
var giftList = [1000, 500, 300, 2000, 10000, 7, 500];
var resultList = prepareGifts(giftList);
console.log(resultList);
