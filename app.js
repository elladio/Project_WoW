
const basedUrl = "https://api.disneyapi.dev/"
// const disneyUrl = $.ajax("https://api.disneyapi.dev/characters").then((data) => {
//     return data
// });

function characterSearch(){
    const search = document.getElementById("search").value;
    const url = '${basedUrl}?q=${search}`
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
})}
console.log(characterSearch)