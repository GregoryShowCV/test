const body = document.querySelector('body');
const loadPageFrame = document.querySelector('.load-page-frame');
const brochureImagePhotoHovers = document.querySelectorAll('.brochure-image-photo');
const videoKnowLedgeExtras = document.querySelectorAll('.video-knoewlegde-extras');
// const sourceElementvideoKnowledgeExtra = videoKnowLedgeExtra.querySelector('source');
const brochureTexts = document.querySelectorAll('.brochure-text');
const brochure = document.querySelector('.brochure');
const brochureTitle = document.querySelector('.brochure-title')
const triangleTexts = document.querySelectorAll('.triangle-text')
const radarButtons = document.querySelectorAll('.radar-button');
var formTextMessage = document.querySelector('#form-text-message')
const todayYears = document.querySelectorAll('.today-years')
const formName =   document.getElementById('name') 
const formLastname =  document.getElementById('last-name');
const email=  document.getElementById('email');
const message=  document.getElementById('message');
const navOpenClose=  document.getElementById('nav-open-close');
const nav=  document.querySelector('nav');
const navButton=  document.getElementById('nav-open-button');
const translateButtons = document.querySelectorAll('.translate-button');
const scrollBtn=  document.getElementById('scroll-btn-sign');
const arrow = document.getElementById("directionArrow");

const radarButtonGo = document.querySelectorAll(".radar-button-go");


const brochureVideo = document.querySelector('.brochure-video');


const Title = document.querySelector('title');
const MenuContentButtons = document.querySelectorAll('.menu-button a');
const NavLogo = document.querySelector('#logo a');
const AboutmeTitles = document.querySelectorAll('#aboutme h4')
const EducationTitle = document.querySelector('#education h2');
const EducationDescriptions = document.querySelectorAll('#education div');
const ProjectTitle = document.querySelector('#project .title');
const BrochureTitle = document.querySelector('.brochure-title');
const BrochureImageTitles = document.querySelectorAll('.brochure-image-title');
const BrochureTexts = document.querySelectorAll('.brochure-text');
const AboutTitle = document.querySelector('#about .title');
const AboutSubTitles = document.querySelectorAll('#about h2');
const ExtraKnowledgeTitle = document.querySelector('#extra-knowledge .title');
const ExtraKnowledgeSubTitle = document.querySelector('#extra-knowledge h3');
const StrengthsTitle = document.querySelector('#strengths .title ');
const TextChangeFrameOutTitles = document.querySelectorAll('.text-change-frame-out p ');
const Contact = document.querySelector('#contact .title');
const ContactFormInput = document.querySelectorAll('#contact input')
const ContactFormTextarea = document.querySelector('#contact textarea')
const ContactFormButton= document.querySelector('#contact button')
const FooterCl= document.querySelectorAll('.footer-cl')


var StateLanguage;
var MessageFormLast;
var MessageFormM;







let lastHoveredElement = null;
let lastHoverElementTriangleText = null;
let lastBrochureText = null;


var currentDate = new Date()

todayYears.forEach(function(element){
    element.textContent =currentDate.getFullYear();
})



window.onload = function()
{
    body.classList.remove('overflow-hidden')
    body.classList.add('overflow-auto')
    loadPageFrame.classList.add('load-page-frame-animation')

}




function linkUnrealEngine()
{
    window.location.href = "pages/UnrealEngine5.html"

}


brochureImagePhotoHovers.forEach((brochureImagePhotoHover, index) => {
    brochureImagePhotoHover.addEventListener('mouseover', () => {
        brochureTitle.classList.add('brochure-title-animation')

        if (lastHoveredElement && lastHoveredElement !== brochureImagePhotoHover) {
            lastHoveredElement.classList.remove('brochure-image-photo-animate',
                'z-index-10-important');

            if (lastBrochureText) {
                lastBrochureText.style.opacity = '0';
                lastBrochureText.style.visibility = 'hidden';
                lastBrochureText.classList.add('display-none');
                lastBrochureText.classList.remove('display-block', 'brochure-text-js');
            }

        }

        brochureImagePhotoHover.classList.add('z-index-10-important', 'brochure-image-photo-animate');

        brochureTexts[index].classList.remove('display-none');
        brochureTexts[index].style.visibility = 'visible';
        brochureTexts[index].style.opacity = '0';

        void brochureTexts[index].offsetWidth;

        brochureTexts[index].classList.add('display-block', 'brochure-text-js');
        brochureTexts[index].style.opacity = '1';

        lastHoveredElement = brochureImagePhotoHover;
        lastBrochureText = brochureTexts[index];

        if (index == 0) {
            brochure.classList.remove('brochure-background-image-3');
            brochure.classList.remove('brochure-background-image-2');
            brochure.classList.add('brochure-background-image-1');
        } else if(index >= 1 && index <= 3){
            brochure.classList.remove('brochure-background-image-3');
            brochure.classList.remove('brochure-background-image-1');
            brochure.classList.add('brochure-background-image-2');
        }
        else
        {
            brochure.classList.remove('brochure-background-image-2');
            brochure.classList.remove('brochure-background-image-1');
            brochure.classList.add('brochure-background-image-3');
        }
    });

    brochureImagePhotoHover.addEventListener('animationstart', (event) => {
        if (event.animationName === 'brochureImageMove' && brochureImagePhotoHover.classList.contains('brochure-image-photo-animate-reverse')) {
            if (lastBrochureText) {
                lastBrochureText.style.opacity = '0';
                lastBrochureText.style.visibility = 'hidden';
                lastBrochureText.classList.add('display-none');
                lastBrochureText.classList.remove('display-block', 'brochure-text-js');
            }
        }
    });

    brochureImagePhotoHover.addEventListener('animationend', (event) => {
        if (event.animationName === 'brochureImageMove') {
            brochureImagePhotoHover.classList.remove('brochure-image-photo-animate-reverse');
        }
    });
});


videoKnowLedgeExtras[0].play();
brochureVideo.play();







function rotateArrow(index) {
    let rotation = 0;

    switch (index) {
        case 0: // Unreal Engine (Arriba)
            rotation = 0; // Flecha apuntando hacia arriba
            break;
        case 1: // Blender (Derecha)
            rotation = 90; // Flecha apuntando a la derecha
            break;
        case 2: // Clip Studio (Abajo)
            rotation = 180; // Flecha apuntando hacia abajo
            break;
        case 3: // Davinci Resolve (Izquierda)
            rotation = 270; // Flecha apuntando a la izquierda
            break;
    }

    arrow.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}


let lastX = 0, lastY = 0;
let lastIndex = -1;
const threshold = 1; // Umbral mínimo para detectar cambio

document.getElementById("extra-knowledge").addEventListener("mousemove", function(event) {
    let deltaX = event.clientX - lastX;
    let deltaY = event.clientY - lastY;

    // Actualizar coordenadas
    lastX = event.clientX;
    lastY = event.clientY;

    // Si el movimiento es menor al umbral, ignorar
    if (Math.abs(deltaX) < threshold && Math.abs(deltaY) < threshold) return;

    let newIndex = lastIndex;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Movimiento horizontal
        newIndex = deltaX < 0 ? 3 : 1; // ⬅️ Izquierda (Davinci) - ➡️ Derecha (Clip Studio)
    } else {
        // Movimiento vertical
        newIndex = deltaY < 0 ? 0 : 2; // ⬆️ Arriba (Unreal) - ⬇️ Abajo (Blender)
    }

    if (newIndex !== lastIndex) {
        lastIndex = newIndex;
        videoChange(newIndex);
        rotateArrow(newIndex); // Rotar la flecha
        buttonChange(newIndex);
    }
});


let isHovering = false; // Variable de control

function buttonChange(index) {
    if (isHovering) return; // Si está en hover, no cambia

    radarButtons.forEach((button, idx) => {
        const mainText = button.querySelector('a:nth-child(1)');
        const extraText = button.querySelector('a:nth-child(2)');

        if (idx === index) {
            button.classList.add('radar-button-text-show-link');
            mainText.classList.add('display-none');
            extraText.classList.remove('display-none');
        } else {
            button.classList.remove('radar-button-text-show-link');
            mainText.classList.remove('display-none');
            extraText.classList.add('display-none');
        }
    });

    rotateArrow(index); // Actualiza la flecha
    videoChange(index); // Cambia el video
}

// Función para actualizar la flecha
function rotateArrow(index) {
    if (isHovering) return; // Si está en hover, no cambia

    let rotation = 0;
    switch (index) {
        case 0: rotation = 0; break;    // Arriba - Unreal
        case 1: rotation = 90; break;   // Derecha - Blender
        case 2: rotation = 180; break;  // Abajo - Clip Studio
        case 3: rotation = 270; break;  // Izquierda - Davinci
    }
    document.getElementById("directionArrow").style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}


// Event listeners for hover state
document.querySelectorAll('.video-knoewlegde-extras').forEach((video) => {
    video.addEventListener('mouseenter', () => isHovering = true);
    video.addEventListener('mouseleave', () => isHovering = false);
});

// Function to play/pause videos safely
async function safePlay(video) {
    try {
        await video.play();
    } catch (error) {
        console.error('Error playing video:', error);
    }
}

// Function to change videos
function videoChange(index) {
    if (isHovering) return; // If hovering, do nothing

    document.querySelectorAll('.video-knoewlegde-extras').forEach(async (video, idx) => {
        if (idx === index) {
            video.classList.remove('display-none');
            video.classList.add('display-block');
            await safePlay(video); // Ensure smooth playback
        } else {
            video.classList.add('display-none');
            video.classList.remove('display-block');
            video.pause();
        }
    });
}

// Eventos de hover en los botones
radarButtons.forEach((button, index) => {
    const mainText = button.querySelector('a:nth-child(1)');
    const extraText = button.querySelector('a:nth-child(2)');

    button.addEventListener('mouseenter', () => {
        isHovering = true;
        mainText.classList.add('display-none');
        extraText.classList.remove('display-none');
        extraText.classList.add('display-block');

        button.classList.add('radar-button-text-show-link');
        rotateArrow(index);  // 🔹 Rotar flecha en hover
        videoChange(index);  // 🔹 Cambiar video en hover
    });

    button.addEventListener('mouseleave', () => {
        isHovering = false;
        mainText.classList.remove('display-none');
        extraText.classList.add('display-none');
        extraText.classList.remove('display-block');

        button.classList.remove('radar-button-text-show-link');

        // 🔹 Reactivar la flecha, el video y los botones tras salir del hover
        buttonChange(lastIndex);
    });
});

// Detección de movimiento del mouse
document.getElementById("extra-knowledge").addEventListener("mousemove", function(event) {
    if (isHovering) return; // Si está en hover, no detectamos movimiento

    let deltaX = event.clientX - lastX;
    let deltaY = event.clientY - lastY;

    lastX = event.clientX;
    lastY = event.clientY;

    if (Math.abs(deltaX) < threshold && Math.abs(deltaY) < threshold) return;

    let newIndex = lastIndex;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        newIndex = deltaX < 0 ? 3 : 1; // Izquierda o Derecha
    } else {
        newIndex = deltaY < 0 ? 0 : 2; // Arriba o Abajo
    }

    if (newIndex !== lastIndex) {
        lastIndex = newIndex;
        buttonChange(newIndex);
    }
});


   (function(){
      emailjs.init({
        publicKey: "wYY8NWgyg_QZhanRc",
      });
   })();

function SendMail()
{

    if(StateLanguage == null)
    {
        StateLanguage = 'spanish'
    }
    

    if(formName.value=="" )
    {
       
        MessageFormM ="M0";

        formTextMessage.innerHTML = data[StateLanguage].MessageForm[MessageFormM]
        formTextMessage.style.color = "red";

    }
    else if(formLastname.value =="")
    {
        MessageFormM ="M1";
        formTextMessage.innerHTML = data[StateLanguage].MessageForm[MessageFormM]
        formTextMessage.style.color = "red";

    }
    else if(email.value =="")
    {
        
        MessageFormM ="M2";
        formTextMessage.innerHTML = data[StateLanguage].MessageForm[MessageFormM]
        formTextMessage.style.color = "red";

    }
    else if(!isValidEmail(email.value))
    {
        
        MessageFormM ="M3";
        formTextMessage.innerHTML = data[StateLanguage].MessageForm[MessageFormM]
        formTextMessage.style.color = "red";


    }
     else if(message.value =="")
    {
    
        MessageFormM ="M4";
        formTextMessage.innerHTML = data[StateLanguage].MessageForm[MessageFormM]
        formTextMessage.style.color = "red";

    }
    else
    {
        SendMailShowMessage(true)
    var params =
    {
        from_name: formName.value +' '+ formLastname.value,
        email: email.value,
        message : message.value
    }
    emailjs.send("service_0ez8k3u", "template_7m4v5i4", params)
        .then(function(res) {
        SendMailShowMessage(true)
          //  alert("Success! " + res.status);
        })
        .catch(function(err) {
        SendMailShowMessage(false)
           // alert("Failed to send email. Error: " + JSON.stringify(err));
      });
    }
    MessageFormLast = formTextMessage.innerHTML ;
  
    
}

function DelaySendMail()
{
    formTextMessage.classList.remove('visibility-visible')
    formTextMessage.classList.add('opacity-0-animation')
}


function  SendMailShowMessage(bHasCorrect)
{
    formTextMessage.classList.remove('visibility-hidden')
    formTextMessage.classList.remove('opacity-0-animation')

    if(bHasCorrect)
    {
        MessageFormM ="M5";
        formTextMessage.style.color = "white";
        formTextMessage.innerHTML =  data[StateLanguage].MessageForm[MessageFormM]
    }
    else
    {
        MessageFormM ="M6";
        formTextMessage.innerHTML = data[StateLanguage].MessageForm[MessageFormM]
        formTextMessage.style.color = "red";

    }
    formTextMessage.classList.add('visibility-visible')
    setTimeout(DelaySendMail, 2000);

}


function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}



navOpenClose.addEventListener('click', function() {

    
    // counterNavOpenClose +=1 ;
    // if(counterNavOpenClose==1)
       nav.classList.remove('nav-animation-mobile-open')
       nav.classList.add('nav-animation-mobile-close')

       navButton.classList.remove('nav-animation-mobile-open-button')
       navButton.classList.add('nav-animation-mobile-close-button')

    //   }
    // else
    // {
    //     nav.classList.remove('nav-animation-mobile-close')
    //     nav.classList.add('nav-animation-mobile-open')

    //     navButton.classList.remove('nav-animation-mobile-close-button')
    //     navButton.classList.add('nav-animation-mobile-open-button')
    //     counterNavOpenClose=0;
    // }

  });


  navButton.addEventListener('click', function() {
 
        nav.classList.add('nav-animation-mobile-open')
        nav.classList.remove('nav-animation-mobile-close')

        navButton.classList.add('nav-animation-mobile-open-button')
        navButton.classList.remove('nav-animation-mobile-close-button')


  });




  window.scrollTo(0, window.scrollY - 1);

  window.addEventListener('scroll', function() {
      if (window.scrollY > 1) {
          scrollBtn.style.opacity = '1';
          scrollBtn.style.visibility = 'visible';
          scrollBtn.style.display = 'flex';
          scrollBtn.style.transition = 'opacity 0.3s';
      } else {
          scrollBtn.style.display = 'none';
      }
  });
  
  scrollBtn.addEventListener('click', function() {
      document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('body').scrollTo({ top: 0, behavior: 'smooth' });
  });


    MenuContentButtons[0].addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#extra-knowledge').scrollIntoView({ behavior: 'smooth' });
    });

    MenuContentButtons[1].addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#project').scrollIntoView({ behavior: 'smooth' });
    });

    MenuContentButtons[2].addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#strengths').scrollIntoView({ behavior: 'smooth' });
    });

    MenuContentButtons[3].addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

    NavLogo.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#aboutme').scrollIntoView({ behavior: 'smooth' });
    });


    function checkScreenSize() {
        if (window.innerWidth < 959) {

        MenuContentButtons.forEach(function(MenuContentButton) {
                
                MenuContentButton.addEventListener('click',function(){
                    nav.classList.remove('nav-animation-mobile-open')
                    nav.classList.add('nav-animation-mobile-close')
             
                    navButton.classList.remove('nav-animation-mobile-open-button')
                    navButton.classList.add('nav-animation-mobile-close-button')

                })
                
            });

            NavLogo.addEventListener('click',function(){
                nav.classList.remove('nav-animation-mobile-open')
                nav.classList.add('nav-animation-mobile-close')
         
                navButton.classList.remove('nav-animation-mobile-open-button')
                navButton.classList.add('nav-animation-mobile-close-button')
            })
                
            } 
    }
    
    window.addEventListener('load', checkScreenSize);
    window.addEventListener('resize', checkScreenSize);


  translateButtons.forEach((translateButton) => {
    

    const attr = translateButton.getAttribute('language');


    
    let lastHoveredElement = document.querySelector('.translate-button-active');
    translateButton.addEventListener('click', () =>{
         
        if(attr != null)
        {
            StateLanguage = attr
        }
       
        translateButtons.forEach((btn) => {
            btn.classList.remove('translate-button-active');
        });

        

        translateButton.classList.add('translate-button-active');
        lastHoveredElement = translateButton;


        Title.textContent = data[attr].Title;
        MenuContentButtons[0].textContent = data[attr].MenuContentButton0;
        MenuContentButtons[1].textContent = data[attr].MenuContentButton1;
        MenuContentButtons[2].textContent = data[attr].MenuContentButton2;
        MenuContentButtons[3].textContent = data[attr].MenuContentButton3;
        AboutmeTitles[1].textContent = data[attr].CareerTitle;
        EducationTitle.textContent = data[attr].EducationTitle;
        EducationDescriptions[0].innerHTML = data[attr].EducationDescription0;
        EducationDescriptions[1].innerHTML = data[attr].EducationDescription1;
        ProjectTitle.textContent = data[attr].ProjectTitle;
        BrochureTitle.textContent =  data[attr].BrochureTitle;
        BrochureImageTitles[0].textContent = data[attr].BrochureImageTitle0;
        BrochureImageTitles[1].textContent = data[attr].BrochureImageTitle1;
        BrochureImageTitles[2].textContent = data[attr].BrochureImageTitle2;
        BrochureImageTitles[3].textContent = data[attr].BrochureImageTitle3;
        BrochureImageTitles[4].textContent = data[attr].BrochureImageTitle4;
        BrochureTexts[0].innerHTML = data[attr].BrochureText0;
        BrochureTexts[1].innerHTML = data[attr].BrochureText1;
        BrochureTexts[2].innerHTML = data[attr].BrochureText2;
        BrochureTexts[3].innerHTML = data[attr].BrochureText3;
        BrochureTexts[4].innerHTML = data[attr].BrochureText4;
        AboutTitle.textContent = data[attr].AboutTitle;
        AboutSubTitles[3].textContent = data[attr].AboutSubTitles3;
        AboutSubTitles[4].textContent = data[attr].AboutSubTitles4;
        ExtraKnowledgeTitle.textContent =data[attr].ExtraKnowledgeTitle;
        ExtraKnowledgeSubTitle.textContent =data[attr].ExtraKnowledgeSubTitle;
        radarButtonGo[0].textContent =data[attr].radarButtonGo0;
        radarButtonGo[1].textContent =data[attr].radarButtonGo1;
        radarButtonGo[2].textContent =data[attr].radarButtonGo2;
        radarButtonGo[3].textContent =data[attr].radarButtonGo3;
        StrengthsTitle.textContent =data[attr].StrengthsTitle;
        TextChangeFrameOutTitles[0].textContent =data[attr].TextChangeFrameOutTitles0;
        TextChangeFrameOutTitles[1].textContent =data[attr].TextChangeFrameOutTitles1;
        TextChangeFrameOutTitles[2].textContent =data[attr].TextChangeFrameOutTitles2;
        Contact.textContent =data[attr].Contact;
        ContactFormInput[0].placeholder = data[attr].ContactFormInput0;
        ContactFormInput[1].placeholder = data[attr].ContactFormInput1;
        ContactFormInput[2].placeholder = data[attr].ContactFormInput2;
        ContactFormTextarea.placeholder = data[attr].ContactFormTextarea;
        ContactFormButton.textContent = data[attr].ContactFormButton;
        formTextMessage.textContent =  data[attr].MessageForm[MessageFormM];
        FooterCl[0].innerHTML =  data[attr].FooterCl0
        FooterCl[2].innerHTML =  data[attr].FooterCl2
            
    });
});

  var data =
  {

    spanish:
    {
        Title:`Currículo de Gregory`,
        MenuContentButton0:"Conocimientos",
        MenuContentButton1:"Proyectos",
        MenuContentButton2:"Acerca de Gregory",
        MenuContentButton3:"Contacto",
        CareerTitle:"Ingeniero en informática",
        EducationTitle: "Educación.",
        EducationDescription0: 
        `  <p>Título: T.S.U en Informática.</p>
           <p>Universidad: Universidad Politécnica Territorial del Estado Trujillo (U.P.T.T).</p>
           <p>Período: septiembre 2012 – junio 2015.</p>`,
        EducationDescription1: 
        `  <p>Título: Ingeniería en Informática.</p>
           <p>Universidad: Universidad Politécnica Territorial del Estado Trujillo (U.P.T.T).</p>
           <p>Período: septiembre 2015 – octubre 2017.</p>`,
        ProjectTitle: "Proyectos",
        BrochureTitle: "Selecciona el proyecto",
        BrochureImageTitle0:"Juego Unity en 2D",
        BrochureImageTitle1:"Actualización frontend",
        BrochureImageTitle2:"Creación sitio web",
        BrochureImageTitle3:"Plataforma de clientes",
        BrochureImageTitle4:"Visita Médica Móvil",
        BrochureText0:`
                        <p class="margin-3">
                            <span>Institución:</span>
                            Universidad Politécnica Territorial Del Estado Trujillo (U.P.T.T)
                        </p>
                        <p class="margin-3">
                            <span>Título:</span> Juego de Aventura de Puzzle de Matemática en 2D.
                        </p>
                        <p class="margin-3">
                            <span>Funciones:</span> Proporcionar un software educativo en juegos de
                            matemática dirigido a Windows XP, Windows 7 y Android creado
                            con el Engine Unity 3D con los lenguajes de programación C# y SQLite3.
                        </p>
                        <p class="margin-3">
                            <span>Período:</span> Septiembre 2016 – Octubre 2017.
                        </p>
                        <p class="margin-3">
                            <span>Programa versión para PC:</span>
                            <a href="https://www.youtube.com/watch?v=Ieydklmm5dE&amp;feature=youtu.be">Video del juego</a>
                            
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        BrochureText1:`
        <p class="margin-3">
                            <span>Empresa:</span> Medisys International SAC.      
                        </p>
                        <p class="margin-3">
                            <span>Funciones:</span> Actualización Frontend a 15 aplicaciones de arquitectura vieja basada en  Web Forms App framework 4.8 a estándares modernos implementado Scss, javascript, y prácticas como web progresiva app.
                        </p>
                        <p class="margin-3">
                            <span>Período: </span> enero 2019 - abril 2019.
                        </p>

             
                        <div class="brochure-text-background"></div>
        
        `,
        BrochureText2:`
        <p class="margin-3">
                            <span>Empresa:</span> Medisys International SAC.      
                        </p>
                        <p class="margin-3">
                            <span>Funciones: </span> Crear un portal web a la empresa basadase en una arquitectura Blazor .Net 8, con las características de ser dinámico y guardar los datos de los contactos en una base datos Sql Server.       
                        </p>
                        <p class="margin-3">
                            <span>Período:</span> Julio 2023 - Agosto 2023.
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        BrochureText3:`
        <p class="margin-3">
                            <span>Empresa:</span> Medisys International SAC.      
                        </p>
                        <p class="margin-3">
                            <span>Funciones:</span> Crear una aplicación de Seguimientos de clientes con formularios avanzados con una arquitectura Blazor junto con Radzen incluyendo lógica de Restful API, y almacenando los datos en Sql Server y los archivos en Azure.     
                        </p>
                        <p class="margin-3">
                            <span>Período:</span> Abril 2023 – Noviembre 2023.
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        BrochureText4:`
        <p class="margin-3">
                            <span>Empresa:</span> Medisys International SAC.  
                        </p>
                        <p class="margin-3">
                            <span>Funciones:</span> Crear una App móvil de visita médica en el ecosistema Android en .Net Maui con una lógica Restful API y Sql Server para almacenar los datos.
                        </p>
                        <p class="margin-3">
                            <span>Período:</span> nomviembre 2023 – enero 2024.
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        AboutTitle:"Tecnología web",
        AboutSubTitles3:"Lenguaje de base de datos",
        AboutSubTitles4:"Desarrollo móvil",
        ExtraKnowledgeTitle:"Conocimientos",
        ExtraKnowledgeSubTitle: "Herramientas de diseño",
        radarButtonGo0: "Trabajos que he creado en Unreal Engine 5",
        radarButtonGo1: "Trabajos que he creado en Unreal Blender",
        radarButtonGo2: "Trabajos que he creado en Unreal Clip Studio",
        radarButtonGo3: "Trabajos que he creado en Unreal Davinci resolve",
        StrengthsTitle:"Fortalezas",
        TextChangeFrameOutTitles0:"Autodidacta",
        TextChangeFrameOutTitles1:"Versatilidad",
        TextChangeFrameOutTitles2:"Perseverancia",
        Contact:"Contacto",
        ContactFormInput0:"Nombre",
        ContactFormInput1:"Apellido",
        ContactFormInput2:"Email",
        ContactFormTextarea:"Mensaje",
        ContactFormButton:"Enviar",

        MessageForm:{
            M0:"Nombre es obligatorio",
            M1:"Apellido obligatorio",
            M2:"Correo vacio",
            M3:"Correo invalido",
            M4:"Mensaje vacio",
            M5: "Mensaje enviado",
            M6:"Error al enviar el Mensaje"
             
        },
        FooterCl0:
        `
        <span class="font-weight-600 padding-left-1">Teléfono</span>
                <div class="margin-1">
                    +1(206)6705847
                </div>`
        ,
        FooterCl2:`Creado por <span class="font-weight-600">Gregory Peña</span>`,
       

        

        


        
    },

    english:
    {   
        Title:`Gregory's Resume`,
        MenuContentButton0:"KnownLedge",
        MenuContentButton1:"Projects",
        MenuContentButton2:"About Gregory",
        MenuContentButton3:"Contact",
        CareerTitle:"Software Engineering",
        EducationTitle: "Education.",
        EducationDescription0: 
        `  <p>Title: T.S.U in Computer Science.</p>
           <p>University: Universidad Politécnica Territorial del Estado Trujillo (U.P.T.T).</p>
           <p>Period: September 2012 – June 2015.`,
        EducationDescription0: 
        `  <p>Title: T.S.U in Computer Science.</p>
           <p>University: Universidad Politécnica Territorial del Estado Trujillo (U.P.T.T).</p>
           <p>Period: September 2012 – June 2015.`,
        EducationDescription1: 
        `  <p>Title: Software Engineering.</p>
           <p>University: Universidad Politécnica Territorial del Estado Trujillo (U.P.T.T).</p>
           <p>Period: September 2015 – octuber 2017.</p>`,
        ProjectTitle: "Projects",
        BrochureTitle: "Select the project",
        BrochureImageTitle0:"Unity game in 2D",
        BrochureImageTitle1:"Frontend Update",
        BrochureImageTitle2:"Website creation",
        BrochureImageTitle3:"Customer platform",
        BrochureImageTitle4:"Mobile Medical Visit",
        BrochureText0:`
                        <p class="margin-3">
                            <span>Institution:</span>
                            Universidad Politécnica Territorial Del Estado Trujillo (U.P.T.T)
                        </p>
                        <p class="margin-3">
                            <span>Título:</span> 2D Math puzzle adventure game.
                        </p>
                        <p class="margin-3">
                            <span>Functions:</span> Provide educational software in math games
    aimed at Windows XP, Windows 7 and Android created
    with the Unity 3D Engine with the programming languages ​​C# and SQLite3.
                        </p>
                        <p class="margin-3">
                            <span>Period:</span> September 2016 – October 2017.
                        </p>
                        <p class="margin-3">
                            <span>PC version program:</span>
                            <a href="https://www.youtube.com/watch?v=Ieydklmm5dE&feature=youtu.be" >Game video</a>
                            
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        BrochureText1:`
        <p class="margin-3">
                            <span>Company:</span>Medisys International SAC.      
                        </p>
                        <p class="margin-3">
                            <span>Functions:</span> Frontend upgrade to 15 applications of old architecture based on Web Forms App framework 4.8 to modern standards implementing Scss, javascript, and practices such as progressive web app.
                        </p>
                        <p class="margin-3">
                            <span>Period: </span> January 2019 - April 2019.
                        </p>

             
                        <div class="brochure-text-background"></div>
        `,
        BrochureText2:`
        <p class="margin-3">
                            <span>Company:</span> Medisys International SAC.      
                        </p>
                        <p class="margin-3">
                            <span>Functions: </span> Create a company web portal based on a Blazor .Net 8 architecture, with the characteristics of being dynamic and saving contacts data in a Sql Server database.     
                        </p>
                        <p class="margin-3">
                            <span>Period:</span> July 2023 - August 2023.
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        BrochureText3:`
                <p class="margin-3">
                            <span>Company:</span> Medisys International SAC.      
                        </p>
                        <p class="margin-3">
                            <span>Funciones:</span> Create a Customer Tracking application with advanced forms using a Blazor architecture together with Radzen including Restful API logic, and storing the data in Sql Server and the files in Azure.    
                        </p>
                        <p class="margin-3">
                            <span>Period:</span> April 2023 – November 2023.
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        BrochureText4:`
        <p class="margin-3">
                            <span>Company:</span> Medisys International SAC.  
                        </p>
                        <p class="margin-3">
                            <span>Functions:</span> Create a mobile medical visit app in the Android ecosystem in .Net Maui with a Restful API logic and Sql Server to store the data.
                        </p>
                        <p class="margin-3">
                            <span>Period:</span> November 2023 – January 2024.
                        </p>
                        <div class="brochure-text-background"></div>
        `,
        AboutTitle:"Web Technology",
        AboutSubTitles3:"Database language",
        AboutSubTitles4:"Mobile development",
        ExtraKnowledgeTitle:"Knowledge",
        ExtraKnowledgeSubTitle: "Design tools",
        radarButtonGo0: "Works I've created in Unreal Engine 5",
        radarButtonGo1: "Works I've created in Unreal Blender",
        radarButtonGo2: "Works I've created in Unreal Clip Studio",
        radarButtonGo3: "Works I've created in Unreal Davinci resolve",
        StrengthsTitle:"Strengths",
        TextChangeFrameOutTitles0:"Self-taught",
        TextChangeFrameOutTitles1:"Versatility",
        TextChangeFrameOutTitles2:"Perseverance",
        Contact:"Contact",
        ContactFormInput0:"Name",
        ContactFormInput1:"Last Name",
        ContactFormInput2:"Email",
        ContactFormTextarea:"Message",
        ContactFormButton:"Send",
        MessageForm:{
            M0:"Name is required",
            M1:"Last Name is required",
            M2:"Empty Email",
            M3:"Email is required",
            M4:"Empty Message",
            M5: "Message sent",
            M6: "Error sending Message"
        },
        FooterCl0:
        `
        <span class="font-weight-600 padding-left-1">Phone</span>
                <div class="margin-1">
                    +1(206)6705847
                </div>`
        ,
        FooterCl2:`Created by <span class="font-weight-600">Gregory Peña</span>`,

    },
   
  }



 
function BeginTranslate(attr)
{

  Title.textContent = data[attr].Title;
  MenuContentButtons[0].textContent = data[attr].MenuContentButton0;
  MenuContentButtons[1].textContent = data[attr].MenuContentButton1;
  MenuContentButtons[2].textContent = data[attr].MenuContentButton2;
  MenuContentButtons[3].textContent = data[attr].MenuContentButton3;
  AboutmeTitles[1].textContent = data[attr].CareerTitle;
  EducationTitle.textContent = data[attr].EducationTitle;
  EducationDescriptions[0].innerHTML = data[attr].EducationDescription0;
  EducationDescriptions[1].innerHTML = data[attr].EducationDescription1;
  ProjectTitle.textContent = data[attr].ProjectTitle;
  BrochureTitle.textContent =  data[attr].BrochureTitle;
  BrochureImageTitles[0].textContent = data[attr].BrochureImageTitle0;
  BrochureImageTitles[1].textContent = data[attr].BrochureImageTitle1;
  BrochureImageTitles[2].textContent = data[attr].BrochureImageTitle2;
  BrochureImageTitles[3].textContent = data[attr].BrochureImageTitle3;
  BrochureImageTitles[4].textContent = data[attr].BrochureImageTitle4;
  BrochureTexts[0].innerHTML = data[attr].BrochureText0;
  BrochureTexts[1].innerHTML = data[attr].BrochureText1;
  BrochureTexts[2].innerHTML = data[attr].BrochureText2;
  BrochureTexts[3].innerHTML = data[attr].BrochureText3;
  BrochureTexts[4].innerHTML = data[attr].BrochureText4;
  AboutTitle.textContent = data[attr].AboutTitle;
  AboutSubTitles[3].textContent = data[attr].AboutSubTitles3;
  AboutSubTitles[4].textContent = data[attr].AboutSubTitles4;
  ExtraKnowledgeTitle.textContent =data[attr].ExtraKnowledgeTitle;
  ExtraKnowledgeSubTitle.textContent =data[attr].ExtraKnowledgeSubTitle;
  StrengthsTitle.textContent =data[attr].StrengthsTitle;
  TextChangeFrameOutTitles[0].textContent =data[attr].TextChangeFrameOutTitles0;
  TextChangeFrameOutTitles[1].textContent =data[attr].TextChangeFrameOutTitles1;
  TextChangeFrameOutTitles[2].textContent =data[attr].TextChangeFrameOutTitles2;
  Contact.textContent =data[attr].Contact;
  ContactFormInput[0].placeholder = data[attr].ContactFormInput0;
  ContactFormInput[1].placeholder = data[attr].ContactFormInput1;
  ContactFormInput[2].placeholder = data[attr].ContactFormInput2;
  ContactFormTextarea.placeholder = data[attr].ContactFormTextarea;
  ContactFormButton.textContent = data[attr].ContactFormButton;
  formTextMessage.textContent =  data[attr].MessageForm[MessageFormM];
  FooterCl[0].innerHTML =  data[attr].FooterCl0
  FooterCl[2].innerHTML =  data[attr].FooterCl2
      
};

BeginTranslate('english');




const ctx = document.getElementById('myRadarChart').getContext('2d');


const dataradar = {
    labels: ['', '', '', ''], // Labels for each corner
    datasets: [{
        data: [40, 40, 40, 30], // Data for each corner
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'white', // White line color
        borderWidth: 4, // Thicker dataset line
    }]
};

const options = {
    plugins: {
        legend: {
            display: false // Disable the legend
        }
    },
    scales: {
        
        r: {
            grid: {
                color: '#545454', // Make grid lines white
                lineWidth: 2, // Make grid lines thicker
              },
              ticks: {
                beginAtZero: true,
                color: '#0d0d0d', // Tick text color
              },
            angleLines: {
                display: true,
                color: '#0d0d0d', // Make angle lines white
                lineWidth: 2, // Make angle lines thicker
            },
            suggestedMin: 0, // Minimum value
            suggestedMax: 100 // Maximum value
        }
    }
};

const radarChart = new Chart(ctx, {
    type: 'radar',
    data: dataradar,
    options: options
});