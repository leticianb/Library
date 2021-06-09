$(document).ready(function() {

    $('#table-eixo').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()



        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição de eixo tecnológico')

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
                        $('#ideixo').val(dado.dados.ideixo)
                    })
                    $('.btn-save').show()
                        ('.btn-save').removeAttr('data-operation')
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