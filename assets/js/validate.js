"use strict";

$(document).ready(function () {
        $('#callback').validate({
            rules: {
                name: {
                    required: true, //поле обязательно для заполнения
                    minlength: 3    //в поле должно быть не меньше 3 символов
                },
                phone: {
                    required: true, //поле обязательно для заполнения
                    minlength: 3    //в поле должно быть не меньше 3 символов
                }

            },
                messages: {

                    name: {
                        required: "Please enter text",
                        minlength: "B поле должно быть не меньше 3 символов"
                    },
                    phone: {
                        required: "Please enter text",
                        minlength: "B поле должно быть не меньше 3 символов"
                    }
            }
        });

});
