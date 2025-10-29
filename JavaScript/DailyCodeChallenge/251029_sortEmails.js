function sort(emails) {

  const emailObjs = emails.map(email => ({user:email.split("@")[0],domain:email.split("@")[1]}))
  emailObjs.sort((a,b) => {
    const domainA = a.domain.toLowerCase()
    const domainB = b.domain.toLowerCase()


    if (domainA < domainB) {
      return -1
    }
    if (domainA > domainB) {
       return 1
    }
    const userA = a.user.toLowerCase()
    const userB = b.user.toLowerCase()
    if (userA < userB) {
      return -1
    }
    if (userA > userB) {
      return 1
    }
    return 0
  }) 
  console.log(emailObjs)
  const returnArr = emailObjs.map(object => `${object.user}@${object.domain}`)

  console.log(returnArr)
  return returnArr
}


sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"])


/*
Email Sorter
On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the @), and username second (the part before the @).

Sorting should be case-insensitive.
If more than one email has the same domain, sort them by their username.
Return an array of the sorted addresses.
Returned addresses should retain their original case.
For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], return ["jane@example.com", "john@example.com", "jill@mail.com"].
*/