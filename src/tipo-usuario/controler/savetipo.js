$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#formtipo').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/tipo-usuario/model/savetipo.php',
            success: function(dados) {
                Swal.fire({
                    title: 'library',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modaltipo').modal('hide')
                $('#table-tipo').DataTable().ajax.reload()
            }
        })
    })

})