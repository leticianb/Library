$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#formcurso').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/curso/model/savecurso.php',
            success: function(dados) {
                Swal.fire({
                    title: 'library',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modalcurso').modal('hide')
                $('#table-curso').DataTable().ajax.reload()
            }
        })
    })

})