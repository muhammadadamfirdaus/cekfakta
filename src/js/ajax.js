// summon eidolons... don't spell any mistake!
function get(url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
      if(xhr.status == 200){
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.onerror = function(){
      reject(xhr.statusText);
    }
    xhr.send();
  });
}


// check if latest card
