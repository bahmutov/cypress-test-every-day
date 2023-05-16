const ul = document.getElementById('fruit')
const fruits = ['Apples 655', 'Grapes 1001', 'Pears 499']
const shuffled = Cypress._.shuffle(fruits)
ul.innerHTML = shuffled.map((fruit) => `<li>${fruit}</li>`).join('\n')
