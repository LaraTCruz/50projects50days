const header=document.getElementById('header')
const title=document.getElementById('title')
const excerpt=document.getElementById('excerpt')
const profile_img=document.getElementById('profile_img')
const name=document.getElementById('name')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_texts=document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
  header.innerHTML='<img src="https://images.unsplash.com/photo-1669162381695-5cc08d33159b?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">'
  title.innerHTML='Lorem ipsum dolor sit amet.'
  excerpt.innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quia sint corrupti. '
  profile_img.innerHTML='<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="">'
  name.innerHTML='Nome Sobrenome'
  date.innerHTML='Fev 13, 2026'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}