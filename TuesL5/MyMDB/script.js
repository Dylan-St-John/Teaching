// 2) Make an account at OMDBAPI and use the apikey you are given
// to make a query of your choice - be sure to follow the link!!

// 3) Use Jquery to make a query to the OMDB API and print out the 
// result in the console
// HINT: W3Schools, Jquery AJAX section

$.get("https://www.omdbapi.com/?s=Harry+Potter&apikey=af5dd467", function(data, status){
    // 4) Console log some more specific information from the data 
    // (like the title, the year, Plot of one of the films,
    //Ratings from Rotten Tomatoes, The movie poster)
    console.log(data);
    for (i=0; i < data.Search.length; i++){


        // 6) Add to the table you created in step 5:
        // a) Poster of film/tv
        // b) Title
        // c) Year released
        let table = $(".table");
        // console.log(table.children());
        // console.log(table);
        
        // console.log("<td><img src=" + data.Search[i].Poster + "</img></td>")
        // Create a row
        let row = $("<tr></tr>")
        let poster = $("<td><img src='" + data.Search[i].Poster + "'</img></td>");
        let title = $("<td><p>" + data.Search[i].Title+"</p></td>")
        let year = $("<td><p>" + data.Search[i].Year+"</p></td>")
        row.append(poster);
        row.append(title);
        row.append(year);
        table.append(row); 

        // CHALLENGE: Order the films by year released
    }  

    // for every id
    for (i = 0; i < data.Search.length; i++){
        console.log('test')
        let api_request = "https://www.omdbapi.com/?i=" + data.Search[i].imdbID + "&apikey=af5dd467"
        console.log(api_request);
        // send a get a request for the film
        $.get(api_request, function(data, status){
            console.log(data);
            // fill out on our webpage the collapse bootstrap thing with
            // the content from the request
        });
    }

 
});