let bodyHtml = document.getElementById("bodyContent");
fetch("https://devfest-nantes-2018-api.cleverapps.io/blog")
    .then(response => response.json())
    .then(data =>
        data.forEach(element => {
            const card = 
            `<ion-card>
                <ion-card-header>
                    <ion-img id="cardImg" src="https://devfest2018.gdgnantes.com${element?.image}"></ion-img>
                    <ion-card-title id="title">${element?.title}</ion-card-title>
                </ion-card-header>
                <ion-card-content id="cardContent">
                    ${element?.brief}
                </ion-card-content>
            </ion-card>`
            bodyHtml.innerHTML = bodyHtml.innerHTML + card;
        })
    );