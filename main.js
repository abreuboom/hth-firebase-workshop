var database = firebase.database().ref();

function sendChat() {
    var name = $("#name").val();
    var message = $("#message").val();

    database.push({
        'name': name,
        'message': message
    });

    $("#submit").click(function(){
        sendChat();
    });

    database.on('child_added', function(dataRow){
    var row = dataRow.val();
    $("#feed").append("<p><b>" + row.name + "</b> says " + row.message + "</p>");
})
}
