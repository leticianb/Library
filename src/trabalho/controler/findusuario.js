function selectAuthor() {

    $('.alert').click(function(e) {
        e.preventDefault()
        let id = $(this).attr('id')
        let nome = $(this).attr('data-name')
        $('#result').append(`
            <div class="alert alert-primary">${nome}</div>
            <input type="hidden" name="usuario_idusuario" value="${id}" />
        `)
        $('#' + id).hide()
    })

}

$(document).ready(function() {

    $('#autor').keyup(function(e) {
        e.preventDefault()

        let nome = `nome=${$(this).val()}`

        if ($(this).val().length >= 3) {

            $('#autores').empty()

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: nome,
                url: 'src/usuario/model/findusuario.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#autores').append(`<div id="${dado.idusuario}" data-name="${dado.nome}" class="alert alert-secondary">${dado.nome}</div>`)
                    }
                    selectAuthor()
                }
            })

        } else {
            $('#autores').empty()
        }

    })
})