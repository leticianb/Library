$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo curso')
        $('.modal-body').load('src/curso/view/formcurso.html')
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modalcurso').modal('show')
    })
})