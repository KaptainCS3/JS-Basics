/*
 *  Author: KaptainCS3
 *  Description: Function Expression
 *  Date: 10th March 2022
 */

//! defining our own method

const myMath = {
  PI: 3.14,
  diameter: function (radius) {
    return radius / 2;
  },
  areaCircle: function (PI, radius) {
    return PI * radius ** 2;
  },
  areaRectangle: function (length, width) {
    return length * width;
  },
  areaCube: function (areaRectangle, height) {
    return areaRectangle * height;
  },
};
