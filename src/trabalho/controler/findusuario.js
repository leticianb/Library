function listAuthor() {

    $('.alert').click(function(e) {
        e.preventDefault()

        let id = $(this).attr('id')
        let nome = $(this).attr('name')

        $('#listar').append(`
        <div class="alert alert-primary">${nome}</div>
        <input type="hidden" name="usuario_idusuario[]" value="${id}">
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
                        // Pode-se usar tanto id="" & name="" como também data-id=""" & data-name=""
                        $('#autores').append(`<div id="${dado.idusuario}" name="${dado.nome}" class="alert alert-secondary">${dado.nome}</div>`)
                            // div não é editável e por isso colocar uma div
                    }
                    listAuthor()
                }
            })

        } else {
            $('#autores').empty()
        }
    })
})