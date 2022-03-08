/*  
 * Author: KaptainCS3
 *  Description: Lexical scope
 *  Date: 8th March 2022
 */

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
  function cryForHelp() {
    for (let hero of heroes) console.log(`Help us ${hero.toUpperCase()}`);
  }
  cryForHelp();
}
bankRobbery();
