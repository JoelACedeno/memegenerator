
    // User should be able to submit a form on the page to generate a new meme on the page, and should be able to add multiple memes to the page by submitting the form multiple times.

    // Users should be able to click on a button to remove a meme from the page.

    // When the meme form is submitted, values in the form inputs should be cleared. 



    // js checklist:
    // input for image url retrieves link from photo
    // ^ input also creates a new div with the photo from the link
    // top text input creates a new div placing inputed text at the top of the photo
    // bottom text input creates a new div placing inputed text at the bottom of the photo



let imageForm = document.getElementById("imageForm");
imageForm.addEventListener("submit", function(event) { 
    event.preventDefault();
    console.log("form submitted");  //validates form submission

    let memePhotoSrc = document.getElementById("urlInput").value;
    console.log("photo source", memePhotoSrc);

    let topTextInput = document.getElementById("topInput").value; 
    console.log("top text", topTextInput);

    let bottomTextInput = document.getElementById("bottomInput").value; 
    console.log(bottomTextInput);

    let newMemeContainer = document.createElement("container");
    newMemeContainer.setAttribute("id", "newMemeContainer");
    newMemeContainer.setAttribute("class", "meme");


    let topText = document.createElement("div");
    topText.setAttribute("id", "topText");
    topText.innerHTML = topTextInput;

    let bottomText = document.createElement("div");
    bottomText.setAttribute("id", "bottomText");
    bottomText.innerHTML = bottomTextInput;

    let memeImage = document.createElement("img");
    memeImage.setAttribute("src", memePhotoSrc);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.innerText = "x";
    

    newMemeContainer.appendChild(memeImage);
    newMemeContainer.appendChild(topText);
    newMemeContainer.appendChild(bottomText);
    newMemeContainer.appendChild(deleteButton);
    document.body.appendChild(newMemeContainer);

    deleteButton.addEventListener("click", function(event){
        console.log("button click");
        document.body.removeChild(newMemeContainer);
    });
    
    imageForm.reset();

    
});

