$(document).ready(function() {

    $('#table-usuario').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de usuario')

        let idusuario = `idusuario=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idusuario,
            url: 'src/usuario/model/viewusuario.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/usuario/view/formusuario.html', function() {
                        $('#nome').val(dado.dados.nome)

                        $('#email').val(dado.dados.email)

                        $('#senha').val(dado.dados.senha)
                        $('#idusuario').val(dado.dados.idusuario)

                        var tipo = dado.dados.tipo_usuario_idtipo_usuario
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: 'src/tipo-usuario/model/alltipo.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.idtipo_usuario == tipo) {
                                        $('#tipo_usuario_idtipo_usuario').append(`<option selected value="${dado.idtipo_usuario}">${dado.descricao}</option>`)
                                    } else {
                                        $('#tipo_usuario_idtipo_usuario').append(`<option value="${dado.idtipo_usuario}">${dado.descricao}</option>`)
                                    }
                                }
                            }
                        })

                        var tipo = dado.dados.curso_idcurso
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: 'src/curso/model/allcurso.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.idcurso == curso) {
                                        $('#curso_idcurso').append(`<option selected value="${dado.idtcurso}">${dado.nome}</option>`)

                                    } else {
                                        $('#curso_idcurso').append(`<option  value="${dado.idtcurso}">${dado.nome}</option>`)
                                    }
                                }
                            }
                        })

                    })
                    $('.btn-save').show()
                    $('#modalusuario').modal('show')
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