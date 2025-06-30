$(document).ready(function() {
    // Inicializa o Select2 para Aro
    $('#aroDropdown').select2({
        placeholder: "Selecione o(s) aro(s)", // Texto que aparece quando nada está selecionado
        allowClear: true // Permite limpar a seleção
    });

    // Inicializa o Select2 para Tala
    $('#talaDropdown').select2({
        placeholder: "Selecione a(s) tala(s)",
        allowClear: true
    });

    // Inicializa o Select2 para Furação (PCD)
    $('#pcdDropdown').select2({
        placeholder: "Selecione a(s) furação(ões)",
        allowClear: true
    });

    // Inicializa o Select2 para Acabamento
    $('#finishDropdown').select2({
        placeholder: "Selecione o(s) acabamento(s)",
        allowClear: true
    });

    // Para a Marca, como geralmente é uma seleção única, não adicionamos 'multiple'.
    // Mas, se quiser que o estilo seja consistente com os outros, pode inicializar assim:
    $('#marcaDropdown').select2({
        placeholder: "Selecione a marca",
        allowClear: true // Permite limpar a seleção, retornando para "Todas"
    });

    // Se você não quiser que "Todas" seja uma opção selecionável com clear, pode remover o allowClear
    // e adicionar uma opção vazia com o texto "Todas" como a primeira opção no HTML.
    // Exemplo: <option></option> no HTML e placeholder: "Todas" no JS
});