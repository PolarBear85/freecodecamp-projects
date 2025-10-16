function validate(email) {

  const regex =   /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9-!]+(\.[A-Za-z0-9-!]+)*(\.[A-Za-z]{2,})$/
 = Boolean(email.match(regex))

  console.log(check)

  return check;
}

validate("a@b.cd")
validate("hell.-w.rld@example.com")
validate(".b@sh.rc")
validate("example@test.c0")
validate("freecodecamp.org")
validate("develop.ment_user@c0D!NG.R.CKS")
validate("hello.@wo.rld")
validate("hello@world..com")
validate("git@commit@push.io")

/*
Email Validator
Given a string, determine if it is a valid email address using the following constraints:

It must contain exactly one @ symbol.
The local part (before the @):
Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
Cannot start or end with a dot.
The domain part (after the @):
Must contain at least one dot.
Must end with a dot followed by at least two letters.
Neither the local or domain part can have two dots in a row.

*/