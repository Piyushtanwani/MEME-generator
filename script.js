const generateMeneBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = function (url, title, author) {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = `Meme Title : ${title}`;
  memeAuthor.innerHTML = `Meme By ${author}`;
};

const generateMeme = function () {
  fetch("https://meme-api.com/gimme/dankmemes")
    .then((res) => res.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMeneBtn.addEventListener("click", generateMeme);
