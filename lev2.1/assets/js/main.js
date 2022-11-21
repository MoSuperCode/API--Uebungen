fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        data.forEach((author) => {
            const figureElement = document.createElement("figure");
            const imageElement = document.createElement("img");
            imageElement.src = author.download_url;
            const figCaptionElement = document.createElement("figcaption");
            figCaptionElement.innerHTML = author.author;

            document.body.appendChild(figureElement);
            figureElement.appendChild(imageElement);
            figureElement.appendChild(figCaptionElement);

        });
    });