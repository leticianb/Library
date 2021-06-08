$(document).ready(function() {

    $('#table-eixo').on('click', 'button.btn-view', function(e) {

        e.preventDefault()



        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de eixo tecnológico')

        let ideixo = `ideixo=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ideixo,
            url: 'src/eixo/model/vieweixo.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/eixo/view/formeixo.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modaleixo').modal('show')
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