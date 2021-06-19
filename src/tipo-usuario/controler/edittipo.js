$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()



        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição do tipo usuário')

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
                        $('#idtipo_usuario').val(dado.dados.idtipo_usuario)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
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