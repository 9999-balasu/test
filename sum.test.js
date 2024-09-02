
const sum = require('./sum');


test('sum of 1,2 is equal to 3',()=>{
   expect(sum.add(1,2)).toBe(3);

})

test('sum of 1,2 is equal to 3',()=>{
    expect(sum.addd(1,2)).toBe(3);
 
 })

 test('sub of 1,2 is equal to 3',()=>{
    expect(sum.sub(2,2)).toBe(0);
 
 })

 test('mul of 5,2 is equal to 10',()=>{
    expect(sum.mul(5,2)).toBe(10);
 
 })

