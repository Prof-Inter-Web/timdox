//pour afficher un carré de couleur à côté d’un code comme #fff

function applyColorBoxes() {
  document.querySelectorAll("code").forEach(el => {

    if (el.dataset.colorDone) return;

    const text = el.textContent.trim();

    if (/^#([0-9A-F]{3}){1,2}$/i.test(text)) {

      const box = document.createElement("span");
      box.style.display = "inline-block";
      box.style.width = "12px";
      box.style.height = "12px";
      box.style.marginLeft = "6px";
      box.style.border = "1px solid #ccc";
      box.style.background = text;

      el.after(box);
      el.dataset.colorDone = "true";
    }
  });
}

// 1er chargement
document.addEventListener("DOMContentLoaded", applyColorBoxes);

// navigation MkDocs Material
document.addEventListener("md-content-loaded", applyColorBoxes);