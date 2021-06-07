$(document).ready(function() {

    $('#table-eixo').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/eixo/model/listeixo.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        "columns": [{
                "data": 'ideixo',
                "className": 'text-center'
            },
            {
                "data": 'nome',
                "className": 'text-center'
            },
            {
                "data": 'ideixo',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="fas fa-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i class="fas fa-edit"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-delete"><i class="fas fa-trash-alt"></i></button>
                    `
                }
            }
        ]
    })
})