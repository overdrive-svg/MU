function update(previewPic) {

    console.log("Hover detected!");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.style.lineHeight = "normal";
}

function undo() {

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
    imageDiv.style.lineHeight = "300px";
}