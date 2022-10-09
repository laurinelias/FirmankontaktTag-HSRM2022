
        
    
        function filter() {
            var input, filter, div, li, a, i, txtValue;
            input = document.getElementById("input");
            filter = input.value.toUpperCase();
            div = document.getElementById("searchwords");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    