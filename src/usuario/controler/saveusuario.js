$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#formusuario').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/usuario/model/saveusuario.php',
            success: function(dados) {
                Swal.fire({
                    title: 'library',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modalusuario').modal('hide')
                $('#table-usuario').DataTable().ajax.reload()
            }
        })
    })

})