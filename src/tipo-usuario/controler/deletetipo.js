$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-delete', function(e) {


        e.preventDefault()

        let idtipo_usuario = `idtipo_usuario=${$(this).attr('id')}`

        Swal.fire({
            title: 'Library',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'

        }).then((result => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: idtipo_usuario,
                    url: 'src/tipo-usuario/model/deletetipo.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Library',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipo').DataTable().ajax.reload()
                    }
                })
            }
        }))
    })
})