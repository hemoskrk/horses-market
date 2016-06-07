app.controller('helpCtl', function ($scope) {
    debugger;
    load_help();

    function load_help() {
    
        if (default_language == 'english') {            
            document.getElementById('englishHelp').style.display = "block";
            document.getElementById('arabicHelp').style.display = "none";
        }
        else {            
            document.getElementById('englishHelp').style.display = "none";
            document.getElementById('arabicHelp').style.display = "block";
        }
    }
});