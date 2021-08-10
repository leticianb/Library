$(document).ready(function() {

    $('#table-curso').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição de curso')

        let idcurso = `idcurso=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idcurso,
            url: 'src/curso/model/viewcurso.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/curso/view/formcurso.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#idcurso').val(dado.dados.idcurso)
                        var eixo = dado.dados.eixo_ideixo
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: 'src/eixo/model/alleixo.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.ideixo == eixo) {
                                        $('#eixo_ideixo').append(`<option value="${dado.ideixo}">${dado.nome}</option>`)
                                    }
                                }

                                // Criei um laço de repatição para aparecer os demais eixos existentes no banco de dados....
                                for (const eixoFind of dados) {
                                    if (eixoFind.ideixo != eixo) {
                                        $('#eixo_ideixo').append(`<option value="${eixoFind.ideixo}">${eixoFind.nome}</option>`)
                                    }
                                }

                            }
                        })
                    })
                    $('.btn-save').show()
                    $('#modalcurso').modal('show')
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