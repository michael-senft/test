


function inloggen(id) {
    $.ajax({
        type: "GET",
        url: "http://ergorestdavid.cloudapp.net/Service1.svc/GetAllUsers",
        dataType: "json",
        succes: function(data){
            document.getElementById('greeting-content').textContent = data.Naam;
        }
    })
        
    });
    document.getElementById('greeting-content').style.visibility = 'visible';
    document.getElementById('greeting-id').style.visibility = 'visible';
}
