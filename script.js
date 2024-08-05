//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckyText = document.querySelector(".screen2 p")
const openCoockie = document.querySelector(".openCookie")
const btnReset = document.querySelector("#btnReset")
const luckyTextList = [
  "Agora é a hora de surpreender aqueles que duvidaram de você.",
  "Valorize as pequenas conquistas!",
  "Você nunca será velho demais para sonhar um novo sonho.",
  "Avante! Para começar, você só precisa dar o primeiro passo.",
  "Para certas coisas, não basta querer, é preciso batalhar.",
  "Abandone suas dores e não a esperança em dias melhores.",
  "Lutar sempre, vencer às vezes, desistir nunca.",
  "Que os dias bons se tornem rotina e os ruins se tornem raros.",
  "Cada dificuldade ultrapassada te faz mais forte.",
  "Seus medos morrerão de fome se você alimentar a sua motivação.",
]

//eventos
openCoockie.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

//funções
function handleClick() {
  toggle()
  const random = Math.floor(Math.random() * luckyTextList.length)
  luckyText.innerText = luckyTextList[random]
}

function handleResetClick() {
  toggle()
}

function enterReset(e) {
  if(e.key == "Enter" && screen1.classList.contains('hiden')) {
    handleResetClick()
  }
}

function toggle() {
  screen1.classList.toggle("hiden")
  screen2.classList.toggle("hiden")
}