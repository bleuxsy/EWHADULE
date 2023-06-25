
const reback = document.querySelector(".result");
const poscoEltecClean = document.querySelector("#poscoElte");
const frontadClean = document.querySelector("#frontad");
const subwayfrontClean = document.querySelector("#subwayfront");
const frontposcotClean = document.querySelector("#frontposco");

function clean(){
  poscoEltecClean.style.display = "none";
  frontadClean.style.display = "none";
  subwayfrontClean.style.display = "none";
  frontposcotClean.style.display = "none";
}
function loadInfo(e){
  e.preventDefault();
  clean();
  const srcName = document.getElementById("src").value;
  const dstName = document.getElementById("dst").value;
  console.log(srcName);
  console.log(dstName);
  reback.style.display = "none";
  if(srcName =="posco" && dstName =="Eltec"){
    const resultMMS = document.querySelector("#poscoElte");
    reback.style.display = "block";
    resultMMS.style.display = "block";
    
  }
   if(srcName =="front" && dstName =="auditorium"){
    const resultMMS = document.querySelector("#frontad");
    reback.style.display = "block";
    resultMMS.style.display = "block";
   
  }
  else if(srcName =="subway" && dstName =="front"){
    const resultMMS = document.querySelector("#subwayfront");
    reback.style.display = "block";
    resultMMS.style.display = "block";
  }
  else if(srcName =="front" && dstName =="posco"){
    const resultMMS = document.querySelector("#frontposco");
    reback.style.display = "block";
    resultMMS.style.display = "block";
  }
}
document.getElementById("input").addEventListener("submit", loadInfo);
