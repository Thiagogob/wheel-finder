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

        $('#localEstoqueDropdown').select2({
        placeholder: "Selecione o local de estoque", // Placeholder para o dropdown de local
        // Como ele sempre terá um valor (SP ou SC), allowClear pode não ser necessário,
        // mas você pode adicioná-lo se quiser uma opção "limpa" para "Ambos" ou "Nenhum"
        // allowClear: true
    });

        $('#fabricaDropdown').select2({
        placeholder: "Selecione a fábrica",
        allowClear: false // Como "TODAS" é a opção padrão, não permitir limpar
    });
});