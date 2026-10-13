const EN={
nav_about:"About",nav_services:"Services",nav_journey:"Journey",nav_clinic:"Clinic",
role:"Consultant in Internal Medicine, Cardiology & Diabetes",name:"Dr. Ahmed Behreiz",
lead:"Precise medical care with a clear treatment plan for your heart, your blood sugar and your overall health.",
book:"Book an appointment",more:"About me",
about_t:"About the doctor",about_p:"I diagnose and treat internal medicine conditions, with a special focus on heart disease and diabetes. I explain each patient's condition clearly and build a follow-up plan they can stick to.",
srv_t:"Specialties",s1_t:"General Internal Medicine",s1_p:"Full check-ups, diagnosis and follow-up of acute and chronic conditions.",
s2_t:"Cardiology",s2_p:"Blood pressure, chest pain, palpitations, stress testing and ECG.",
s3_t:"Diabetes",s3_p:"Blood sugar control, treatment adjustment and prevention of complications.",
tl_t:"Education & Career",t1_t:"MBBCh, Medicine & Surgery",t1_p:"Faculty of Medicine - add university name here.",
t2_t:"Master's in Internal Medicine",t2_p:"Add university name here.",
t3_t:"Cardiology & Diabetes Fellowship",t3_p:"Advanced training in heart disease and diabetes.",
t4_t:"Consultant, Internal Medicine",t4_p:"Practicing in clinic and hospital to this day.",
cl_t:"Clinic",addr:"Address",addr_v:"Add clinic address here",hrs:"Hours",hrs_v:"Sat - Thu, 5 PM - 10 PM",tel:"Phone",wa:"Book via WhatsApp"};
const $=s=>document.querySelector(s),root=document.documentElement;
const AR={};
document.querySelectorAll("[data-i18n]").forEach(e=>AR[e.dataset.i18n]=e.textContent);
function setLang(l){
  root.lang=l;root.dir=l==="ar"?"rtl":"ltr";
  const D=l==="ar"?AR:EN;
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=D[e.dataset.i18n]);
  $(".logo").textContent=D.name;
  $("#lang").textContent=l==="ar"?"EN":"ع";
  document.title=D.name+" | "+(l==="ar"?"باطنة وقلب وسكر":"Internal Medicine, Cardiology & Diabetes");
  try{localStorage.setItem("lang",l)}catch(e){}
}
function setTheme(t){
  root.dataset.theme=t;
  try{localStorage.setItem("theme",t)}catch(e){}
}
let saved={};
try{saved={lang:localStorage.getItem("lang"),theme:localStorage.getItem("theme")}}catch(e){}
setTheme(saved.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
setLang(saved.lang||"ar");
$("#lang").onclick=()=>setLang(root.lang==="ar"?"en":"ar");
$("#theme").onclick=()=>setTheme(root.dataset.theme==="dark"?"light":"dark");
$("#yr").textContent=new Date().getFullYear();
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.3});
document.querySelectorAll(".timeline li").forEach((li,i)=>{li.style.transitionDelay=(i%2)*.08+"s";io.observe(li)});
