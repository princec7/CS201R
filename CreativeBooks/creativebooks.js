$("#button").click(function(e){
  var value = $("#isbn").val();
  value = value.replace(/-/g,""); //Allows input to have hyphens (This line strips away hyphens)
  console.log(value);
  e.preventDefault();
  var myurl= "https://www.googleapis.com/books/v1/volumes?q=isbn:";
  myurl += value;
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
      try {
        $("#title").html(JSON.stringify(parsed_json['items'][0]['volumeInfo']['title']));
        $("#author").html(JSON.stringify(parsed_json['items'][0]['volumeInfo']['authors'][0]));
        $("#description").html(JSON.stringify(parsed_json['items'][0]['volumeInfo']['description']));
      }
      catch(e) { //If the ISBN entered does not return valid json, this block is run
        $("#title").html('Invalid ISBN');
        $("#author").html('');
        $("#description").html('');
      }
    }
  });
});

//Removes the suggestion text from the text field when the text field is clicked
$('#isbn').one('click',(function(e){
    $('#isbn').html('');
}));

//Runs the same code as the submit button if "Enter" is pressed while the cursor is in the text box
$('#isbn').keypress(function(e) {
    if (e.which == 13) {
        $(document).ready(function() { $('#isbn').blur() });
        $("#button").click();
    }
});
