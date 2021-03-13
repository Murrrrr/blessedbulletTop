const main_image_caption = document.querySelector('.main-image_caption');
const main_image = document.querySelector('.main-image');
const sort_list = document.querySelector('.item_page_sort > ul');




const paging_numbers = document.querySelectorAll('.paging_numbers > span');

var item_page_list_items = document.querySelectorAll('.item_page_list_items');
var item_page_list = document.querySelectorAll('.item_page_list');
var item_price = document.querySelectorAll('.item_price');
var item_name = document.querySelectorAll('.item_name');
var item_image = document.querySelectorAll('.item_page_list_items > img');
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var item_info_array = [];
var popular_info_array = [];

main_image_caption.style.left = `${main_image.clientWidth / 2 - main_image_caption.clientWidth / 2}px`
main_image_caption.style.top = `${main_image.clientHeight / 2 - main_image_caption.clientHeight / 2}px`

//=================================================================

const sort_title = document.querySelector('.item_sort_title');
const sort_title_text = document.querySelector('.item_sort_title > span');
const item_sort = document.querySelector('.item_sort');
const item_sort_list = document.querySelectorAll('.item_sort > ul > li');

sort_title.addEventListener('click',()=>{
    if(item_sort.style.opacity == "1"){
        item_sort.style.opacity = "0";
    }

    else{
        item_sort.style.opacity = "1";
    }
});

for(let i=0; i<item_sort_list.length; i++){
    item_sort_list[i].addEventListener('click',()=>{
        if(i == 0){
            item_sort.style.opacity= "0";
            sort_title_text.innerHTML = "New Item";
            popularSort();
        }

        else if(i == 1){
            item_sort.style.opacity= "0";
            sort_title_text.innerHTML = "Low Price";
            lowPriceSort();
        }

        if(i == 2){
            item_sort.style.opacity= "0";
            sort_title_text.innerHTML = "High Price";
            highPriceSort();
        }
    })
}



//=================================================================

for (let i = 0; i < item_page_list_items.length; i++) {
    popular_info_array.push(new item_info(item_name[i].innerHTML, item_price[i].innerHTML, item_image[i].src));
    item_info_array.push(new item_info(item_name[i].innerHTML, item_price[i].innerHTML, item_image[i].src));
}

function item_info(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}
//=================================================================

for (let i = 0; i < paging_numbers.length; i++) {
    paging_numbers[i].addEventListener('click', () => {
        for (let j = 0; j < paging_numbers.length; j++) {
            paging_numbers[j].classList.remove('active');
            item_page_list[j].classList.remove('active');
        }
        paging_numbers[i].classList.add('active');
        item_page_list[i].classList.add('active');
    })
}

leftArrow.addEventListener('click', () => {
    if (paging_numbers[0].classList == "active")
        return;

    for (let i = 0; i < paging_numbers.length; i++) {
        if (paging_numbers[i].classList == "active") {
            paging_numbers[i].classList.remove('active');
            item_page_list[i].classList.remove('active');
            paging_numbers[i - 1].classList.add('active');
            item_page_list[i - 1].classList.add('active');
        }
    }
});

rightArrow.addEventListener('click', () => {
    if (paging_numbers[paging_numbers.length - 1].classList == "active")
        return;

    for (let i = 0; i < paging_numbers.length; i++) {
        if (paging_numbers[i].classList == "active") {
            paging_numbers[i].classList.remove('active');
            paging_numbers[i + 1].classList.add('active');
            item_page_list[i].classList.remove('active');
            item_page_list[i + 1].classList.add('active');

            break;
        }
    }
});


// 낮은 가격순을 정렬 ====================================

function compareLowPrice(price1, price2) {
    return price1.price < price2.price ? -1 : price1.price > price2.price ? 1 : 0;
}

function lowPriceSort() {
    item_info_array.sort(compareLowPrice);
    for (let i = 0; i < item_info_array.length; i++) {
        item_name[i].innerHTML = item_info_array[i].name;
        item_price[i].innerHTML = item_info_array[i].price;
        item_image[i].src = item_info_array[i].image;
    }
}

// 높은 가격순을 정렬 ====================================

function compareHighPrice(price1, price2) {
    return price1.price > price2.price ? -1 : price1.price < price2.price ? 1 : 0;
}

function highPriceSort() {
    item_info_array.sort(compareHighPrice);
    for (let i = 0; i < item_info_array.length; i++) {
        item_name[i].innerHTML = item_info_array[i].name;
        item_price[i].innerHTML = item_info_array[i].price;
        item_image[i].src = item_info_array[i].image;
    }
}

// 인기순으로 정렬 =======================================

function popularSort() {
    for (let i = 0; i < popular_info_array.length; i++) {
        item_name[i].innerHTML = popular_info_array[i].name;
        item_price[i].innerHTML = popular_info_array[i].price;
        item_image[i].src = popular_info_array[i].image;
    }
}







// 가격 추출
// 가격비교
// 가격 낮은 순으로 배열 값 push
// 옮긴 배열들을 replace