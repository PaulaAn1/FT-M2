/* let lista1 = () => {
  let amiLista = $('#lista');
  amiLista.empty();
  $.get(`http://localhost:5000/amigos`, data => {
    for (let i = 0; i < data.length; i++) {
      amiLista.append(`<li>${data[i].name}</li>`);
    }
  }) 
}

$('#boton').click(lista1)

$('#search').click(() => {
  let id = $('#input').val();
  $.get(`http://localhost:5000/amigos/${id}`, data => {
      $('#amigo').text(data.name);
  });
})

$('#delete').click(() => {
  let id = $('#inputDelete').val();
   
    $.ajax({
      url:`http://localhost:5000/amigos/${id}`,
      type: 'DELETE',
      success: () => {
        $('#success').text('Tu amigo ha sido eliminado de manera exitosa');
        lista1();
      }
  })
}) */

let list1 = () => {
  let listaAmigos = $('#lista');
  listaAmigos.empty();
  $.get(`http://localhost:5000/amigos`, data => {
    for (let i = 0; i < data.length; i++) {
      listaAmigos.append(`<li>${data[i].name}</li>`);
    }
  })
}

$('#boton').click(list1)

$('#search').click(() => {
  let id = $('#input').val();
  $.get(`http://localhost:5000/amigos/${id}`, data => {
    $('#amigo').text(data.name);
  })
})

$('#delete').click(() => {
  let id = $('#inputDelete').val();

  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: 'DELETE',
    success: () => {
      $('#success').text('Tu amigo ha sido eliminado de manera exitosa');
      list1()
    }
  })
})