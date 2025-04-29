function openImage(imgSrc) {
    /*document.getElementById(currentScreen).insertAdjacentHTML('beforeend', 
        `<div class="image-preview" id="image-preview"><button onclick="closeImage()">&times;</button><img src="${imgSrc}"></div>`
    )*/
   console.log(imgSrc);
   document.getElementById('imagePreviewOverlay').classList.remove("close-anime");
   document.getElementById('imagePreviewOverlay').style.display = "block";
   document.getElementById('previewImage').src = imgSrc;
}

function closeImage() {
    document.getElementById('imagePreviewOverlay').classList.add("close-anime");
    setTimeout(()=> {
        //document.getElementById('imagePreview').remove();
        document.getElementById('imagePreviewOverlay').style.display = "none";
    }, 500);
}