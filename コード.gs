function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('measurements');
  
  // 日時の追加
  var lastRow = sheet.getLastRow(); // 更新された最後の行番号
  var triggerCell = sheet.getRange('B' + lastRow).getValue(); // トリガーはBなのでBを指定
  var Mussule = sheet.getRange('C' + lastRow).getValue(); // トリガーはBなのでBを指定
  var updateDateRange = sheet.getRange('E' + lastRow) // 更新した日時を書くセルを指定
  var MussuleRateRange = sheet.getRange('F' + lastRow) // 更新した日時の筋肉率を書くセルを指定
  var Bone = sheet.getRange('L2').getValue();
  var MussuleRate = (Mussule + Bone)/2/triggerCell*100;

  // 更新日時が空でトリガーがあるなら今の日時を追加
  if((!updateDateRange.getValue()) && (!MussuleRateRange.getValue()) && triggerCell) {
      var date = new Date();
      updateDateRange.setValue(date);
      MussuleRateRange.setValue(MussuleRate);
  }
  
  var jtoken = TokenImported(); 
  var token_slack = jtoken["token_slack"];
 
  
  var chartImage = sheet.getCharts()[0]
    .getBlob().getAs('image/png')
    .setName("chart.png");
  var filesUpload = 'https://slack.com/api/files.upload';
  var channel    = '#health_tracking';
  var payload = {
    'token' : token_slack,
    'channels': channel,
    'file':chartImage,
    'filename': 'graph',
  };
  var params = {
    'method' : 'post',
    'payload' : payload
  };
  var response = UrlFetchApp.fetch(filesUpload, params);
  
  
  var chartImage = sheet.getCharts()[1]
    .getBlob().getAs('image/png')
    .setName("chart.png");
  var filesUpload = 'https://slack.com/api/files.upload';
  var channel    = '#health_tracking';
  var payload = {
    'token' : token_slack,
    'channels': channel,
    'file':chartImage,
    'filename': 'graph',
  };
  
  var params = {
    'method' : 'post',
    'payload' : payload
  };
  
  var response = UrlFetchApp.fetch(filesUpload, params);
  
  
  
 var chartImage = sheet.getCharts()[2]
    .getBlob().getAs('image/png')
    .setName("chart.png");
  var filesUpload = 'https://slack.com/api/files.upload';
  var channel    = '#health_tracking';
  var payload = {
    'token' : token_slack,
    'channels': channel,
    'file':chartImage,
    'filename': 'graph',
  };
  var params = {
    'method' : 'post',
    'payload' : payload
  };
  var response = UrlFetchApp.fetch(filesUpload, params);
  
  
  var message="Google App Srciptから送信" ;
  payload = {
   'message' : message,
   'imageFile': chartImage 
  }
  sendHttpPost(payload, jtoken);
  
}


