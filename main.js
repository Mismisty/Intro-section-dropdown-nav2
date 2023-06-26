let open = document.getElementById("open"),
    close = document.getElementById("close"),
    menu = document.getElementById("menu2");

    common = (x,y,z) =>{
        x.addEventListener("click",()=>{
            x.classList.toggle("hide");
            y.classList.toggle("hide");

            if(z== "slide-in"){
                menu.classList.toggle("slide");
            }

            if(z== "slide-out"){
                menu.classList.toggle("slide")
            }
        })
    }

    common(open,close, "slide-in");
    common(close,open, "slide-out");

    //TO HIDE AND SHOW SUB-MENUS

    let featuresOne = document.getElementById("features");
    let dropdownMenu = document.getElementById("sub-menu");
   

    let toggleDropdown = function () {
        dropdownMenu.classList.toggle("show");
       
    };

    featuresOne .addEventListener("click", function (e){
        e.stopPropagation();
        toggleDropdown();
    });

    let companyTwo = document.getElementById("company");
    let subMenu = document.getElementById("submenu");
   

    let clickDropdown = function (){
        subMenu.classList.toggle("show");
       
    };

    companyTwo.addEventListener("click", function (e){
        e.stopPropagation();
        clickDropdown();
    });



    let parent1 = document.querySelector('.parent1');

    parent1.addEventListener('click', () => {
        parent1.classList.toggle('active');
    });


    let parent2 = document.querySelector('.parent2');

    parent2.addEventListener('click', () => {
        parent2.classList.toggle('active');
    });


    //SECOND ONE