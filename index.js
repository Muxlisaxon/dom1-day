document.getElementById("btn1").addEventListener("click", function () {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let logo = document.querySelector(".logo");
    let form = document.getElementById("form_select").value;
  
    switch (form) {
      case "0":
        logo.innerHTML = Number(num1) + Number(num2);
        break;
      case "1":
        logo.innerHTML = Number(num1) - Number(num2);
        break;
      case "2":
        logo.innerHTML = Number(num1) / Number(num2);
        break;
      case "3":
        logo.innerHTML = Number(num1) * Number(num2);
    }
  });