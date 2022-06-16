function app(){
    const modalWindow = document.querySelector('.modal__window'),
          formModalWindow = document.querySelector('[data-modalForm]'),
          modalWindow1 = document.querySelector('.modal__window1'),
// accessing buttons
          closeButton = document.getElementById('close'),
          bookTourButtonArr = document.querySelectorAll('[data-modal]'),
          tourProgramButton = document.querySelector('#tour__program'),
          contactsButton1 = document.getElementById('contacts1'),
          tourProgramButton1 = document.querySelector('#tour__program1'),
          ourTeamButton = document.getElementById('our__team'),
          ourTeamButton1 = document.getElementById('our__team1'),
          tourCoastButton = document.querySelector('#tour__cost'),
          tourCoastButton1 = document.querySelector('#tour__cost1'),
          contactsButton = document.getElementById('contacts'),
          backSiteButtom = document.querySelector('.back__site'),
          contactsFormButton = document.querySelector('[data-formBtn]'),
          modalFormButton = document.querySelector('[data-modalFormBtn]'),
//accessing page elements          
          tourProgramFooter = document.querySelector('.tour-program__footer'),
          tourProgramContainer = document.querySelector('.tour-program__container'),
          ourTeam = document.querySelector('.our-team__container'),
          contactForm = document.getElementById('contact__form'),
          footer = document.querySelector('.footer');
//defining scroll points 
    let coordProgramTour = getCoords(tourProgramContainer).top;
    let coordCostTour = getCoords(tourProgramFooter).top;
    let coordOurTeam = getCoords(ourTeam).top;
    let coordContacts = getCoords(footer).top
    const regName = /\D[а-яё]/gi ;
    const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;     
    let name = '';
    let phone = '';
    let userContacts = {
        name: '',
        phone: ''
    };
    //checking the status of input fields
    if((name == false && phone == false)){
            contactsFormButton.disabled = true;
    }
    contactForm.name.addEventListener('input', () =>{
        name = contactForm.name.value;
        if(regName.test(name)){
            contactForm.name.style.borderColor = 'green';
            if(regPhone.test(phone)){
                contactsFormButton.disabled = false;
            }
        }
    });
    contactForm.phone.addEventListener('input', () =>{
        phone = contactForm.phone.value;
        if(regPhone.test(phone)){
            contactForm.phone.style.borderColor = 'green';
            if(regName.test(name)){
                contactsFormButton.disabled = false;
            }
        }
    });
    
    function showMas(form, button){
        userContacts.name = name;
        userContacts.phone = phone;
        form.name.value = '';
        form.phone.value = '';
        name = '';
        phone = '';
        if((name == false && phone == false)){
            button.disabled = true;
        } 
        form.name.style.borderColor = 'white';
        form.phone.style.borderColor = 'white'; 
        showModalWindow1();
    }
    contactsFormButton.addEventListener('click', () => {
        showMas(contactForm, contactsFormButton);
    });


    function addScrollEventButtons(el, scroll){
        el.addEventListener('click', () =>{
            window.scrollTo({
                top: scroll,
                behavior: 'smooth'
            });
        });
    }
    addScrollEventButtons(tourProgramButton, coordProgramTour);
    addScrollEventButtons(tourCoastButton, coordCostTour);
    addScrollEventButtons(ourTeamButton, coordOurTeam);
    addScrollEventButtons(contactsButton, coordContacts);
    addScrollEventButtons(ourTeamButton1, coordOurTeam);
    addScrollEventButtons(tourCoastButton1, coordCostTour);
    addScrollEventButtons(tourProgramButton1, coordProgramTour);
    addScrollEventButtons(contactsButton1, coordContacts);
    
    function showModalWindow(){
        modalWindow.classList.remove('invisible');
        deg = 90;
        let timer = setInterval(() =>{
            modalWindow.style.transform = `rotateX(${--deg}deg)`;
            if(deg <= 0){
                clearInterval(timer);
            }
        },5);
        document.body.style.overflow = 'hidden';
        if((name == false && phone == false)){
            modalFormButton.disabled = true;
        }
        formModalWindow.name.addEventListener('input', () =>{
            name = formModalWindow.name.value;
            if(regName.test(name)){
                formModalWindow.name.style.borderColor = 'green';
                if(regPhone.test(phone)){
                    modalFormButton.disabled = false;
                }
            }
        });
        formModalWindow.phone.addEventListener('input', () =>{
            phone = formModalWindow.phone.value;
            if(regPhone.test(phone)){
                formModalWindow.phone.style.borderColor = 'green';
                if(regName.test(name)){
                    modalFormButton.disabled = false;
                }
            }
        });
        modalFormButton.addEventListener('click', () => {
            showMas(formModalWindow, modalFormButton);
        });
    }
    function hidesModalWindow(){
        deg = 0;
        let timer = setInterval(() =>{
            modalWindow.style.transform = `rotateX(${++deg}deg)`;
            if(deg >= 90){
                clearInterval(timer);
                modalWindow.classList.add('invisible');
            }
        },5);
        document.body.style.overflow = '';
    }
    function showModalWindow1(){
        modalWindow1.classList.remove('invisible');
        modalWindow.classList.add('invisible');
        deg = 90;
        let timer1 = setInterval(() =>{
            modalWindow1.style.transform = `rotateX(${deg--}deg)`;
            if(deg <= 0){
                clearInterval(timer1);
            }
            
        },5);
        document.body.style.overflow = 'hidden';
    }
    function hidesModalWindow1(){
        deg1 = 0;
        let timer2 = setInterval(() =>{
            modalWindow1.style.transform = `rotateX(${deg1++}deg)`;
            console.log(deg1);
            if(deg1 >= 90){
                clearInterval(timer2);
                modalWindow1.classList.add('invisible');
                deg1 = 0;
            }
        },5);
        document.body.style.overflow = '';
    }

    closeButton.addEventListener('click',hidesModalWindow);
    bookTourButtonArr.forEach((el) => {
        el.addEventListener('click', showModalWindow);
    });
    backSiteButtom.addEventListener('click', hidesModalWindow1);
    
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
      
        return {
          top: box.top + window.pageYOffset,
          right: box.right + window.pageXOffset,
          bottom: box.bottom + window.pageYOffset,
          left: box.left + window.pageXOffset
        };
    }
}
app();