def get_extension(filename):

    if "." not in filename:
        return "none"

    file_split = filename.split(".")
    print(file_split[-1])

    if file_split[-1] :
        return file_split[-1]
    else:
        return "none"



get_extension("README")

'''
Extension Extractor
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. get_extension("document.txt") should return "txt".
Passed:2. get_extension("README") should return "none".
Passed:3. get_extension("image.PNG") should return "PNG".
Passed:4. get_extension(".gitignore") should return "gitignore".
Passed:5. get_extension("archive.tar.gz") should return "gz".
Passed:6. get_extension("final.draft.") should return "none".

'''

