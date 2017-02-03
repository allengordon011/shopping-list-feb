//build state object
let state = {
    items: []
}
//build functions that modify state
const addItem = function(state, item) {
    state.items.push(item)
}
// const toggleChecked = function(state, item) {
//     state.items.item.checked = true;
// }
// const toggleDeleted = function(item) {
//     state.items.item.deleted = true;
// }
//build functions that render state
const renderList = function(state, element) {
    console.log(state)
    const itemsHTML = $('.shopping-list').state.items.map(function(item) {
        return $('.shopping-item').after(item)
    })
    element.html(itemsHTML)
}
//build event listeners
function submitForm() {
    $('#shopping-list-entry').submit(function(event) {
        event.preventDefault();
        console.log('HELLLLOOO')
        // addItem(state, $('input').val())
        // console.log(state)

    })
    // renderList(state, $('.shopping-list'))
}

function checkItem() {
    $('.shopping-item-toggle').click(function() {
        $( this ).closest('li').toggleClass('shopping-item__checked')
    })
}

function deleteItem() {
    $('.shopping-item-delete').click(function() {
        $( this ).closest('li').remove()
    })
}

deleteItem()
checkItem()
