const onDragStart = e => {
    e.dataTransfer.setData('text/plain', e.target.id)
}

const onDragOver = e => {
    e.preventDefault()

}

const onDrop = (e, el) => {
   const id = e.dataTransfer.getData('text')
   const dragElement = document.querySelector(`#${id}`)
   const dropArea = e.target
   el.appendChild(dragElement)
   el.dataTransfer.clearData()

}