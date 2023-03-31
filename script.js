let content_manga=null;
let cont_clicks=0;

ListMangas();

async function ListMangas(){
    const consulta = await fetch("https://mangamachan.000webhostapp.com/api/");
    if(consulta.status==200){
        const resultado= await consulta.json();
        console.log(resultado);
        const conteiner__mangas=document.getElementById('conteiner__mangas');
        let mangas="";
        resultado.forEach((element)=>{
            mangas+=`
            <section class="content__manga">
                <div class="content__synopsis">
                    <p class="synopsis__paragraph"><b>${element.title_manga}</b><br> ${element.synopsis_manga}</p>
                    <h2 class="name__autor">
                        Autor: ${element.autor_manga}
                    </h2>
                </div>
                <div class="content__image">
                    <img src="${element.url_img_manga}" class="image__photo" alt="${element.title_manga}">
                    <img src="images/pattern-bg.svg" class="image__bg" alt="">
                </div>
            </section>
            `;
        })
        conteiner__mangas.innerHTML=mangas;
        content__manga= document.querySelectorAll('.content__manga');
        content__manga[0].classList.add('content__manga--view');
    }
}

function anterior(){
    if(cont_clicks>0){
        cont_clicks--;
        content__manga.forEach((cadaTest, i)=>{
            content__manga[i].classList.remove('content__manga--view');
        })
        content__manga[cont_clicks].classList.add('content__manga--view');
    }
}

function siguiente(){
    if(cont_clicks+1<content__manga.length){
        cont_clicks++;
        content__manga.forEach((cadaTest, i)=>{
            content__manga[i].classList.remove('content__manga--view');
        })
        content__manga[cont_clicks].classList.add('content__manga--view');
    }
}