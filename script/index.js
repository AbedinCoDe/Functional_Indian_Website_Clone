
let bagItems;

onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItem');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    updateBagItemCount();
    loadDisplayItem();
}


function addToBag(bagId){
    bagItems.push(bagId);
    localStorage.setItem('bagItem', JSON.stringify(bagItems));
    updateBagItemCount();
}


function updateBagItemCount(){
    let bagItemContainer = document.querySelector('.bag_Item_Count');
    if(bagItems.length > 0){
        bagItemContainer.style.visibility = 'visible';
        bagItemContainer.innerText = bagItems.length;
    }else{
        bagItemContainer.style.visibility = 'hidden';
    }

}


function loadDisplayItem(){
    let itemdisplayContainer = document.querySelector('.items_Container');

    if(!itemdisplayContainer){
        return;
    }

    let innerHTML = '';

    items.forEach(item => {

    innerHTML += `

    <div class="item_Container">
        <img class="image_Size" src="${item.image}" alt="">
        <div class="review">
            <span>${item.rating.stars} 🌟 | ${item.rating.count}</span>
        </div>
        <div class="brand_Name">${item.company}</div>
        <div class="item_Name">${item.item_name}</div>
        <div class="item_Wrapper">
            <span class="discounted_Price">Rs: ${item.current_price}</span>
            <span class="Original_Price">Rs: ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} Off)</span>
        </div>
        <button class="add_to_Bag" onclick = "addToBag(${item.id})">Add to Bag</button>
    </div>

    `
})
itemdisplayContainer.innerHTML = innerHTML;

}