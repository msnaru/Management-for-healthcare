function sendHttpPost(payload, jtoken){
  var token_line_notify = jtoken["token_line_notify"];
  var options =
   {
     "method"  : "post",
     "payload" : payload,
     "headers" : {"Authorization" : "Bearer "+ token_line_notify}

   };

   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}
