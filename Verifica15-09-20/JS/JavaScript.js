let jsonRegioni = '[{"nome":"Piemonte"},{"nome":"Lombardia"},{"nome":"Veneto"},{"nome":"Puglia"}]';
let jsonProvince = '[{"nome":"Torino"},{"nome":"Cuneo"},{"nome":"Venezia"},{"nome":"Milano"}]';
let jsonComuni = '[{"nome":"Fossano"},{"nome":"Cuneo"},{"nome":"Bergamo"},{"nome":"Vieste"}]';

function inserireToolTip() {
    let cognome = $("#txtcognome");
    cognome.attr('title', 'Inserire il cognome');

    let nome = $("#txtnome");
    nome.attr('title', 'Inserire il nome');

    let regione = $("#txtregione");
    regione.attr('title', 'Inserire la regione');

    let provincia = $("#txtprovincia");
    provincia.attr('title', 'Inserire la provincia');

    let comune = $("#txtcomune");
    comune.attr('title', 'Inserire il comune di residenza');

    let data = $("#txtdnascita");
    data.attr('title', 'Inserire la data di nascita');

    let altezza = $("#txtaltezza");
    altezza.attr('title', 'Inserire la altezza');

    let fratellisorelle = $("#txtfratsore");
    fratellisorelle.attr('title', 'Inserire se ci sono fratelli o sorelle');
}

function creazioneButton() {
    $("#btnInvia").click(function () {
        let string = "[" + "{" + '"cognome' + '":"' + $("#txtcognome").val() + '"},'
            + "{" + '"nome' + '":"' + $("#txtnome").val() + '"},' + "{" + '"regione' + '":"' + $("#txtregione").val() + '"},'
            + "{" + '"provincia' + '":"' + $("#txtcomune").val() + '"},' + "{" + '"datanascita' + '":"' + $("#txtdnascita").val() + '"},'
            + "{" + '"altezza' + '":"' + $("#txtaltezza").val() + '"},' + "{" + '"fratellisorelle' + '":"' + $("#txtfratsore").val() + '"}]';
        //let dialog = $("<div></div>").dialog()
        let p = $("<p>" + string + "</p>");
        let dialog = $("<div></div>");
        dialog.append(p);
        dialog.dialog()
    });

    $("#btnAnnulla").click(function () {
        $("input").val("");
    });
}
function creaDivAccordion() {
    let nomi = ["Regione", "Provincia", "Comune", "DataNascita", "Altezza", "FratSore"];
    $("#wrapperAccordion div").each(function (index) {
        $(this).prop('id', nomi[index])
    });

    // Regione ------------------------------
    let regione = $("#Regione"), lista = $("<ul></ul>");
    $.each(JSON.parse(jsonRegioni), function (index, element) {
        $.each(element, function (subindex, subelement) {
            lista.append('<li id="regione" onclick="scriviDato(this)">' + subelement + '</li>');
        })
    });
    lista.appendTo(regione);

    // Provincia ----------------------------
    let provincia = $("#Provincia"), listaProv = $("<ul></ul>");
    $.each(JSON.parse(jsonProvince), function (index, element) {
        $.each(element, function (subindex, subelement) {
            listaProv.append('<li id="provincia" onclick="scriviDato(this)">' + subelement + '</li>');
        })
    });
    listaProv.appendTo(provincia);

    // Comune ----------------------------
    let comune = $("#Comune"), listacomune = $("<ul></ul>");
    $.each(JSON.parse(jsonComuni), function (index, element) {
        $.each(element, function (subindex, subelement) {
            listacomune.append('<li id="comune" onclick="scriviDato(this)">' + subelement + '</li>');
        })
    });
    listacomune.appendTo(comune);
}

function scriviDato(id) {
    $("#txt" + id.id).val(id.innerText);
}

$(function () {
    $("#wrapperAccordion").accordion({
        heightStyle: "content"
    });
});

function creaDivDatePicker() {
    $("#DataNascita").datepicker({dateFormat: "dd/mm/yy"});
    $("#DataNascita").datepicker("option", "minDate", new Date(2019, 0, 1));
    $("#DataNascita").datepicker("option", "maxDate", new Date(2019, 11, 31));
    $("#DataNascita").datepicker("setDate", "01/06/2019");
    $("#DataNascita").on("change", function () {
        $("#txtdnascita").val($(this).val());
    });
}

function creaSliderVerticale() {
    $("#Altezza").slider({
        orientation: "vertical",
        range: "min",
        min: 100,
        max: 210,
        step: 0.5,
        value: 150,
        slide: function (event, ui) {
            $("#txtaltezza").val(ui.value);
        }
    });
}

function creaSpinner() {
    $("#FratSore").append($("<input id='FS'>"));
    $("#FS").spinner({
        min: 0,
        max: 10,
        spin: function (event, ui) {
            $("#txtfratsore").val(ui.value)
        }
    });
    $("#FS").spinner("value", 0);
}

$(document).ready(function () {
    inserireToolTip();
    creazioneButton();
    creaDivAccordion();
    creaDivDatePicker();
    creaSliderVerticale();
    creaSpinner();
});

$(function () {
    $(document).tooltip();
});