(()=>{"use strict";const e=document.querySelector(".filter-option");let t=window.screen.width;(async()=>{const e=document.querySelector(".row"),t=document.querySelector(".filter-option");let o=[];await fetch("https://test-a02e8-default-rtdb.firebaseio.com/db.json").then((e=>e.json())).then((n=>{let i=n;console.log(i);const r=()=>{document.querySelectorAll(".hero p").forEach((e=>{let t=e.textContent.replace(/undefined/g,"~");return e.textContent=t}))},s=t=>{const o=t.actors,n=t.citizenship,i=t.birthDay,r=t.deathDay,s=t.gender,a=t.movies,c=t.name,d=t.photo,l=t.species,p=t.status,h=t.realName;let m=document.createElement("div");m.classList.add("hero"),m.innerHTML=`<div class='hero-photo' style="background: url('${d}') center center no-repeat;"></div><div class='hero-name'><p>Актер: ${o}</p> </div><div class='hero-realname'><p>Настоящее имя: ${h}</p> </div><div class='hero-citizenship'><p>Гражданство: ${n}</p> </div><div class='hero-birthday'><p>Год рождения: ${i}</p> </div><div class='hero-deathDay'><p>Год смерти: ${r} </p></div><div class='hero-gender'><p>Пол: ${s}</p> </div><div class='hero-movies'><p>Фильмография: ${a}</p></div><div class='hero-name'><p>Герои: ${c}</p></div><div class='hero-species'><p>Тип: ${l}</p> </div><div class='hero-status'><p>Статус: ${p}</p.> </div>`,e.append(m)};i.forEach((e=>{s(e),r()})),(()=>{i.forEach((e=>{e.hasOwnProperty("movies")&&e.movies.forEach((e=>{o.push(e)}))}));const e=o.reduce(((e,t)=>(e.hasOwnProperty(t)?e[t]++:e[t]=1,e)),{});for(let o in e){let n=document.createElement("div"),i=document.createElement("div");i.classList.add("movie-name"),i.textContent=o,n.append(i);let r=document.createElement("div");r.classList.add("quantity"),r.innerText=e[o],n.append(r),t.append(n)}})(),t.querySelectorAll(".movie-name").forEach((t=>{t.addEventListener("click",(t=>{let o=t.target.textContent;console.log(o),e.innerHTML="",i.forEach((e=>{e.hasOwnProperty("movies")&&e.movies.forEach((t=>{if(o===t){let t=i.indexOf(e);fetch(`https://test-a02e8-default-rtdb.firebaseio.com/db/${t}.json`).then((e=>e.json())).then((()=>{s(e),r()}))}}))}))}))}))}))})(),document.addEventListener("click",(o=>{o.target.matches("h3")?(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function i(r){let s=(r-n)/o;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(i)}))})({duration:700,timing:e=>e,draw(o){e.style.left=t<=1400?"0%":365*o+"px",e.style.opacity=o}}):(e.style.left="",e.style.opacity=0)}))})();