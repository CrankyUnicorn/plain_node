  function send_xmlhttprequest(path, method, url_query, callback) {

    // get the URL
    const http = new XMLHttpRequest();
    const url = path;
    const params = url_query;

    //normally method is GET or POST
    http.open(method, url + '?' + params, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {

        if (http.responseText) {
          //alert(http.responseText);

          document.open();
          document.write(http.responseText);
          document.close();

        }

        if (callback) {
          callback();
        }

      }
    }

    http.onerror = function () {
      alert("Request failed");
    };

    http.send(null);

    //false prevent form from submitting
    return false;

  }