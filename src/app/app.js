const galleryContainer = document.querySelector('.gallery-container')
const randomButton = document.querySelector('.random-image')


async function getPhotos(){
    const photosUrl = 'https://picsum.photos/300'
    const responseData = await fetch(photosUrl)
    .then(res =>{
        galleryContainer.innerHTML = `<img src="${res.url}" alt="random phtos"/>`
     
    })  
}

window.addEventListener('load', getPhotos)

randomButton.addEventListener('click', (e)=>{
    e.preventDefault()
    getPhotos()
})



