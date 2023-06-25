
  const reback = document.querySelector(".result");
function loadInfo(e){
  e.preventDefault();
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
