$(document).ready(() => {

	$( "#s-btn1" ).click(function( event ) {
		let title= $("#s-title").val();
		if(title=="")
		{
			alert("Enter a title")
		}
		else
		{
			getData();
		}
		$("#s-title").val('');
		// alert(title);
	});
	$( "#s-btn2" ).click(function( event ) {
		let imdb= $("#s-id").val();
		if(imdb=="")
		{
			alert("Enter IMDB ID")
		}
		else
		{
			getData();
		}
		$("#s-id").val('');
		// alert(imdb);
	});
	$( "#s-btn3" ).click(function( event ) {
		let title1= $("#s-title1").val();
		let year= $("#s-year").val();
		if(year==""||title1=="")
		{
			alert("Invalid Input")
		}
		else
		{
			getData();
		}
		$("#s-title1").val('');
		$("#s-year").val('');
		// alert(year+' '+title1);
	});


		

})
let getData = () =>{
	
	let title= $("#s-title").val();
	let imdb= $("#s-id").val();
	let year= $("#s-year").val();
	let title1= $("#s-title1").val();
	let apiurl='https://www.omdbapi.com/?';
	let apikey='&apikey=6dd726fb';
	


	if(title!="")
	{
		apiurl=apiurl.concat('&t='+title);
		// alert(apiurl);
	}
	if(imdb!="")
	{
		apiurl=apiurl.concat('&i='+imdb);
		// alert(apiurl);
	}
	if(title1!=""&&year!="")
	{
		apiurl=apiurl.concat('&t='+title1+'&y='+year);
		// alert(apiurl);
	}
	apiurl=apiurl+apikey;
	// alert(apiurl)
	console.log(apiurl)

	$.ajax({
		type: 'GET',
		datatype: 'jsonp',
		async: true,
		url:apiurl,
		success:function (data){
		console.log(data)
		let response = data.Response;
        console.log("Response Returned: " + response);
        let responseData;
		 
		 	let movieinfo;
		 	// let response= data.response;

            if (response == "True") 
            {
            	
                let mposter;
                if (data.Poster != "N/A")
                {
                    mposter = data.Poster;
                }
                else
                {
                    mposter = "images/Sorry-image-not-available.png";
                }
                movieinfo=`<tr><td colspan="2" class="poster"><img src="${mposter}" height="200"  ></td></tr>
				    <tr><td>Title</td><td>${data.Title}</td></tr>				    				    
				    <tr><td>Actors</td><td>${data.Actors}</td></tr>					      
				    <tr><td>Box-Office</td><td>${data.BoxOffice}</td></tr>
				    <tr><td>Country</td><td>${data.Country}</td></tr>					      
				    <tr><td>Director</td><td>${data.Director}</td></tr>
				    <tr><td>Genre</td><td>${data.Genre}</td></tr>					      
				    <tr><td>IMDB- ID</td><td>${data.imdbID}</td></tr>
				    <tr><td>IMDB-Rating</td><td>${data.imdbRating}</td></tr>					      
				    <tr><td>IMDB-Votes</td><td>${data.imdbVotes}</td></tr>`
			}
			else if (response == "False") 
			{
                movieinfo = `<tr><td colspan="2" >=No movies Found</td></tr>`;
            }
             $("#moviedetails").html(movieinfo);
		}
	

})
};


				      
				      