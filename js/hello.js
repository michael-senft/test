


function inloggen(id) {
    $.ajax({
        type: "GET",
        url: "http://ergorestdavid.cloudapp.net/Service1.svc/GetAllUsers",
        dataType: "json",
        success: function (data) {

            $.each(data.Naam, function (i, item) {

                $('#greeting-content').append(item);
                alert(item);
            });

            
            
        }
    });
        
   
    document.getElementById('greeting-content').style.visibility = 'visible';
    document.getElementById('greeting-id').style.visibility = 'visible';
}
