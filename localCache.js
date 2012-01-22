    // when the page loads, set the status to online or offline
    function loadDemo() {
        if (navigator.onLine) {
            log("Initial status: online");
            return;
        } else {
            log("Initial status: offline");
            return;
        }
    }
        

    // add listeners on page load and unload
    window.addEventListener("load", loadDemo, true);

  log = function() {
      var p = document.createElement("p");
      var message = Array.prototype.join.call(arguments, " ");
      p.innerHTML = message;
      document.getElementById("info").appendChild(p);
  }
  
  /*
   * log each of the events fired by window.applicationCache
   */

  

  window.applicationCache.onnoupdate = function(e) {
    //alert('onnoupdate');
      log("No application update found");
  }

  window.applicationCache.onupdateready = function(e) {
    alert('onupdateready');
      log("Application update ready");
      //window.applicationCache.onchecking;
  }

  window.applicationCache.onchecking = function(e) {
    alert('onchecking');
      log("Checking for application update");
       if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          // Swap it in and reload the page to get the new hotness.
          window.applicationCache.swapCache();
          if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
          }
       } else {
          // Manifest didn't changed. Nothing new to server.
       }
  }

  window.applicationCache.onobsolete = function(e) {
      log("Application obsolete");
  }

  window.applicationCache.ondownloading = function(e) {
    alert ('Downloading');
      log("Downloading application update");
  }

  window.applicationCache.oncached = function(e) {
    alert('cached');
      log("Application cached");
  }

  window.applicationCache.onerror = function(e) {
    alert('errorr');  
    alert(e);
      log("Application cache error");
  }

  window.applicationCache.onprogress = function(e) {
    //alert('progress');
      log("Application Cache progress");
  }
  
 /*var i=0;
for (i=0;i<=5;i++)
{
var foo = localStorage.getItem('persona.'+i+'.nombre');
alert(foo); //bar
var foo = localStorage.getItem('persona.'+i+'.apellido');
alert(foo); //habla
}*/
//alert( JSON.stringify({ name : 'obj' }));
//localStorage.setItem('a', JSON.stringify({ name : 'obj' }));
//alert(JSON.parse(localStorage.getItem('a')));

window.addEventListener("online", function(e) {
      alert(localStorage.getItem('todo'));
      //  alert("success");
        //alert(navigator.connection.type);
        //if(navigator.connection.type != 'none') {
         //   alert('pasa');
        //}
        if (localStorage.getItem('todo')) {
      //  alert('entra');
         $.ajax({
      type: "POST",
      url: "some.php",
      data: "name=" + localStorage.getItem('todo'),
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
      localStorage.clear();
    })
    } else {
        alert('No data to import');
    }
});

  window.addEventListener("offline", function(e) {
      log("Application is now offline");
     /* try {
      localStorage.setItem('notas', JSON.stringify({
      "0": [
          "aitor",
          "ibañez",
          "datos"
      ],
      "1": [
          "paco",
          "pill",
          "buena"
      ]
    }));
  } catch (e) {
      if (e == QUOTA_EXCEEDED_ERR) {
          alert('el almacén local excede el tamaño máximo permitido');
      }
  }*/
      //html5rocks.indexedDB.open();
     // alert(JSON.parse(localStorage.getItem('notas')));
    var submit = document.getElementById("submit");
    submit.addEventListener('click',addTodo,false);
  }, true);

  function addTodo() {
         try {
          var todo = document.getElementById("todo");
          localStorage.setItem('indice', 1);
          localStorage.setItem('todo', todo.value);
          var todos = document.getElementById("todos");
          todos.innerHTML += localStorage.getItem('todo') + '<br />';
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('el almacén local excede el tamaño máximo permitido');
            }
        }
        todo.value = "";
      }
  /*
   * Convert applicationCache status codes into messages
   */
  showCacheStatus = function(n) {
      statusMessages = ["Uncached","Idle","Checking","Downloading","Update Ready","Obsolete"];
      return statusMessages[n];
  }

  install = function() {
      log("Checking for updates");
      try {
          window.applicationCache.update();
          window.applicationCache.swapCache();
      } catch (e) {
          applicationCache.onerror;
          //log('ERROR');
      }
  }

  onload = function(e) {
      // Check for required browser features
      if (!window.applicationCache) {
          log("HTML5 offline web applications are not supported in your browser.");
          return;
      }


      log("Initial cache status: " + showCacheStatus(window.applicationCache.status));
      document.getElementById("installButton").onclick = install;

  }