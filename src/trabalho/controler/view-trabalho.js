$(document).ready(function() {

    $('#table-trabalho').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de trabalho cadastrado')

        let idtrabalho = `idtrabalho=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idtrabalho,
            url: 'src/trabalho/model/view-trabalho.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/trabalho/view/form-trabalho.html', function() {
                        $('#titulo').val(dado.dados.titulo)
                        $('#titulo').attr('readonly', 'true')
                        $('#ano').val(dado.dados.ano)
                        $('#ano').attr('readonly', 'true')
                        $('#numeropaginas').val(dado.dados.numeropaginas)
                        $('#numeropaginas').attr('readonly', 'true')
                        $('#resumo').val(dado.dados.resumo)
                        $('#resumo').attr('readonly', 'true')
                        $('#orientador').val(dado.dados.orientador)
                        $('#orientador').attr('readonly', 'true')
                        $('#coorientador').val(dado.dados.coorientador)
                        $('#coorientador').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-trabalho').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Library', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})