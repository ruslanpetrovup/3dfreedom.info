let select = function () {
    let selectHeder = document.querySelectorAll ('.select__heder');
    let selectItem = document.querySelectorAll ('.select__item');

    selectHeder.forEach(item => {
        item.addEventListener('click', selectToggle)
    });


    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });


    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
        select = this.closest('.select');
        selectIconExpand = select.querySelector('.select__icon-expand');
        selectIconCollapse = select.querySelector('.select__icon-collapse');
        selectIconExpand.classList.toggle('select__icon-none');
        selectIconCollapse.classList.toggle('select__icon-none');
    }

    function selectChoose(){
        let text = this.innerText;
        select = this.closest('.select');
        currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

        selectIconExpand = select.querySelector('.select__icon-expand');
        selectIconCollapse = select.querySelector('.select__icon-collapse');
        selectIconExpand.classList.toggle('select__icon-none');
        selectIconCollapse.classList.toggle('select__icon-none');
        if (text != "") {
            select.parentElement.querySelector('.form__label').classList.add('no_empti');
        }
        // console.log(currentText);
    }


};




select();