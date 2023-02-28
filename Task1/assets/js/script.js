$(document).ready(function () {



    let fullname = [];

    if (localStorage.getItem("Students") != null) {
        fullname = JSON.parse(localStorage.getItem("Students"));
    }


    $("button").click(function (e) {
        e.preventDefault();

        $("ul").empty();
        let studentName = $(".name").val()
        let studentSurname = $(".surname").val()



        if (studentName != "" || studentSurname != "") {
            fullname.push({
                name: studentName,
                surname: studentSurname
            })
        }

        localStorage.setItem("Students", JSON.stringify(fullname))







        for (let i = 0; i < fullname.length; i++) {
            $("ul").append(`<li class="list-group-item" data-id="${i}">${fullname[i].name + fullname[i].surname}</li>`)
        }

    })





    for (let i = 0; i < fullname.length; i++) {
        $("ul").append(`<li class="list-group-item" data-id="${i}">${fullname[i].name + fullname[i].surname}</li>`)
    }




    $("li").each(function () {
        $(this).click(function () {
            let newFullname = [];
            for (let i = 0; i < fullname.length; i++) {
                if ($(this).attr("data-id") != i) {
                    newFullname.push({
                        name: fullname[i].name,
                        surname: fullname[i].surname
                    })
                }
            }
            localStorage.setItem("Students", JSON.stringify(newFullname))
            window.location.reload();

            if (newFullname.length == 0) {
                localStorage.removeItem("Students");
                $("ul").empty()
            }
            else {
                $("ul").empty()
                for (let i = 0; i < newFullname.length; i++) {
                    $("ul").append(`<li class="list-group-item" data-id="${i}">${newFullname[i].name + newFullname[i].surname}</li>`)
                }
            }
        })
    })

})