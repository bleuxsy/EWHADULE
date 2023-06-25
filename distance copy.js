const reback = document.querySelector(".result");
function loadInfo(e){
  e.preventDefault();
  const srcName = document.getElementById("src").value;
  const dstName = document.getElementById("dst").value;
  console.log(srcName);
  console.log(dstName);
  if(srcName =="posco" && dstName =="Eltec"){
    const resultMMS = document.querySelector("#poscoElte");
    reback.style.display = "block";
    resultMMS.style.display = "block";
  }
}
document.getElementById("input").addEventListener("submit", loadInfo);
