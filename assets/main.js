function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}




var duomenysAPI = httpGet('https://jsonplaceholder.typicode.com/posts');


// API table append
for (i = 0; i < 5; i++) {
    console.log(duomenysAPI[i]);
    var td = '<tr><td>' + i + '</td><td id="table_custom_list">' + duomenysAPI[i].title + '</td></tr>';
    document.getElementById('append_API').innerHTML += td;
}

// Menu append on works button in header bar
var worksMenu = false;
console.log(showNoShow);

function worksBar() {
    if (!worksMenu) {
        worksMenu = true;
        document.getElementById("targetWorks").style.display = 'block';
        console.log(worksMenu);
    } else {
        worksMenu = false;
        document.getElementById("targetWorks").style.display = 'none';
        console.log(worksMenu);
    }
}
