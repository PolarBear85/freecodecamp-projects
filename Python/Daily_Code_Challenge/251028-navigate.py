def navigate(commands):

    directory = ["Home"]
    current_location = 0

    for command in commands:
        if command == "Back":
            if current_location != 0:
                current_location -= 1

        elif command == "Forward":
            if current_location != len(directory)-1:
                current_location += 1
            

        else:
            if current_location != len(directory)-1:
                directory = directory[:current_location+1]
            
            directory.append(command[6:])
            current_location = len(directory)-1



    print(directory,current_location)
    return directory[current_location]

'''
Navigator
On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

You always start on the "Home" page, which will not be included in the commands array.
Valid commands are:
"Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
"Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
"Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

Tests
Passed:1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".
Passed:2. navigate(["Forward"]) should return "Home".
Passed:3. navigate(["Back"]) should return "Home".
Passed:4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".
Passed:5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".
Passed:6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact".
Passed:7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us".
'''





navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"])