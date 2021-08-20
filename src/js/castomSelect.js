let select = function () {
    let selectHeder = document.querySelectorAll ('.select__heder');
    let selectItem = document.querySelectorAll('.select__item');
    let formDoc = document.querySelector('.form');

    selectHeder.forEach(item => {
        item.addEventListener('click', selectToggle)
    });


    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });


    function selectToggle() {
        
        

        // console.log(formDoc);
        // console.log(this);

        // formDoc.querySelectorAll('.select').classList.toggle('is-active');

        ddd = formDoc.querySelector('.is-active');

         console.log(ddd);
        
        if (ddd != null)
        {
            // console.log('f');
       
            ddd.classList.remove('is-active');
            ddd.querySelector('.select__icon-expand').classList.toggle('select__icon-none');
            ddd.querySelector('.select__icon-collapse').classList.toggle('select__icon-none');
            // console.log('t');
        };
      
        //.classList.remove('is-active');
                // querySelector('is-active');
        // console.log(dddd);

        this.parentElement.classList.toggle('is-active');
        select = this.closest('.select');
        select.querySelector('.select__icon-expand').classList.toggle('select__icon-none');
        select.querySelector('.select__icon-collapse').classList.toggle('select__icon-none');
        // selectIconExpand = select.querySelector('.select__icon-expand');
        // selectIconCollapse = select.querySelector('.select__icon-collapse');
        // selectIconExpand.classList.toggle('select__icon-none');
        // selectIconCollapse.classList.toggle('select__icon-none');


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