//Working with JS events
//link:
//file:
//author:
//due:

$("#button").click(callAjax);

function callAjax(){
  //using the ajax method
  $.ajax({
    //URL of the used api
    url: "https://xkcd.com/614/info.0.json",

    data:{

    },

    type: "GET",

    dataType: "json",

    success: function(data){
      console.log("success: ", data);
      $("#output").html(JSON.stringify(data));
    },

    error: function(request, error) {
      console.log(request,error);
    }
  })
}

var comicObj = callAjax();
JSON.parse(comicObj);

console.log(comicObj.title);

//comicObj.img
