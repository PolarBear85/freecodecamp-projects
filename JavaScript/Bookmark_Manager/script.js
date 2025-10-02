const mainSection = document.querySelector('#main-section')
const formSection = document.querySelector('#form-section')
const categoryDropDown = document.querySelector('#category-dropdown')
const addBookmarkBtn = document.querySelector('#add-bookmark-button')
const categoryName = document.querySelector('.category-name')
const closeFormBtn = document.querySelector('#close-form-button')
const addBookmarkFormBtn = document.querySelector('#add-bookmark-button-form')
const bookmarkName = document.querySelector('#name')
const bookmarkURL = document.querySelector('#url')
const bookmarkListSection = document.querySelector('#bookmark-list-section')
const viewCategoryBtn = document.querySelector('#view-category-button')
const categoryList = document.querySelector('#category-list')

const bookmarksArr = getBookmarks()





function getBookmarks() {

    let retrievedBookmarks
    try { 
        retrievedBookmarks = JSON.parse(localStorage.getItem('bookmarks'))||[]
    } catch (error) {
        console.error("Bookmarks not found:", error)
        return []
    }

    return Array.isArray(retrievedBookmarks) ? retrievedBookmarks : []

}


function displayOrCloseForm() {
    formSection.classList.toggle('hidden')
    mainSection.classList.toggle('hidden')
}

addBookmarkBtn.addEventListener('click', () => {
    categoryName.textContent = categoryDropDown.value
    displayOrCloseForm()
})

closeFormBtn.addEventListener('click', () => {
    displayOrCloseForm()
})

addBookmarkFormBtn.addEventListener('click', () => {
    const newName = bookmarkName.value
    console.log(newName)
    const newURL = bookmarkURL.value;
    const newCategory = categoryDropDown.value

    console.log(newName,newURL,newCategory)
    bookmarksArr.push({name:newName,category:newCategory,url:newURL})
    const updatedBookmarks = JSON.stringify(bookmarksArr)
    localStorage.setItem('bookmarks', updatedBookmarks)
    bookmarkName.value = ''
    bookmarkURL.value= ''
    displayOrCloseForm()
})

function displayOrHideCategory() {
    mainSection.classList.toggle('hidden')
    bookmarkListSection.classList.toggle('hidden')
}

viewCategoryBtn.addEventListener('click', ()=> {
    const selectedCategory = categoryDropDown.value;
    categoryName.textContent = selectedCategory;
    displayOrHideCategory()
    if (!bookmarksArr.some(bookmark => bookmark.category === selectedCategory)) {
        categoryList.innerHTML='<p>No Bookmarks Found</p>'
    } else {
        let htmlString = ''

        bookmarksArr.forEach(bookmark => {
            if (bookmark.category === selectedCategory) {
                htmlString += `<input type='radio' id="${bookmark.name}" value="${bookmark.name}" name='bookmarks'><label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`
            }
        console.log(htmlString)
        })
        categoryList.innerHTML = htmlString
    }


})







/*function getBookmarks() {

    const retrievedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    if (retrievedBookmarks.length = null) {
        return []
    }


    return retrievedBookmarks
}

function CreateRadio (name, url) {
    return `<input type='radio' id="${name}" value="${name}" name='bookmarks'/><label for="${name}"><a href="${url}">${name}</a></label>`
}


//const getBookmarks = () => JSON.parse(localStorage.getItem('bookmarks')) || []  THIS IS A USEFUL ARROW FUNCTION IF NEEDED


*/