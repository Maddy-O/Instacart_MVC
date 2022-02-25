let cart_items = JSON.parse(localStorage.getItem("cart_items"))||[];

async function getData(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data
    }
    catch(err){
        console.log(err)
    }
}

function appendData(data,location){
    location.innerHTML = "";
    data.forEach(({strMeal,strMealThumb}) => {
        let div = document.createElement("div");
        let p1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = strMealThumb;
        p1.textContent = strMeal;

        div.append(img,p1);
        location.append(div)
    });
}


function appendProducts(data,location,dropdown){
    let {shop_names,shops,final_data} = prepareData(data);
    
    for(let i = 0;i<shop_names.length;i++){
        let heading_div = document.createElement("div");
        let text_div = document.createElement("div");
        let img1 = document.createElement("img");
        img1.src = shops[shop_names[i]]
        
        let p1 = document.createElement("p");
        p1.textContent = shop_names[i];
        let p2 = document.createElement("p");
        p2.textContent = "Delivery avalaible"
        text_div.append(p1,p2);
        heading_div.append(img1,text_div);
        heading_div.id = "store_div"    
    
        let div1 = document.createElement("div")
        let hr = document.createElement("hr");
        div1.id = "grid_div"
        final_data[shop_names[i]].forEach(elem => {
            let div2 = document.createElement("div");
            let img = document.createElement("img");
            img.src = elem['img'];

            let p1 = document.createElement("p")
            p1.textContent = "$"+elem['price']

            let p2 = document.createElement("p");
            p2.textContent = elem['weight'];

            let p3 = document.createElement("p");
            p3.textContent = elem['name']

            div2.append(img,p1,p2,p3)
            div2.addEventListener("click",()=>{
                localStorage.setItem("display_obj",JSON.stringify(elem))
                let modal = document.getElementById("myModal");
                let modal_div = document.querySelector(".display_content");
                appendModal(elem,modal_div,dropdown)
                appendModalData(final_data[shop_names[i]])
                modal.style.display = "block";
            })
            div1.append(div2)
        });
        location.append(heading_div,div1,hr)
    }


    // for(let i = 0;i<store_names.length;i++){
    //     // First Heading div.
    //     let heading_div = document.createElement("div");
    //     let text_div = document.createElement("div");

    //     let img1 = document.createElement("img");
    //     img1.src = shops[i]['img'];
    //     let p1 = document.createElement("p");
    //     p1.textContent = store_names[i];
    //     let p2 = document.createElement("p");
    //     p2.textContent = "Delivery avalaible"

    //     text_div.append(p1,p2)
    //     heading_div.append(img1,text_div)

    //     heading_div.id = "heading_div"
    //     let hr = document.createElement("hr");
    //     // Products content div.

    //     let div1 = document.createElement("div");
    //     // data[store_names[i]].map((elem)=>{
    //     //     let div2 = document.createElement("div");
    //     //     let img = document.createElement("img");
    //     //     img.src = elem['img'];
    //     //     let p2 = document.createElement("p");
    //     //     p2.textContent = elem['name'];
    //     //     div2.append(img,p2)
    //     //     div1.append(div2)
    //     //     div2.addEventListener("click",()=>{
    //     //         localStorage.setItem("display_obj",JSON.stringify(elem))
    //     //         let modal = document.getElementById("myModal");
    //     //         let modal_div = document.querySelector(".display_content");
    //     //         appendModal(elem,modal_div,dropdown)
    //     //         appendModalData(data[store_names[i]])
    //     //         modal.style.display = "block";
    //     //     })
    //     // })
    //     location.append(heading_div,div1,hr)
    // }
}

function prepareData(data){
    let shops = {};
    data.forEach(element => {
        if(shops[element['store']['name']] == undefined){
            shops[element['store']['name']] = element['store']['poster']
        }
    });
    
    let shop_names = Object.keys(shops);
    let final_data = {};
    for(let i = 0;i<shop_names.length;i++){
        final_data[shop_names[i]] = []
    }

    for(let i = 0;i<shop_names.length;i++){
        for(let j = 0;j<data.length;j++){
            if(data[j]['store']['name'] == shop_names[i]){
                final_data[shop_names[i]].push(data[j])
            }
        }
    }
    return {shops,shop_names,final_data}
}

function appendModal(data,location,dropdown){
    location.innerHTML = "";
    let div = document.createElement("div");
    let side_div = document.createElement("div");
    let button_div = document.createElement("div");
    dropdown.style.display = "block";
    let p1 = document.createElement("p")

    p1.textContent = data['name'];

    let p2 = document.createElement("p")
    p2.textContent = data['weight'];
    p2.style.color = "grey";
    p2.style.fontSize = "20px"

    let p3 = document.createElement("p")
    p3.textContent = "$"+data['price'];

    let p4 = document.createElement("p")
    p4.textContent = "Free Delivery";
    p4.style.color = "#EA790B";

    let btn = document.createElement("button")
    btn.id = "cart_btn";
    btn.textContent = "Add to Cart"

    // Add to Cart functionality.
    btn.addEventListener("click",()=>{
        let qty = JSON.parse(localStorage.getItem("qty"));
        qty = Number(qty);
        data['price'] = Number(data['price'])*qty;
        cart_items.push(data);
        localStorage.setItem("cart_items",JSON.stringify(cart_items));
        window.alert("Item added into the cart")
    })


    button_div.append(dropdown,btn)
    button_div.id = "button_div"
    let img = document.createElement("img");
    img.src = data['img'];
    img.id = "main_img"
    side_div.append(p1,p2,p3,p4,button_div)
    div.append(img,side_div)
    div.style.display = "flex"
    div.style.justifyContent = "space-evenly"
    location.append(div);
}

function appendModalData(data){
    let main_div = document.querySelector(".recommended")
    main_div.innerHTML = "";
    data.forEach(elem => {
       let div = document.createElement("div");
       let img1 = document.createElement("img");
       img1.src = elem['img'];

       let p1 = document.createElement("p")
        p1.textContent = "$"+elem['price']

        let p2 = document.createElement("p");
        p2.textContent = elem['weight'];

        let p3 = document.createElement("p");
        p3.textContent = elem['name']
        
       let btn = document.createElement("button");
       btn.innerHTML = `<i class="fa fa-plus" aria-hidden="true"></i> Add`;
       btn.addEventListener("click",()=>{
           let obj = {
               "img":data['img'],
               "name":data['name'],
               "price":data['price']
           }
           cart_items.push(obj);
           localStorage.setItem("cart_items",JSON.stringify(cart_items));
           window.alert("Item added into the cart");
           
       })
       div.append(img1,p1,p2,p3,btn);
       div.id = "container"
       btn.id = "btn"
       main_div.append(div)
    });
}
export {getData,appendData,appendProducts};