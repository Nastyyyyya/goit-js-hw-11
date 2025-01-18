import{S as c,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u="48291953-85546cde0c7bc9cda0531770b";function d(t){const n=`https://pixabay.com/api/?key=${u}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits})}function f(){const t=document.querySelector(".gallery");t.innerHTML=""}function p(t){const n=document.querySelector(".gallery");t.forEach(s=>{const e=`
      <a href="${s.largeImageURL}" class="gallery-item">
        <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" />
        <div class="image-info">
          <p>Likes: <span>${s.likes}</span></p>
          <p>Views: <span>${s.views}</span></p>
          <p>Comments: <span>${s.comments}</span></p>
          <p>Downloads: <span>${s.downloads}</span></p>
        </div>
      </a>
    `;n.insertAdjacentHTML("beforeend",e)}),new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,showCounter:!1}).refresh()}function h(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function m(){const t=document.querySelector(".loading");t.style.display="block"}function a(){const t=document.querySelector(".loading");t.style.display="none"}document.querySelector(".search-form").addEventListener("submit",function(t){t.preventDefault();const n=document.querySelector(".search-input").value.trim();n&&(f(),m(),d(n).then(r=>{a(),p(r)}).catch(r=>{a(),h(),console.error(r)}))});
//# sourceMappingURL=index.js.map
