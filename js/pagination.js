import{mediaQuery}from"./menu.js";let paginationItem=document.querySelectorAll(".pagination__item"),paginationBtn=document.querySelectorAll(".pagination__button"),btnShow=()=>{paginationBtn.forEach((i=>{i.style.visibility="inherit"}))},btnClick=(i,t)=>{btnShow(),paginationItem.forEach((n=>{n.classList.contains("pagination__item--current")&&(2==n.id&&(n.classList.remove("pagination__item--current"),paginationItem[Number(n.id)-t].classList.add("pagination__item--current"),btnShow(),paginationBtn[i].style.visibility="hidden"),n.classList.remove("pagination__item--current"),paginationItem[Number(n.id)-t].classList.add("pagination__item--current"))}))};paginationItem.forEach((i=>{i.addEventListener("click",(()=>{paginationItem.forEach((i=>i.classList.remove("pagination__item--current"))),i.classList.add("pagination__item--current"),mediaQuery.matches&&(1==i.id?(btnShow(),paginationBtn[0].style.visibility="hidden"):3==i.id?(btnShow(),paginationBtn[1].style.visibility="hidden"):btnShow())}))})),paginationBtn[0].addEventListener("click",(()=>{btnClick(0,2)})),paginationBtn[1].addEventListener("click",(()=>{btnClick(1,0)}));