(()=>{var e={};e.id=953,e.ids=[953],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},8055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>p});var a=r(260),o=r(8203),s=r(5155),n=r.n(s),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let p=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7447)),"C:\\Users\\Akhil\\Desktop\\New folder\\testfull\\app\\blog\\[slug]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1777)),"C:\\Users\\Akhil\\Desktop\\New folder\\testfull\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Akhil\\Desktop\\New folder\\testfull\\app\\blog\\[slug]\\page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},5214:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1066,23))},7985:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1902,23))},700:e=>{e.exports={postsSection:"page_postsSection__87KaI",sectionTitle:"page_sectionTitle__r8NHN",gridContainer:"page_gridContainer__I1dDB",postCard:"page_postCard__o3fP6",postImageWrapper:"page_postImageWrapper__WA6_6",postImage:"page_postImage__A8r8A",postContent:"page_postContent__QiESc",postTitle:"page_postTitle__HOeqJ",postDescription:"page_postDescription__i3kq1",postMeta:"page_postMeta__OWG1W",imageContainer:"page_imageContainer__Ak_VR",postDetails:"page_postDetails__hltAn",postImage_blg:"page_postImage_blg__aBwH2",contentText:"page_contentText__9XFTS"}},1673:(e,t,r)=>{"use strict";r.d(t,{Gm:()=>s,PN:()=>o,Vc:()=>n});let a="http://localhost:1337/api",o=async()=>{try{let e=await fetch(`${a}/home-page`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error(`Failed to fetch homepage data: ${e.statusText}`);return await e.json()}catch(e){throw console.error("Error fetching homepage data:",e),Error("Could not load homepage data.")}},s=async()=>{try{let e=await fetch(`${a}/posts?populate=image`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error(`Failed to fetch posts: ${e.statusText}`);return await e.json()}catch(e){throw console.error("Error fetching posts:",e),Error("Could not load posts data.")}},n=async e=>{try{let t=await fetch(`${a}/posts?filters[slug][$eq]=${e}&populate=image`);if(!t.ok)throw Error("Failed to fetch post data");return await t.json()}catch(e){throw console.error("Error fetching post by slug:",e),Error("Could not load post data.")}}},7447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,generateStaticParams:()=>p,revalidate:()=>d});var a=r(2740),o=r(5635),s=r(1673),n=r(700),i=r.n(n);async function l({params:e}){try{let{slug:t}=await e,r=await (0,s.Vc)(t);if(!r?.data?.length)return(0,a.jsx)("div",{children:"Post not found or data is incomplete."});let n=r.data[0];return(0,a.jsxs)("div",{className:i().postDetails,children:[(0,a.jsx)("h1",{className:i().postTitle,children:n.title}),n.image&&(0,a.jsx)("div",{className:i().imageContainer,children:(0,a.jsx)(o.default,{src:n.image.formats?.thumbnail?.url?process.env.STRAPI_API+n.image.formats.thumbnail.url:"/placeholder-image.jpg",alt:n.title,width:600,height:400,className:i().postImage_blg})}),(0,a.jsx)("div",{className:i().postContent,children:n.content.map((e,t)=>(0,a.jsx)("p",{className:i().contentText,children:e.children.map((e,t)=>(0,a.jsx)("span",{children:e.text},t))},t))})]})}catch(e){return console.error("Error loading post details:",e),(0,a.jsx)("div",{children:"Error loading post details. Please try again later."})}}async function p(){try{let e=await (0,s.Gm)();if(!e?.data?.length)return console.warn("No posts found or invalid data structure."),[];return e.data.map(e=>({slug:e.slug}))}catch(e){return console.error("Error generating static params:",e),[]}}let d=10},6055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(8077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,586,77,265],()=>r(8055));module.exports=a})();