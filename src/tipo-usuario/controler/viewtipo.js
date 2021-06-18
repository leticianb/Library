$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-view', function(e) {

        e.preventDefault()



        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de eixo tecnológico')

        let idtipo_usuario = `idtipo_usuario=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idtipo_usuario,
            url: 'src/tipo-usuario/model/viewtipo.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo-usuario/view/formtipo.html', function() {
                        $('#descricao').val(dado.dados.descricao)
                        $('#descricao').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modaltipo').modal('show')
                } else {
                    Swal.fire({
                        title: 'Library',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})