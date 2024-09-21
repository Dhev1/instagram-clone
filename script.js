const menuItems=document.querySelectorAll('.menu-item');

const messagenotification=document.querySelector('#messages-notifications');
const messages=document.querySelector('.messages');
const message=messages.querySelectorAll('.message');
const messagesearch=document.querySelector('#message-search');

const theme=document.querySelector('#theme');
const thememodal=document.querySelector('.customize-theme');
const fontsizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorpallete=document.querySelectorAll('.choose-color span');
const BG1=document.querySelector('.bg-1');
const BG2=document.querySelector('.bg-2');
const BG3=document.querySelector('.bg-3');


const changeactiveitem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeactiveitem();
        item.classList.add('active');
        if(item.id!='notifications'){
            document.querySelector('.notification-popup').
            style.display='none';
            
        }
        else{
            document.querySelector('.notification-popup').
            style.display='block';
            document.querySelector('#notifications .notifications-count').style.display='none';
        }
    })
})






messagenotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagenotification.querySelector('.notifications-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000);
})
//open modal
const openThemeModal=()=>{
 thememodal.style.display='grid';


}

const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme'))
    { thememodal.style.display='none';
}
}
//close modal
thememodal.addEventListener('click',closeThemeModal);
theme.addEventListener('click',openThemeModal);
//change active class for font
const removeSizeselector=()=>{
    fontsizes.forEach(size =>{
        size.classList.remove('active');
    })
}

//fonts
fontsizes.forEach(size=>{
    size.addEventListener('click',()=>{
    removeSizeselector();
    let fontsize;
    size.classList.toggle('active');

        
            if(size.classList.contains('font-size-1')){
                fontsize='10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontsize='13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontsize='16px';
        root.style.setProperty('----sticky-top-left','2rem');
        root.style.setProperty('----sticky-top-right','-17rem');    }
    else if(size.classList.contains('font-size-4')){
        fontsize='19px';
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontsize='22px';
        root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-right','-35rem');
    }

    //change font size
    document.querySelector('html').style.fontSize=fontsize;
        })
    })

const changecolor=()=>{
    colorpallete.forEach(colorpicker=>{
        colorpicker.classList.remove('active');
    })
}
//change color
    colorpallete.forEach(color=>{
        color.addEventListener('click',()=>{
            let primaryHue;
            changecolor();
            if(color.classList.contains('color-1')){
                primaryHue=252;
            }
       else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})



const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightcolorLightness);
    root.style.setProperty('--white-color-lightness',whitecolorLightness);
    root.style.setProperty('--dark-color-lightness',darkcolorLightness);
}

//change background
let lightcolorLightness;
let darkcolorLightness;
let whitecolorLightness;

BG1.addEventListener('click',()=>{
   

    BG1.classList.add('active');
    BG2.classList.remove('active');
    BG3.classList.remove('active');
    window.location.reload();
    
});

  BG2.addEventListener('click',()=>{
        lightcolorLightness='15%';
        darkcolorLightness='95%';
        whitecolorLightness='20%';

        BG2.classList.add('active');
        BG1.classList.remove('active');
        BG3.classList.remove('active');
       changeBG();
        
    });
    BG3.addEventListener('click',()=>{
        lightcolorLightness='0%';
        darkcolorLightness='95%';
        whitecolorLightness='10%';

        BG3.classList.add('active');
        BG1.classList.remove('active');
        BG2.classList.remove('active');
       changeBG();
        
    });