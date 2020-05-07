$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://quotes.rest/qod",
        dataType: "JSON"
    }).then(function (response) {
        var quote = response.contents.quotes[0].quote
        $("#quote").text(quote)

    })

})