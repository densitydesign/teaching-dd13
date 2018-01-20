$(document).ready(function () {

    var labels = ["University of California", "Milo Yannopoulos", "UC Berkeley", "Donald Trump", "Ann Coulter", "Southern Poverty Law Center", "Barack Obama", "Leslie Jones", "Richard Spencer"]
    $(window).on("load", function () {
        var $categories = $(".sigma-network").contents().find(".list.cf a");
        //    console.log($categories);
        $categories.each(function (i) {
            //        $($categories[i]).text(labels[i]);
            var re = new RegExp('(<div.*div>).*')
            var label = $($categories[i]).html();
            var newString = label.replace(/(<div.*div>).*/g, '$1 ' + labels[i]);
            $($categories[i]).html(newString);
        })
    })

})
