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
      log("Application is now online");
      //alert(localStorage.getItem('todo'));
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
      var todos = document.getElementById("todos");
      todos.innerHTML = '';
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