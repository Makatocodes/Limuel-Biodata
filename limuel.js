
 function togglePopup() {
 document.getElementById("popup-1")
  .classList.toggle("active");
}

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Attach a 2x2 photo here.";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

const inputFile2 = document.querySelector("#signature__input");
const signatureImage = document.querySelector(".signature__image");
const signatureImageTxt = "Attach your e-signature here.";
signatureImage.innerHTML = signatureImageTxt;

inputFile2.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("signature__img");

      signatureImage.innerHTML = "";
      signatureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    signatureImage.innerHTML = signatureImageTxt;
  }
});
