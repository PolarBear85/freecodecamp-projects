function emailChainCount(subject) {

  const regex = /(re:|fw:|fwd:)/ig
  const answer = (subject.match(regex)||[]).length
  console.log(answer)
  return answer
}

emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary")

emailChainCount("Meeting Notes")

/*
Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

"fw:"
"fwd:"
"re:"
Return the total number of occurrences of these markers.


Tests
Passed:1. emailChainCount("Re: Meeting Notes") should return 1.
Passed:2. emailChainCount("Meeting Notes") should return 0.
Passed:3. emailChainCount("Re: re: RE: rE: Meeting Notes") should return 4.
Passed:4. emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes") should return 5.
Passed:5. emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary") should return 23.

*/