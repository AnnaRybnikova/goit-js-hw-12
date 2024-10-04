import{i as h,a as g,S as L}from"./assets/vendor-Dp7Ig4E2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23fff'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.97a.75.75%200%200%201%201.062%200L12%2010.94l3.969-3.97a.75.75%200%201%201%201.062%201.061l-3.97%203.97%203.97%203.968a.753.753%200%200%201%200%201.062.749.749%200%200%201-1.062%200L12%2013.061l-3.969%203.97a.75.75%200%200%201-1.225-.243.751.751%200%200%201%20.163-.819L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%23fff'%20d='M12%2024a3%203%200%200%200%203-3H9a3%203%200%200%200%203%203Zm0-21.123-1.195.242A6.003%206.003%200%200%200%206%209c0%20.942-.201%203.296-.689%205.613-.24%201.15-.564%202.35-.994%203.387h15.366c-.43-1.038-.753-2.235-.994-3.387C18.2%2012.296%2018%209.943%2018%209a6.003%206.003%200%200%200-4.805-5.88L12%202.877ZM21.33%2018c.335.67.722%201.202%201.17%201.5h-21c.448-.298.836-.83%201.17-1.5%201.35-2.7%201.83-7.68%201.83-9%200-3.63%202.58-6.66%206.008-7.351a1.5%201.5%200%201%201%202.985%200A7.503%207.503%200%200%201%2019.5%209c0%201.32.48%206.3%201.83%209Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",c=document.querySelector(".gallery"),r=document.querySelector(".more-btn"),b=()=>{c.innerHTML=""},P=e=>{const s=e.map(t=>`
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
        </li>`).join("");c.insertAdjacentHTML("beforeEnd",s)},u=()=>{r.insertAdjacentHTML("afterEnd",'<span class="loader"></span>')},m=()=>{document.querySelector(".loader").remove()},M=e=>{e.classList.remove("visually-hidden")},d=e=>{e.classList.add("visually-hidden")},S=()=>{const e=c.firstElementChild.getBoundingClientRect().height;console.log(e),window.scrollBy({top:e*2,behavior:"smooth"})},f=e=>h.error({title:"",message:e,class:"custom-noty error",position:"topRight",iconUrl:w}),I=e=>h.info({title:"",message:e,class:"custom-noty info",position:"topRight",iconUrl:E}),R="46326660-f347cca7b0a8e4257f7060487";g.defaults.baseURL="https://pixabay.com/api/";const $=(e,s)=>new URLSearchParams({key:R,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}),A=async(e,s=1)=>await g.get(`?${$(e,s)}`);let n="",p=1;const H=document.querySelector(".form");let y=new L(".gallery a",{captions:!0,captionsData:"alt"});y.on("show.simplelightbox");H.addEventListener("submit",async e=>U(e));r.addEventListener("click",async()=>q());async function U(e){e.preventDefault(),b(),d(r),u();const s=document.querySelector(".search-input");if(n=s.value.trim(),s.value="",!n){f("Input can not be empty!"),m();return}v(n)}async function q(){d(r),u(),p+=1,await v(n,p)}async function v(e,s){return await A(e,s).then(t=>{const l=t.data.hits;if(l.length<1){f("Sorry, there are no images matching your search query. Please try again!");return}P(l),c.children.length<t.data.totalHits?M(r):(I("We're sorry, but you've reached the end of search results."),d(r)),y.refresh(),S()}).catch(t=>f(`Error fetching images: ${t.message}`)).finally(()=>m())}
//# sourceMappingURL=index.js.map
