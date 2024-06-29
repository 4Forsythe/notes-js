const noticeInlet = document.getElementById('notice-inlet')
const noticeInvoke = document.getElementById('notice-invoke')
const noticeCollection = document.getElementById('notice-collection')
const noticeRemove = document.getElementById('notice-remove')

const noteRepository = ['Hello there! This is a simple solution of notebook app based on JavaScript.', 'Use your imagination and write something for me! :)']

noticeInvoke.onclick = function() {
    if(noticeInlet.value.length == 0) return
    const note = noticeInlet.value
    noteRepository.push(note)
    noticeReload()
    noticeInlet.value = null
}

noticeCollection.onclick = function(event) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type
    if(type == 'remove') noteRepository.splice(index, 1)
    noticeReload()
}

function noticeCreation(value, index) {
    return `
    <li class="notice-container">
    <span class="note">${value}</span>
    <span class="notice-remove" data-index="${index}" data-type="remove">&times;</span>
    </li>
    `
}
function noticeReload() {
    noticeCollection.innerHTML = ''
    for(let i = 0; i < noteRepository.length; i++) {
        noticeCollection.insertAdjacentHTML('beforeend', noticeCreation(noteRepository[i], i))
    }
}
noticeReload()