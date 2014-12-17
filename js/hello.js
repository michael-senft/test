


function inloggen(id) {
    $.ajax({
        type: "GET",
        url: "http://ergorestdavid.cloudapp.net/Service1.svc/GetAllUsers",
        dataType: "json",
        success: function(data) {
            document.getElementById('greeting-content').textContent = data.Naam;
            alert(data);
        }
    });
        
   
    document.getElementById('greeting-content').style.visibility = 'visible';
    document.getElementById('greeting-id').style.visibility = 'visible';
}
