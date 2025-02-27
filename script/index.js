onLoad();

function onLoad(){
    loadDisplayItem();
    addToBag()
}




function addToBag(){
    let bagItemCount = document.querySelector('.bag_Item_Count');

}






function loadDisplayItem(){
    let displayItemContainer = document.querySelector('.items_Container');

    let innerHtml = '';

    items.forEach(item => {

    innerHtml += `
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
        <button class="add_to_Bag" onclick = "addToBag()">Add to Bag</button>
    </div>
    `
    });


    displayItemContainer.innerHTML = innerHtml;
}
