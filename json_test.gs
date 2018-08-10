function TokenImported() {

  var file_name = 'token.json';

  var fileIT = DriveApp.getFilesByName(file_name).next();
  var textdata = fileIT.getBlob().getDataAsString('utf8');
  var jobj = JSON.parse(textdata);
  
  Logger.log(jobj)
  
  return jobj;
}

