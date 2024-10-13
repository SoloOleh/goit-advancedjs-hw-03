import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const m="https://pixabay.com/api/",p="46451021-7873f1dc2ed25ef257fef9075";function d(r){const e=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${e}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}let h=new f(".gallery-item a",{captionDelay:250,captionsData:"alt"});function y(r){r.innerHTML=""}function g(r){return r.map(({webformatURL:e,largeImageURL:i,tags:s,likes:t,views:o,comments:n,downloads:u})=>`
      <div class="photo-card gallery-item">
        <a href="${i}">
          <img src="${e}" alt="${s}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${o}</p>
          <p class="info-item"><b>Comments</b> ${n}</p>
          <p class="info-item"><b>Downloads</b> ${u}</p>
        </div>
      </div>
      `).join("")}function b(r,e){r.insertAdjacentHTML("beforeend",e)}function L(){h.refresh()}const S=document.querySelector("#search-form"),l=document.querySelector(".gallery");document.querySelector(".load-more");const c=document.querySelector(".loader");S.addEventListener("submit",$);function $(r){r.preventDefault();const e=r.target.elements.searchQuery.value.trim();if(e===""){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}y(l),q(e)}function q(r){c.style.display="inline-block",d(r).then(e=>{if(e.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=g(e.hits);b(l,i),L()}).catch(e=>{a.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"})}).finally(()=>{c.style.display="none"})}
//# sourceMappingURL=index.js.map
