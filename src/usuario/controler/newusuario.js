$(document).ready(function() {
$('.btn-new').click(function(e) {
    e.preventDefault()

    $('.modal-title').empty()
    $('.modal-body').empty()

    $('.modal-title').append('Adicionar novo usuário')
    $('.modal-body').load('src/usuario/view/formusuario.html', function() {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            url: 'src/tipo-usuario/model/alltipo.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#tipo_usuario_idtipo_usuario').append(`<option value="${dado.idtipo_usuario}">${dado.descricao}</option>`)
                }
            }
        })
    })
    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/curso/model/allcurso.php',
        success: function(dados) {
            for (const dado of dados) {
                $('#idcurso').append(`<option value="${dado.idcurso}">${dado.nome}</option>`)
            }
        }
    })
})
$('.btn-save').show()
$('.btn-save').attr('data-operation', 'insert')
$('#modalusuario').modal('show')
})
})