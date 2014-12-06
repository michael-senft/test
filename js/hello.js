


function inloggen(id) {
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function (data) {
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
        
    });
    document.getElementById('greeting-content').style.visibility = 'visible';
    document.getElementById('greeting-id').style.visibility = 'visible';
}
