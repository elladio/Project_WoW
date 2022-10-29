
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
        $main.append($("<div>").html(`<h2> Who?: </h2><p>${disneyData.data[0].name} duhh!</p>`))
        $main.append($("<div>").html(`<h2>They're in...</h2> <p>${disneyData.data[0].films}</p>`));
        $main.append($("<div>").html(`<h2> Also in!:</h2> <p>${disneyData.data[0].shortFilms}</p>`))
        $main.append($("<div>").html(`<h2> On the small screen?:</h2> <p>${disneyData.data[0].tvShows}</p>`))
        $main.append($("<div>").html(`<h2> They're buddies: </h2>
        <p>${disneyData.data[0].allies}</p>`))
        $main.append($("<div>").html(`<h2> Looks something like this </h2> <img src="${disneyData.data[0].imageUrl}"></img>`)
    
    )})
}
 // how to make case insensitive


$("input[type=submit]").on("click", (event) =>{
    event.preventDefault()
    const innerText = $("input[type=text]").val()
    characSearch(innerText);
});
