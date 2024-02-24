var batlist = {
    ca: {
        capro: {
            
            name: "CA PRO 15000",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        },
        caplus:{
            
            name: "CA 10000 PLUS",
            image:"https://championsports.pk/wp-content/uploads/2023/08/20220212190703575272395-670x910.jpg",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        },
        ca10000: {
            
            name: "CA 10000",
            image:"https://thesportsfactory.pk/wp-content/uploads/2021/01/1-min-1-2.png",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        },
        cagold: {
            image:"https://www.cricketcloset.com/wp-content/uploads/2021/03/Untitled-design-22.png",
            name: "CA GOLD 15000",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"
        }

    },
    graynichols: {
        graynicholsWave: {
            image:"https://www.beckenhamcricketspec.com/image/cache/GN%202020/shockwave%20thunder%20jnr-800x800.jpg",
            name: "Shockwave Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"
        },
        graynicholsNova: {
            image:"https://www.gray-nicolls.co.uk/cdn/shop/collections/1139008_Hypernova_Gen_1.1_Players_Bat_Back_Angle_2.jpg?v=1668726710&width=1920",
            name: "HyperNova Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"
        },
        graynicholsVapour: {
            image:"https://www.gray-nicolls.co.uk/cdn/shop/collections/1139008_Hypernova_Gen_1.1_Players_Bat_Back_Angle_2.jpg?v=1668726710&width=1920",
            name: "Vapour Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"
        },
        graynicholsastro: {
            image:"https://www.canterburysports.co.nz/wp-content/uploads/2023/09/29028-Astro-950-back.jpg",
            name: "Astro Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"
        }

    },
    ss:{
        ssstorm:{
            image:"https://www.yashisports.com/wp-content/uploads/2022/12/Artboard-1-101-1.webp",
            name: "Storm Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        },
        sston:{
            image:"https://allaboutcricketstore.com/cdn/shop/products/IMG_3838_1500x.jpg?v=1645146490",
            name: "Ton Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        },
        ssstorm1:{
            image:"https://www.yashisports.com/wp-content/uploads/2022/12/Artboard-1-101-1.webp",
            name: "Storm Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        },
        sston1:{
            image:"https://allaboutcricketstore.com/cdn/shop/products/IMG_3838_1500x.jpg?v=1645146490",
            name: "Ton Edition",
            size: "Long Handle ",
            weight: "Light",
            battype:"English Willow",
            price:"25,000 PKR"

        }

    }
}


var main = document.getElementById("main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
brand.innerHTML+=` <option>Select Brand</option>`;
model.innerHTML+=` <option>Select Model</option>`;



for(var key in batlist){
    brand.innerHTML+=` <option value='${key}'>${key.toString().toUpperCase()}</option>`
}
function setmodel(){
    //console.log(brand.value);
    model.innerHTML="";
    model.innerHTML+=` <option>Select model</option>`;
    for(var key in batlist[brand.value]){
        model.innerHTML+=` <option value='${key}'>${key.toString().toUpperCase()}</option>`
    }
}


function searchbat(){
    
}




for (var key in batlist) {
    for (var key1 in batlist[key]) {
         
            var obj = batlist[key][key1];
            //console.log(obj)
            main.innerHTML+=`
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${obj.image ||"pics/ca15000.webp"}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${key1.toUpperCase()}</h5>
                  <p class="card-text">${obj.name} </br> ${obj.size} </br> ${obj.weight} </br> ${obj.battype}</p>
                  <h6>${obj.price}</h6>
                </div>
              </div>

        </div>
            
            `

            
        
    }

}


