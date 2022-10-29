
const disneyUrl = "https://api.disneyapi.dev/character?name="

// const $main = $("main");
// $main.append($("<div>").html(`<p>Who? :</p>`));
// $main.append($("<div>").html(`<p>Where? :</p>`));
// $main.append($("<div>").html(`<p>Related materials?</p>`));


function characSearch(char){
    const url = `${disneyUrl}${char}`;
    $.ajax(url).then((disneyData) => {
        console.log(disneyData)
        const $main = $(".child3");
        $main.empty();
        $main.append($("<div>").html(`<p> Who?: ${disneyData.data[0].name} duhh!</p>`))
        $main.append($("<div>").html(`<p>They're in...${disneyData.data[0].films}</p>`));
        $main.append($("<div>").html(`<p> Also in!: ${disneyData.data[0].shortFilms}</p>`))
        $main.append($("<div>").html(`<h1> They dont like: </h1>
        <p>${disneyData.data[0].enemies}</p>`))
        $main.append($("<div>").html(`<img src="${disneyData.data[0].imageUrl}"></img><p> Looks something like this ^</p>`)
    
    )})
}
 // how to make case insensitive


$("input[type=submit]").on("click", (event) =>{
    event.preventDefault()
    const innerText = $("input[type=text]").val()
    characSearch(innerText);
});
