// ===== MOSTRAR SECCIONES =====
function mostrar(id){

  // ocultar todas
  document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));

  // mostrar la sección correcta
  document.getElementById(id).classList.remove("hidden");

  // iniciar juego cuando entra
  if(id === "juego"){
    if(typeof iniciarJuego === "function"){
      iniciarJuego();
    }
  }

  // 🎥 CUANDO ENTRA AL VIDEO
  if(id === "video"){
    const m1 = document.getElementById("music1");
    if(m1){
      m1.pause();
    }
  }

  // 💕 FINAL
  if(id === "final"){

    lanzarCorazones();

    const m1 = document.getElementById("music1");
    if(m1){
      m1.pause();
      m1.currentTime = 0;
    }

    const m2 = document.getElementById("musicaFinal");
    if(m2){
      m2.play().catch(()=>{});
    }
  }
}

// ===== BOTÓN ENTRAR =====
function entrar(){

  const m1 = document.getElementById("music1");

  if(m1){
    m1.play().catch(()=>{}); // evita bloqueo del navegador
  }

  mostrar('mensaje1');
  escribirTexto();
}


// ===== BOTÓN EXTRAÑAS =====
function extrañas(){
  const r = document.getElementById("respuesta");
  r.innerHTML = "YO TE EXTRAÑO MUCHÍSIMO MÁS ❤️";
  r.classList.remove("hidden");
}


// ===== MAQUINA DE ESCRIBIR =====
const texto = `Hola Allison, me gustaria empezar diciendote Feliz 14 a ti y a mi Aron se que no estamos juntos pero aun asi es el dia del amor y yo te amo, los amo a los dos, han sido dias duros, semanas complicadas desde que nos alejamos y creeme que no se que hacer sin ti, no es que no pueda estar solo simplemente nada es igual sin ti, sin toda la alegria que transmitias en mi, sin importar que pelearamos, que estuvieramos tristes siempre nos sacabamos una sonrisa y desde que te fuiste nada ha sido igual, creeme que no te quiero de vuelva a mi para hacerte sufrir o llorar, quiero que seamos muy felices los 3, extraño a mi hijo, que venga corriendo hacia mi, sentirlo, darle besitos o que tu me regañes porque no le digo nada, no sabes como me siento al no tenerlos conmigo, extraño todas esas salidas que teniamos, paso todos los dias por tu casa esperando a que salgas, quiero verte, abrazarte y nunca soltarte, se que estas de viaje y solo necesito saber en donde estas para poder ir, no me importa nada ni nadie que no seas tu, no quiero a nadie mas, solo a ti porque eres todo mi mundo y se que me equivoque, se que me he equivocado mucho y no me justificare, pero enserio doy todo de mi por ser el hombre de tu vida, por siempre sacarte una sonrisa, porque nunca te falte nada y se que soy muy idiota porque cometi un error infantil y por eso estamos asi pero no voy a rendirme porque si yo hubiera querido estar con alguien mas me hubiera ido pero no fue asi me quede aca contigo luchando porque no quiero a nadie mas a mi lado que no seas tu, no me imagino casandome con alguien si no eres tu, ni teniendo hijos si no son con tu apellido o que se parezcan a ti, eres mi futuro Allison y creeme que he aprendido todas las lecciones que he recibido hasta ahora, siento un amor muy puro que no se que hacer en este momento, que no sea darte todo lo que tengo en mi, hemos pasado por muchas cosas y no pienso en dejarte, aun asi pasen meses, años tendre que morir para que este amor se vaya porque tu eres el amor de mi vida, si no lucho por ti me lamentaria toda la vida, jamas me rendi por ti y jamas lo haria, se que tal vez no confias en mi pero soy una buena persona y si tal vez no lo soy trato de hacer mi mejor esfuerzo todos los dias porque a las personas que mas quiero no les pase nada, no puedo ir a ningun lugar donde tu y yo ibamos porque mi cabeza piensa que tu quedrias estar ahi, que tu quedrias comer bembos, que quedrias que fueramos a comer pollo o chaufa, estar alejados para mi jamas sera una opcion que quiera y si tengo que seguirte a otro pais o donde sea lo hare porque asi estoy allison loco por ti, no importa si tengo que seguir haciendo locuras y tal vez nadie entienda todo el amor que te tengo, pero al menos quiero que lo entiendas tu, me enamore perdidamente de ti negra, desde que estamos en 4to por tu forma de mirarme, por tu forma de ser conmigo porque apesar que me golpearas a mi me encanta, porque el simple hecho de sentir tu mano, sentirte cerca de mi se que nada me pasara, porque se que no hay otra persona en el mundo que me amaria de la forma en la que tu lo haces, con nadie podria ser yo, solo a tu lado siento que soy yo, por ti aprendi a cocinar, por ti sali corriendo de mi casa con tal de verte unos minutos, por ti me levantaba cada mañana feliz, por ti haria cualquier cosa, extraño esos momentos de intimidad donde nos veiamos a los ojos, donde solo eramos nosotros dos, y somos tu y yo contra el mundo porque no existiria yo sin ti, porque mi mundo gira alrededor tuyo, mi corazon esta contigo, extraño darte besitos en la frente, practicar el baile de nuestra boda, porque nos casariamos en la iglesia del centro de lima lo recuerdas?, porque tendriamos 2 hijos, uno se pareceria a ti y otro a mi lo olvidaste?, estoy muy arrepentido y quiero cambiar el guion de nuestra historia por un felices por siempre, no sere guapo, no sere inteligente, no tendre mucho dinero, se que nada de eso te importa, pero dejo todo lo que tengo por ti, solo por ti porque te quiero a ti, todos los dias de mi vida eres tu, quiero que seas tu, quiero que todo el mundo se entere que este amor lo pudo con todo, quiero dejar una huella eterna en tu vida, quiero ser ese hombre de tu vida, el amor de tu vida, mi corazon se muere por ti :(, donde sea que estes te encontrare porque tu eres mi luz en la oscuridad, tu eres mi vida entera, te amo demasiado Allison Vega y seguire luchando aun asi este viejito, aun asi ya no pueda caminar, seguire luchando por ti, te demostrare todos los dias de tu vida lo mucho que te amo, solo quiero ver en tu rostro esa sonrisa tan hermosa que tienes, quiero que al despertar poder ver tus ojitos, tocar tus cachetes, darte muchos besitos en la frente, y al dormir poder abrazarnos, hacer todas las cosas de nuestra casa para que tu puedas descansar, solo te veo a ti y te seguire viendo solo a ti aun asi te hallas ido, te extraño ojitos bonitos, no olvides que te estoy esperando y que te amo con todo mi corazon, vivo por ti y para ti, correre a tu lado, soy tuyo negrita :(, eres LA MEJOR NO LO OLVIDES, te abrazo desde donde estoy a ti y al bb, sigue viendo lo demas que tengo para ti, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo, te amo , te amo , te amo y no voy a dejar de amarte ni aunque pasen eternidades. `;

let i = 0;

function escribirTexto(){
  if(i < texto.length){
    document.getElementById("tuMensaje").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, 35);
  }
}


// ===== CORAZONES FLOTANTES =====
function lanzarCorazones(){
  const cont = document.querySelector(".hearts");
  if(!cont) return;

  setInterval(()=>{
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (18 + Math.random()*20) + "px";
    heart.style.animationDuration = (4 + Math.random()*3) + "s";

    cont.appendChild(heart);

    setTimeout(()=> heart.remove(), 7000);
  }, 500);
}

// 🎥 Pausar música cuando el video se reproduce
document.addEventListener("DOMContentLoaded", function(){
  const video = document.querySelector("video");
  const m1 = document.getElementById("music1");

  if(video){
    video.addEventListener("play", function(){
      if(m1){
        m1.pause();
      }
    });
  }
});

