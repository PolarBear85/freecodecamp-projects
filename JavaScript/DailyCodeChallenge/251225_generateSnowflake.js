function generateSnowflake(crystals) {

  const firstArr = crystals.split("\n")

  console.log(firstArr)

  for (let x=0; x<firstArr.length; x++) {
    firstArr[x] = firstArr[x] + firstArr[x].split(""). reverse().join("")
  }

console.log(firstArr)
  return firstArr.join("\n");
}

generateSnowflake("*  -\n * -\n*  -")

/*
Snowflake Generator
Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

Mirror a line by reversing all of its characters, including spaces.
For example, given "* \n *\n* ", which logs to the console as:

* 
 *
* 
Return "*  *\n ** \n*  *", which logs to the console as:

*  *
 ** 
*  *
Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.


Tests
Waiting:1. generateSnowflake("* \n *\n* ") should return "*  *\n ** \n*  *".
Waiting:2. generateSnowflake("X=~") should return "X=~~=X".
Waiting:3. generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ") should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".
Waiting:4. generateSnowflake("*   *\n * * \n* * *\n * * \n*   *") should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".
Waiting:5. generateSnowflake("*  -\n * -\n*  -") should return "*  --  *\n * -- * \n*  --  *".

*/