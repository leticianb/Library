$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()



        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo trabalho')

        $('.modal-body').load('src/trabalho/view/formtrabalho.html', function() {

        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modaltrabalho').modal('show')
    })
})