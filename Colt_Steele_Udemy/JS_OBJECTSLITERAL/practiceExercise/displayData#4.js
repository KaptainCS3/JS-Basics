/*  Author: KaptainCS3 
 *  Description: Object Literal practice exercise
 *  Date: 21th February 2022
 */
let i = 0;

var library = [
    {
        author: 'Bill GAtes',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay : The Final Book of The Hunger',
        readingStatus: false
    }
];

while(i < library.length){
    console.log(`${library[i].author}${"\n"}${library[i].title},${"\n"}${library[i].readingStatus}${"\n"}`);
    i++;
}