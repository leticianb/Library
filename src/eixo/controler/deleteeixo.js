$(document).ready(function() {

    $('#table-eixo').on('click', 'button.btn-delete', function(e) {


        e.preventDefault()

        let ideixo = `ideixo=${$(this).attr('id')}`

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
                    data: ideixo,
                    url: 'src/eixo/model/deleteeixo.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Library',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-eixo').DataTable().ajax.reload()
                    }
                })
            }
        }))
    })
})