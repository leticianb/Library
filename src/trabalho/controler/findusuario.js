$(document).ready(function() {

    $('#autor').keyup(function(e) {
        e.preventDefault()

        let nome = `nome=${$(this).val()}`

        $('#autores').empty()
        $('#listar').empty()


        if ($(this).val().length >= 3) {

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: nome,
                url: 'src/usuario/model/findusuario.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#autores').append(`<input type="text" name="" id="${dado.idusuario}" class="form-control find" value="${dado.nome}" disabled>`)
                    }
                    $('.find').click(function(e) {
                        e.preventDefault()


                        $('#autores').empty()
                        $('#autor').empty()
                        $('#listar').append(`<input type="text" name="" id="${dado.idusuario}" class="form-control find" value="${dado.nome}">`)
                    })
                }
            })

        }

    })
})