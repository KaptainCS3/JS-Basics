/*  Author: KaptainCS3 
 *  Description: Object Literal practice exercise
 *  Date: 21th February 2022
 */
function Cylinder(cyl_height, cyl_diameter){
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function(){
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius**2;
};
var cyl = new Cylinder(7, 4);
// Volume of Cylinder with 4 decimal places

console.log("Volume =", cyl.Volume().toFixed(4));