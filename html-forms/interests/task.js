const interestsList = Array.from(document.querySelectorAll('.interests_active'));
const mainInterests = interestsList.map((int) => int.closest('li').firstElementChild.firstElementChild);
const subInterests = mainInterests.map((int) => int.closest('li.interest').lastElementChild.querySelectorAll('input'));

mainInterests.forEach((int) => int.addEventListener('change', (e) => {
  let subInt = Array.from(e.target.closest('li.interest').lastElementChild.querySelectorAll('input'));
  subInt.forEach((input) => input.checked = e.target.checked);
}));

subInterests.forEach((intGroup) => {
  intGroup.forEach((int) => int.addEventListener('change', (e) => {
    let mainInt = int.closest('ul.interests').previousElementSibling.querySelector('input');

    Array.from(intGroup).every((int) => int.checked === true) ?
    mainInt.checked = true : mainInt.checked = false;
  }));
});