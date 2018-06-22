$(document).ready(function () {
    $.getJSON('zapatos.json', function (data) {
        var i = 0;
        var max = data.length;
        var changeImgs = function () {
            if (i != 12) {
                var desc1 = data[i % max].nombre;
                var precio1 = data[i % max].precio;
                var item1 = 'img/' + data[i++ % max].foto;

                var desc2 = data[i % max].nombre;
                var precio2 = data[i % max].precio;
                var item2 = 'img/' + data[i++ % max].foto;

                var desc3 = data[i % max].nombre;
                var precio3 = data[i % max].precio;
                var item3 = 'img/' + data[i++ % max].foto;

                var desc4 = data[i % max].nombre;
                var precio4 = data[i % max].precio;
                var item4 = 'img/' + data[i++ % max].foto;
                console.log(item1);
                console.log(item2);
                console.log(item3);
                console.log(item4);
                $("#item1").attr("src", item1);
                $("#item2").attr("src", item2);
                $("#item3").attr("src", item3);
                $("#item4").attr("src", item4);
                $(".desc1").text(desc1);
                $(".desc2").text(desc2);
                $(".desc3").text(desc3);
                $(".desc4").text(desc4);
                $(".precio1").text(precio1);
                $(".precio2").text(precio2);
                $(".precio3").text(precio3);
                $(".precio4").text(precio4);
                
                $(".grid-container").html();
            } else {
                i++;
            }
            
            if (i >= max) {
                i = 0;
            }
        };
        console.log(data[0].foto);
        changeImgs();
        let t = setInterval(changeImgs, 3000);
        // $(".item").each(function () {
        //     $(this).append('<img src="img/1.jpg">');
        // });
    });
});