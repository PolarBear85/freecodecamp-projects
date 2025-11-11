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


console.log(timeAgo(new Date("01-01-2011")))