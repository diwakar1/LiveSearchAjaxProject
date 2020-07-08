$('#search').keyup(function(){
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField,'i')
    $.getJSON('data.json',function(data){
        //console.log(data)
        var output = '<ul class = "searchresults">';
        $.each(data,function(key,value){
            if((value.name.search(myExp) != -1)||
            (value.bio.search(myExp) != -1)){
                output += '<li>';
                output += '<h2>'+value.name + '</h2>';
                output += `<img src= "../image/${value.shortname}_tn.jpg" alt = "${value.name}" />`
                output += `<p> ${value.bio}</p>`
                output += '</li>'
        }
        });
        output += '</ul>';
        $('#update').html(output);
       });
})
