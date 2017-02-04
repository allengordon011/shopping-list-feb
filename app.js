//build state object
let state = {
    items: []
}

//build functions that modify state
const addItem = function(state, item) {
    state.items.push(item)
    renderList(state, $('.shopping-list'))
}
//**was building state management here**
// const toggleChecked = function(state, item) {
//     state.items.item.checked = true;
// }
// const toggleDeleted = function(item) {
//     state.items.item.deleted = true;
// }

//build functions that render state
const renderList = function(state, element) {
    let itemsHTML = state.items.map(function(item, index) {
        console.log(item)
        return '<li>\n\t<span class="shopping-item">' + item + '</span>\n<div class="shopping-item-controls">\n\t<button class="shopping-item-toggle">\n\t<span class="button-label">check</span>\n</button>\n<button class="shopping-item-delete">\n\t<span class="button-label">delete</span>\n</button>\n</div></li>'
    })
    return element.html(itemsHTML)
}

//build event listeners
//**DO NOT NEED TO BE IN FUNCTIONS**
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('input').val())
    console.log(state)
})

$('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').toggleClass('shopping-item__checked')
})

$('.shopping-list').on('click', '.shopping-item-delete', function() {
$(this).closest('li').remove()
})
