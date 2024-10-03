import{i as f,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23fff'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.97a.75.75%200%200%201%201.062%200L12%2010.94l3.969-3.97a.75.75%200%201%201%201.062%201.061l-3.97%203.97%203.97%203.968a.753.753%200%200%201%200%201.062.749.749%200%200%201-1.062%200L12%2013.061l-3.969%203.97a.75.75%200%200%201-1.225-.243.751.751%200%200%201%20.163-.819L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",c=document.querySelector(".gallery"),d=()=>{c.innerHTML=""},m=a=>{const r=a.hits.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${t.webformatURL}"
                    data-source="${t.largeImageURL}"
                    alt="${t.tags}"
                />
            </a>
            <div class="gallery-info">
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Likes</span>
                    ${t.likes}
                </p>
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Views</span>
                    ${t.views}
                </p>
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Comments</span>
                    ${t.comments}
                </p>
                <p class="gallery-info-item">
                    <span class="gallery-info-span">Downloads</span>
                    ${t.downloads}
                </p>
            </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r)},h=()=>{c.insertAdjacentHTML("beforeBegin",'<span class="loader"></span>')},g=()=>{document.querySelector(".loader").remove()},n=a=>f.error({title:"",message:a,class:"custom-noty error",position:"topRight",iconUrl:u}),y="46326660-f347cca7b0a8e4257f7060487",L="https://pixabay.com/api/",v=a=>new URLSearchParams({key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),w=a=>fetch(`${L}?${v(a)}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),E=document.querySelector(".form");let i=new p(".gallery a",{captions:!0,captionsData:"alt"});i.on("show.simplelightbox");E.addEventListener("submit",a=>{a.preventDefault(),d(),h();const r=document.querySelector(".search-input"),t=r.value.trim();if(r.value="",!t){n("Input can not be empty!");return}w(t).then(o=>{if(o.hits<1){n("Sorry, there are no images matching your search query. Please try again!");return}m(o),i.refresh()}).catch(o=>n(`Error fetching images: ${o.message}`)).finally(()=>g())});
//# sourceMappingURL=index.js.map
