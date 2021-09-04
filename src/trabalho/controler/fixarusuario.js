$(document).ready(function() {
    $('#autores-btn').on('click', 'button.fix_user', function(e) {
        e.preventDefault()

        let idusuario = `idusuario=${$(this).attr('id')}`

        $.ajax({
            dataType: 'json',
            type: 'POST',
            assync: true,
            data: idusuario,
            url: 'src/usuario/model/fixarusuario.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#resultadoautor').append(`<input type="text" name="nome" id="nome" class="form-control" value="${dado.nome}" disabled></input>`)
                    $('#resultadoautor-btn').append(`<button class="btn btn-dark unpin_user" id="" nome="" type="button"><i class="fas fa-user-times"></i></button>`)
                }
            }
        })
    })
})