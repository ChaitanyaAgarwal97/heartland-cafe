
  function copyPhone() {
    const number = document.getElementById("phoneNumber").innerText;
    navigator.clipboard.writeText(number);
    const btn = document.querySelector(".copy-btn");
    btn.textContent = "Copied!";
    btn.style.background = "#3bc97b";
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.style.background = "";
    }, 1500);
  }