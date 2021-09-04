$(document).ready(function() {

    $('#autor').keyup(function(e) {
        e.preventDefault()

        let nome = `nome=${$(this).val()}`

        $('#autores').empty()
        fix_user = 0


        if ($(this).val().length >= 3) {

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: nome,
                url: 'src/usuario/model/findusuario.php',
                success: function(dados) {
                    $('#autores').empty()
                    $('#autores-btn').empty()
                    if (Object.values(dados).length === 0) {
                        $('#autores').append(`<input type="text" name="" id="" class="form-control" value="Nenhum resultado encontrado" disabled>`)
                    } else {

                        for (const dado of dados) {
                            $('#autores').append(`<input type="text" name="" id="" class="form-control" value="${dado.nome}" disabled></input>`)
                            $('#autores').append(`<input type="hidden" name="idusuario" id="idusuario" value="">`)
                            $('#autores-btn').append(`<button class="btn btn-dark fix_user" id="${dado.idusuario}" type="button"><i class="fas fa-check-circle"></i></button>`)
                        }
                    }
                }
            })
        }
    })
})