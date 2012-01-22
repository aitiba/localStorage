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
      alert(JSON.parse(localStorage.getItem('notas')));
        alert("success");
        if (localStorage.getItem('notas')) {
        
         $.ajax({
      type: "POST",
      url: "some.php",
      data: "name=" + localStorage.getItem('notas'),
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
      try {
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
  }
      //html5rocks.indexedDB.open();
      alert(JSON.parse(localStorage.getItem('notas')));
  }, true);