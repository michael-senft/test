


function inloggen(id) {
    $.ajax({
        url: "http://ergorestdavid.cloudapp.net/Service1.svc/GetAllUsers"
    }).then(function (data) {
        var des_data = JSON.parse(data);
        $('.greeting-id').append(des_data.id);
        $('.greeting-content').append(des_data.content);
        
    });
    document.getElementById('greeting-content').style.visibility = 'visible';
    document.getElementById('greeting-id').style.visibility = 'visible';
}
