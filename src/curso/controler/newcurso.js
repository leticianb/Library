$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo curso')
        $('.modal-body').load('src/curso/view/formcurso.html', function() {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/eixo/model/alleixo.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#eixo_ideixo').append(`<option value="${dado.ideixo}">${dado.nome}</option>`)
                    }
                }
            })
        })
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modalcurso').modal('show')
    })
})