function grade() {
  var humanities = document.getElementById("human").value;
  var english = document.getElementById("english").value;
  var chinese = document.getElementById("chinese").value;
  var norsk = document.getElementById("norsk").value;
  var spanish = document.getElementById("spanish").value;
  const grade = document.getElementById("grade")



  var rest = parseInt(humanities) + parseInt(english) + parseInt(chinese) + parseInt(norsk) + parseInt(spanish)
  grade.textContent = rest;
  }