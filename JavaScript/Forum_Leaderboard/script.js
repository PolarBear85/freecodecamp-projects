const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const postsContainer = document.querySelector("#posts-container")

function timeAgo(isoDate) {
  const now = new Date(Date.now())
  const past = new Date(isoDate)

  
  const diffMS = now.getTime() - past.getTime()
  const mins = Math.floor(diffMS / 60000)
  const hours = Math.floor(diffMS / 3600000)
  const days = Math.floor(diffMS / 86400000)


  switch (true) {
    case (days >= 1): return `${days}d ago`
    case (hours >= 1): return `${hours}h ago`
    case (mins >= 1): return `${mins}m ago`
    default: return `Just Now`
  }


}



function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views/1000)}k`
  }
  return views
}


function forumCategory(id) {
  let className = "general"
  let category = "General"
  if (Object.hasOwn(allCategories,id)) {
    const categoryInfo = allCategories[id]
    className = categoryInfo.className
    category = categoryInfo.category
  }
  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`
  
}

function avatars (posters,users) {
  if (!Array.isArray(posters) || !Array.isArray(users)) {
    return `Not arrays`
  }
  const imgArr = posters.map (poster => {
    const thisUser = poster.user_id
    const matchingUser = users.find(user => user.id === thisUser)
    if (matchingUser) {
      const imgPath = matchingUser.avatar_template.replace("{size}",30)
      return `<img src="${avatarUrl}${imgPath}" alt="${matchingUser.name}"/>`
    }
    return ""

  })
  return imgArr.join("")
  
}


function showLatestPosts(object) {
  const users = object.users;
  const topics = object.topic_list.topics;
  const htmlArr = [];

  topics.forEach(topic => {
    const id = topic.id;
    const title = topic.title;
    const views = topic.views;
    const postsCount = topic.posts_count;
    const slug = topic.slug;
    const posters = topic.posters;
    const categoryId = topic.category_id;
    const bumped = topic.bumped_at;
    const forumCat = forumCategory(categoryId)
    const avatarImgs = avatars(posters,users)
    const timePassed = timeAgo(bumped)





    htmlArr.push(`<tr><td><a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCat}</td><td><div class="avatar-container">${avatarImgs}</div></td><td>${postsCount-1}</td><td>${views}</td><td>${timePassed}</td></tr>`);

  })
  console.log("This is a single html return")
  console.log(htmlArr[0])

  postsContainer.innerHTML = htmlArr.join("")
}


async function fetchData() {
  console.log("LETS TRY THIS")
  try {
    fetch(forumLatest)
      .then(response => response.json())
      return response

  } catch (error) {
    console.log("error")
  }
}

