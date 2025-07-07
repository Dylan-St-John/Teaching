$(function(){
    var searchTerm = "Star Wars";
    $.get({
        url:
        "https://www.omdbapi.com/?s="+searchTerm+"&type=movie&apikey=af5dd467",
        success: function(data){
            console.log(data);
        }
    });
});