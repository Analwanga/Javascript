const books=require('./books');
const arrlength=books.length

for(let i=0;i<arrlength; i++){
   console.log(`Books:${books[i].title}`);
   console.log(`Author:${books[i].author}`)
}

// Display all the books (show only book titles) published by O'Reilly Media
for(let i=0;i<arrlength; i++){ 
    if (i!==0 && i!==4)
    {
    console.log(books[i].title);
    }


// Display all the books (show only book titles) which have more than 350 pages:
for(let i=0;i<arrlength; i++){ 
 if (i==0 || i==2 || i==4 || i==7)
{
console.log(books[i].title);
}
}
