const projectStatus = {
  PENDING: {description:"Pending Execution"},
  SUCCESS: {description:"Executed Successfully"},
  FAILURE: {description:"Execution Failed"}
}


class ProjectIdea {
  constructor (title, description) {
    this.title = title
    this.description=description
    this.status = projectStatus.PENDING
  }

  updateProjectStatus(status) {
    this.status = status

  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title
    this.ideas = []
  }

  pin(idea) {

    this.ideas.push(idea)

  }
  
  unpin(idea) {
    console.log(this.ideas)
    this.ideas.splice(this.ideas.indexOf(idea),1)
    console.log(this.ideas)

  }

  count() {

  }

  formatToString() {
    if (!this.ideas.length) {
      return `Empty Board has 0 idea(s)\n`
    }
    const numProjs = this.ideas.length
    let returnString = ""

    this.ideas.forEach(idea => {
      const projectTitle = idea.title
      const projectStatus = idea.status.description
      const projectDescription = idea.description
      returnString += `${projectTitle} (${projectStatus}) - ${projectDescription}\n`
    })
    return `${this.title} has ${numProjs} idea(s)\n${returnString}`
  }
}


const newIdea = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")

const techProjects = new ProjectIdeaBoard("Tech Projects Board")

techProjects.pin(newIdea)

console.log(techProjects.formatToString())

