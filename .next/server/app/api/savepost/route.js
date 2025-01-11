(()=>{var e={};e.id=547,e.ids=[547],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3504:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>x,routeModule:()=>l,serverHooks:()=>g,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>c});var s={};r.r(s),r.d(s,{POST:()=>u});var a=r(2706),o=r(8203),n=r(5994),i=r(9187);let p="http://localhost:1337/api";async function u(e){try{if(!(e.headers.get("content-type")||"").includes("multipart/form-data"))return i.NextResponse.json({error:"Invalid Content-Type. Expected multipart/form-data."},{status:400});let t=await e.formData(),r=t.get("title"),s=t.get("date"),a=t.get("excerpt"),o=t.get("content"),n=t.get("thumbnail");if(!r||!s||!o)return i.NextResponse.json({error:"Missing required fields: title, date, or content."},{status:400});let u=r.toLowerCase().replace(/ /g,"-").replace(/[^a-z0-9-]/g,""),l=null;if(n){let e=new FormData;e.append("files",n);let t=await fetch(`${p}/upload`,{method:"POST",body:e});if(!t.ok)return i.NextResponse.json({error:"Failed to upload thumbnail."},{status:400});let r=await t.json();l=r[0]?.id}let d={title:r,slug:u,date:s,excerpt:a||"",content:o,thumbnail:l},c=await fetch(`${p}/blogs`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer YOUR_STRAPI_API_TOKEN"},body:JSON.stringify({data:d})});if(!c.ok)return i.NextResponse.json({error:"Failed to create blog post in Strapi."},{status:400});let g=await c.json();return i.NextResponse.json({message:"Blog created successfully!",blog:g},{status:200})}catch(e){return console.error("Error processing request:",e),i.NextResponse.json({error:"Failed to create blog post",details:e},{status:500})}}let l=new a.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/savepost/route",pathname:"/api/savepost",filename:"route",bundlePath:"app/api/savepost/route"},resolvedPagePath:"C:\\Users\\Akhil\\Desktop\\New folder\\testfull\\app\\api\\savepost\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:c,serverHooks:g}=l;function x(){return(0,n.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:c})}},6487:()=>{},8335:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,452],()=>r(3504));module.exports=s})();