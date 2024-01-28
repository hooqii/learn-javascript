// Exercise: Day-3-JavaScript. Will hero survive from the dragon?
// Source: https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function isHeroSurviveLong(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else{
    return false;
  }
} //Function Declarations + If Else Operator

function isHeroSurviveMedium(bullets, dragons) {
  return bullets / 2 >= dragons? true : false;
} //Function Declarations + Ternary Operator

const isHeroSurvive = (bullets, dragons) => bullets / 2 >= dragons; //Function Ekspressions

console.log(isHeroSurviveLong(1, 5));
console.log(isHeroSurviveMedium(10, 5));
console.log(isHeroSurvive(10, 5));
