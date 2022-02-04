window.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsParent = document.querySelector('.tabheader__items');
    const tabContent = document.querySelectorAll('.tabcontent');


    function hideTabContent() {

        tabContent.forEach(item => {
            item.classList.add('none');
            item.classList.remove('show', 'fade')
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })

    }


    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('none');
        tabContent[i].classList.add('tabheader__item_active')

    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', event => {
        let x = event.target;
        if (x && x.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (x === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });


});



