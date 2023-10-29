function update_quote() {
    url = "https://api.quotable.io/random";
    document.getElementById("quote_text").innerHTML =
        "<p class='text-danger'>Retrieving Quote...</p>";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(`${data.content} —${data.tags[0]}`);
            document.getElementById("quote_text").innerHTML =
                data.content + "<br>" + "By — " + data.author;
        });
}
update_quote()