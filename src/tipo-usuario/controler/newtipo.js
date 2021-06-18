$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo tipo usuário')
        $('.modal-body').load('src/tipo-usuario/view/formtipo.html')
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modaltipo').modal('show')
    })
})