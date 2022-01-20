const img = document.getElementById("box");
if (img) {
  img.addEventListener("click", () => {
    let modalBox = document.getElementById('modal');
    if (typeof modalBox.showModal === "function") {
      modalBox.showModal();
    }
  });
}
