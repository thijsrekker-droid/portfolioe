const projects = [
{title:"Stage - PEC Zwolle",cat:"Stage / Social Media",services:"Matchday visuals, Social design",tools:"Photoshop, Illustrator",cover:"images/Peczwolle_01.png",preview:"images/Peczwolle_01.png",gallery:["images/Peczwolle_01.png","images/Peczwolle_03.png","images/Peczwolle_10.png","images/Peczwolle_12.png","images/Peczwolle_15.png","images/Peczwolle_17.png","images/Peczwolle_21.png","images/Peczwolle_22.png","images/Peczwolle_24.gif","images/Peczwolle_25.png"],desc:"In het seizoen 2022/23 liep ik stage bij PEC Zwolle op de afdeling Media Marketing. Ik werkte aan verschillende visuele uitingen voor de club zoals matchday visuals, social media content en campagnebeelden."},
{title:"Game Of Two Halves",cat:"Editorial design",services:"Book design, Typography",tools:"InDesign, Photoshop",cover:"images/Gameoftwohalves_01.png",preview:"images/Gameoftwohalves_01.png",gallery:["images/Gameoftwohalves_01.png","images/Gameoftwohalves_02.png","images/Gameoftwohalves_07.png","images/Gameoftwohalves_08.png","images/Gameoftwohalves_13.png","images/Gameoftwohalves_14.png","images/Gameoftwohalves_19.png","images/Gameoftwohalves_20.png","images/Gameoftwohalves_35.png","images/Gameoftwohalves_36.png","images/Gameoftwohalves_41.png","images/Gameoftwohalves_42.png","images/Gameoftwohalves_43.png","images/Gameoftwohalves_44.png"],desc:"Game of Two Halves is een boekconcept waarin iconische voetbalcommentaar momenten worden vastgelegd door middel van beeld en typografie."},
{title:"Loszand Festival 2024",cat:"Festival identiteit",services:"Social media design",tools:"Photoshop, Illustrator",cover:"images/Loszand_6.png",preview:"images/Loszand_6.png",gallery:["images/Loszand_6.png","images/Loszand_3.jpg","images/Loszand_4.jpg","images/Loszand_5.jpg","images/Loszand_1.png","images/Loszand_2.png","images/Loszand_7.png"],desc:"Loszand Festival vroeg mij social media visuals te ontwerpen. De stijl combineert de kleuren van zand en water om het zomerse festivalgevoel te versterken."},
{title:"Liquid Liquor",cat:"Branding / label design",services:"Packaging design",tools:"Illustrator",cover:"images/Liqued Licour_1.png",preview:"images/Liqued Licour_1.png",gallery:["images/Liqued Licour_1.png","images/Liqued Licour_2.png","images/Liqued Licour_3.png","images/Liqued Licour_4.png"],desc:"Voor Liquid Liquor ontwikkelde ik een etiket voor een druivenlikeur. Het ontwerp combineert houtstructuren, paarse tinten en handgetekende druiven."},
{title:"Insanity",cat:"Festival social media",services:"Concept design",tools:"Photoshop",cover:"images/Insanity_1.png",preview:"images/Insanity_1.png",gallery:["images/Insanity_1.png","images/Insanity_2.jpg","images/Insanity_3.png","images/Insanity_4.png","images/Insanity_5.png"],desc:"Voor festival Insanity ontwikkelde ik een visueel concept waarbij het logo werd omgezet naar een 3D visual gecombineerd met ruimte- en woestijnbeelden."},
{title:"Ines Administratie",cat:"Logo design",services:"Brand identity",tools:"Illustrator",cover:"images/Inesadministratie_1.png",preview:"images/Inesadministratie_1.png",gallery:["images/Inesadministratie_1.png"],desc:"Voor Ines Administratie ontwierp ik een bedrijfslogo waarbij de letter I een centrale rol speelt in het ontwerp."},
{title:"EVNTP",cat:"Editorial design",services:"Magazine design",tools:"InDesign",cover:"images/evntp_01.png",preview:"images/evntp_01.png",gallery:["images/evntp_01.png","images/evntp_20.png","images/evntp_21.png","images/evntp_22.png","images/evntp_23.png","images/evntp_24.png","images/evntp_25.png","images/evntp_30.png","images/evntp_31.png"],desc:"Afstudeerproject waarbij ik onderzoek deed naar duurzamere festivalmunten en dit presenteerde in de vorm van een magazine."},
{title:"Fight The Evil (Savellix)",cat:"Music artwork",services:"Album cover",tools:"Photoshop",cover:"images/fighttheevil_01.png",preview:"images/fighttheevil_01.png",gallery:["images/fighttheevil_01.png","images/fighttheevil_02.png","images/fighttheevil_03.png","images/fighttheevil_27.png","images/fighttheevil_28.png"],desc:"Album artwork ontworpen voor DJ Savellix voor de track Fight The Evil."},
{title:"Rise And Unite",cat:"Music artwork",services:"Album cover",tools:"Photoshop",cover:"images/Riseandunite_01.png",preview:"images/Riseandunite_01.png",gallery:["images/Riseandunite_01.png","images/Riseandunite_02.jpg","images/Riseandunite_03.png","images/Riseandunite_04.jpeg","images/Riseandunite_05.jpeg","images/Riseandunite_06.jpeg","images/Riseandunite_07.jpeg","images/Riseandunite_08.jpeg","images/Riseandunite_09.jpeg","images/Riseandunite_10.jpeg","images/Riseandunite_11.jpeg","images/Riseandunite_12.jpeg","images/Riseandunite_13.jpeg","images/Riseandunite_14.jpeg","images/Riseandunite_15.jpeg","images/Riseandunite_16.jpeg","images/Riseandunite_17.jpeg","images/Riseandunite_18.png","images/Riseandunite_19.png"],desc:"Artwork voor de track Rise and Unite (Insanity Anthem 2021) van Savellix en TCM."}
]

function showHome(){document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active")});document.getElementById("page-home").classList.add("active");history.pushState({page:"home"},"",location.pathname);window.scrollTo(0,0)}
function showPage(name){document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active")});document.getElementById("page-"+name).classList.add("active");history.pushState({page:name},"",location.pathname);window.scrollTo(0,0)}
function openProject(i){var p=projects[i];document.getElementById("proj-h").innerText=p.title;document.getElementById("ps-title").innerText=p.title;document.getElementById("ps-cat").innerText=p.cat;document.getElementById("ps-serv").innerText=p.services;document.getElementById("ps-tools").innerText=p.tools;document.getElementById("proj-desc").innerText=p.desc;document.getElementById("proj-cover").src=p.cover;var grid=document.getElementById("gal-grid");grid.innerHTML="";p.gallery.forEach(function(img,idx){var item=document.createElement("div");item.className=idx===0?"gi wide":"gi";item.innerHTML='<img loading="lazy" src="'+img+'">';grid.appendChild(item)});document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active")});document.getElementById("page-project").classList.add("active");history.pushState({page:"project",index:i},"",location.pathname);window.scrollTo(0,0)}

var navLogo=document.getElementById("nav-logo");
var navHome=document.getElementById("nav-home");
var navWork=document.getElementById("nav-work");
var navAbout=document.getElementById("nav-about");
var navContact=document.getElementById("nav-contact");
var backBtn=document.getElementById("back-btn");
var aboutTeaser=document.getElementById("about-teaser");

if(navLogo)navLogo.onclick=function(e){e.preventDefault();showHome()};
if(navHome)navHome.onclick=function(){showHome()};
if(navWork)navWork.onclick=function(){showHome();setTimeout(function(){document.getElementById("wa").scrollIntoView({behavior:"smooth"})},80)};
if(navAbout)navAbout.onclick=function(){showPage("about")};
if(navContact)navContact.onclick=function(){showHome();setTimeout(function(){document.getElementById("ca").scrollIntoView({behavior:"smooth"})},80)};
if(backBtn)backBtn.onclick=function(){showHome()};
if(aboutTeaser)aboutTeaser.onclick=function(){showPage("about")};

var list=document.getElementById("project-list");
projects.forEach(function(p,i){var row=document.createElement("div");row.className="p-row";row.innerHTML='<div class="p-num">'+String(i+1).padStart(2,"0")+'</div><div class="p-title">'+p.title+'</div><div class="p-cat">'+p.cat+"</div>";row.onclick=function(){openProject(i)};list.appendChild(row)});

var preview=document.getElementById("preview");
var previewImg=document.getElementById("preview-img");
document.querySelectorAll(".p-row").forEach(function(row,i){row.addEventListener("mouseenter",function(){previewImg.src=projects[i].preview;preview.classList.add("visible")});row.addEventListener("mouseleave",function(){preview.classList.remove("visible")});row.addEventListener("mousemove",function(e){preview.style.left=e.clientX+"px";preview.style.top=e.clientY+"px"})});

window.addEventListener("popstate",function(e){if(!e.state||e.state.page==="home"){document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active")});document.getElementById("page-home").classList.add("active");window.scrollTo(0,0);return}if(e.state.page==="about"){document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active")});document.getElementById("page-about").classList.add("active");window.scrollTo(0,0)}else if(e.state.page==="project"){openProject(e.state.index)}});

history.replaceState({page:"home"},"",location.pathname);

var cur=document.getElementById("cur");
var curF=document.getElementById("cur-f");
var mx=0,my=0,fx=0,fy=0;
document.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;cur.style.left=mx+"px";cur.style.top=my+"px"});
function animateCursor(){fx+=(mx-fx)*0.18;fy+=(my-fy)*0.18;curF.style.left=fx+"px";curF.style.top=fy+"px";requestAnimationFrame(animateCursor)}
animateCursor();
document.querySelectorAll("a, button, .p-row, .about-teaser").forEach(function(el){el.addEventListener("mouseenter",function(){cur.classList.add("big")});el.addEventListener("mouseleave",function(){cur.classList.remove("big")})});
