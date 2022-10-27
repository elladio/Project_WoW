
const disneyUrl = "https://api.disneyapi.dev/character?name="
const $main = $("main");
$main.append($("<div>").html(`<p>Who? :</p>`));
$main.append($("<div>").html(`<p>Where? :</p>`));
$main.append($("<div>").html(`<p>Related materials?</p>`));


function characSearch(char){
    const url = `${disneyUrl}${char}`;
    $.ajax(url).then((disneyData) => {
        console.log(disneyData)
        $main.empty();
        $main.append($("<div>").html(`<p> Who?: ${disneyData.data[0].name}</p>`))
        $main.append($("<div>").html(`<p>Where? ${disneyData.data[0].films}:</p>`));
        $main.append($("<div>").html(`<p> Also in!: ${disneyData.data[0].shortFilms}</p>`))
        $main.append($("<div>").html(`
        <p>Related materials?</p>">`))
})
}
 // how to make case insensitive

$("input[type=submit]").on("click", (event) =>{
    event.preventDefault()
    const innerText = $("input[type=text]").val()
    characSearch(innerText);
});
