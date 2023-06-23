function getSelectedValues() {
    var src = document.getElementById("src").value;
    var dst = document.getElementById("dst").value;

    if (src !== "" && dst!== "") {
      var output = "첫 번째 건물: " + src + "<br>두 번째 건물: " + dst;
      document.getElementById("output").innerHTML = output;
    }
  }