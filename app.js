
const disneyUrl = "https://api.disneyapi.dev/character?name="
const $main = $("main");
$main.append($("<div>").html(`<p>Who? :</p>`));
$main.append($("<div>").html(`<p>Where? :</p>`));
$main.append($("<div>").html(`<p>Related materials?</p>`));



// function charSearch(character) {
//     const url = `${disneyUrl}${character}`;
//     $.ajax(url)
//     .then((data) => {
//         $main.empty();
//         $main.append($("<div>").html(`<p> Who?: ${data[8].name}</p>`))
//     })
// }
// function characterSearch(character){
//     const url = `${disneyUrl}${character}}`
//     $.ajax(url).then((data) => {
//         console.log(data)
//         disData = data
//             $main.empty();
//             // $main.append($("<div>").html(`<p> Who?: ${disData.data.name}</p>`))
// })
// }

function characSearch(char){
    const url = `${disneyUrl}${char}`;
    $.ajax(url).then((data) => {
        console.log(data)
        $main.empty();
        //$main.append($("<div>").html(`<p> Who?: ${data[8].name}</p>`))
})
}
       
$("input[type=submit]").on("click", (event) =>{
    event.preventDefault()
    const innerText = $("input[type=text]").val()
    characSearch(innerText);
});
