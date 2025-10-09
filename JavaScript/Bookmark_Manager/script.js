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
const closeListBtn = document.querySelector('#close-list-button')
const deleteBookmarkBtn = document.querySelector('#delete-bookmark-button')






function getBookmarks() {

    let retrievedBookmarks
    try { 
        retrievedBookmarks = JSON.parse(localStorage.getItem('bookmarks'))||[]
    } catch (error) {
        console.error("Bookmarks not found:", error)
        return []
    }

    if (Array.isArray(retrievedBookmarks)) {
        const objectCheck = retrievedBookmarks.every(bookmark => {
            const isObject = (
                typeof bookmark === 'object' && 
                bookmark !==null && 
                !Array.isArray(bookmark)
            );

        const propCheck = (
            'name' in bookmark &&
            'category' in bookmark &&
            'url' in bookmark
        );

        return isObject && propCheck;
        })
        

        if(objectCheck) {
            return retrievedBookmarks
        } else {
            return [];
        }
    }

    return [];
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
    const bookmarksArr = getBookmarks() //removed global, added local
    const newName = bookmarkName.value
    const newURL = bookmarkURL.value;
    const newCategory = categoryDropDown.value

    bookmarksArr.push({name:newName,category:newCategory,url:newURL}) //push with new ID
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
    displayOrHideCategory()
    displayBookmarks()

})

closeListBtn.addEventListener('click', ()=> {
    displayOrHideCategory()
})

deleteBookmarkBtn.addEventListener('click', () => {
    const bookmarksArr = getBookmarks() //deleted global, added local
    console.log(bookmarksArr)

    const selectedCategory = categoryDropDown.value;
    const toBeDeleted = document.querySelector(`input[name="${selectedCategory}"]:checked`)

    if(!toBeDeleted) {
        console.warn("Please select a bookmark to be deleted");
        return;
    }

    const updatedArr = bookmarksArr.filter(bookmark => {

        return (
            bookmark.name !== toBeDeleted.value ||
            bookmark.category !== toBeDeleted.name
        )
    })
    console.log(updatedArr)

    localStorage.setItem('bookmarks', JSON.stringify(updatedArr))
    displayBookmarks()

})




function displayBookmarks() {
    const bookmarksArr = getBookmarks() //deleted global, added local
    const selectedCategory = categoryDropDown.value;
    categoryName.textContent = selectedCategory;
    categoryList.innerHTML=""
    let htmlString = ""

    bookmarksArr.forEach(bookmark => {
        if (bookmark.category === selectedCategory) {
            htmlString += `<label for="${bookmark.name}"><input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="${selectedCategory}" /><a href="${bookmark.url}">${bookmark.name}</a></label>`;
        }

    })

    if (htmlString === "") {
        categoryList.innerHTML=`<p>No Bookmarks Found</p>`
    } else {
        categoryList.innerHTML = htmlString
    }
}