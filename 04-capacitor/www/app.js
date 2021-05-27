const { Camera, CameraResultType, CameraSource } = capacitorExports;

let bodyHtml = document.getElementById("bodyContent");
let cameraBtn = document.getElementById("cameraBtn");

//On récupère les donnée de l'url suivante
fetch("https://devfest-nantes-2018-api.cleverapps.io/blog")
    .then(response => response.json())
    .then(data =>
        data.forEach(element => {
            // on crée ensuite notre corps de page grâce au élément parcourut dans la boucle
            const card = 
            `<ion-card>
                <ion-card-header>
                    <ion-img id="cardImg" src="https://devfest2018.gdgnantes.com${element?.image}"></ion-img>
                    <ion-card-title class="title">${element?.title}</ion-card-title>
                </ion-card-header>
                <ion-card-content id="cardContent">
                    ${element?.brief}
                </ion-card-content>
            </ion-card>`
            bodyHtml.innerHTML = bodyHtml.innerHTML + card;
        })
    );
// Prendre une photo via la webcam
const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
      //source: CameraSource.Photos
    });
    var imageUrl = image.webPath;
    imageElement.src = imageUrl;
  };

  cameraBtn.addEventListener("click", takePhoto);