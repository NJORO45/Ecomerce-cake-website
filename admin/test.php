<!DOCTYPE html>
<html>
<head>
  <title>Ajax JavaScript File Upload Example</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <!-- HTML5 Input Form Elements -->
  <input id="fileupload" type="file" name="fileupload" />
  <button id="upload-button" onclick="uploadFile()">Upload</button>

  <!-- jQuery Ajax File Upload Logic -->
  <script>
  function uploadFile() {
    let file = $('#fileupload')[0].files[0];
    let formData = new FormData();
    formData.append("file", file);

    $.ajax({
      url: 'upload.php',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        alert('The file has been uploaded successfully.');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert('File upload failed: ' + textStatus);
      }
    });
  }
  </script>
</body>
</html>
