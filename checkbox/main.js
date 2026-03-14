const toggles = document.querySelectorAll('.toggle')
const dormir = document.querySelector('#dormir')
const trabalho = document.querySelector('#trabalho')
const social = document.querySelector('#social')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  if (dormir.checked && trabalho.checked && social.checked) {
    if (dormir === theClickedOne) {
      social.checked = false
    }

    if (trabalho === theClickedOne) {
      dormir.checked = false
    }

    if (social === theClickedOne) {
      trabalho.checked = false
    }
  }
}