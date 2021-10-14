

function first(){
    // Simular retardo
    console.log('entre a primero');
    setTimeout( function(){console.log(1)}, 3000 )
  }

  function second(){
    console.log(2);
  }
  first();
  second();