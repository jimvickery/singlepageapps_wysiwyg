console.log('in wysiwyg.js');


// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

//place famous people in array





let famousPeople = [ 

{
  title: "President",
  name: "Ron Reagan",
  bio: "was an American politician and actor who served as the 40th President of the United States from 1981 to 1989. Before his presidency, he was the 33rd Governor of California, from 1967 to 1975, after a career as a Hollywood actor and union leader.",
  image: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTE5NDg0MDU1MTA5OTkzOTk5/ronald-reagan-9453198-1-402.jpg",
  lifespan: {
    birth: 1911,
    death: 2004
  }
},

{
  title: "President",
  name: "Abe Lincoln",
  bio: "Always bear in mind that your own resolution to succeed is more important than any one thing. Serving as the 16th president of the United States, Lincoln carried out many vital endeavors. His greatest accomplishment, without a doubt, was the initiation of ‘Emancipation Proclamation’. Lincoln has consistently been ranked by scholars as one of the greatest of all U.S. Presidents.",
  image: "http://www.topyaps.com/wp-content/uploads/2010/09/Abraham-Lincoln.jpg ",
  lifespan: {
    birth: 1911,
    death: 2004
  }
},


{
  title: "President",
  name: "Geoorge Washington",
  bio: "A legend in classic sense, he was the first president of the United States and a major figure in the establishment of the US, during and following the Revolutionary War. He is known as one of the Founding Fathers of the country. As a President, Washington established the framework of the national executive branch. He oversaw the work to build a new national capital, and it was named Washington D.C. in his honor.",
  image: "http://www.topyaps.com/wp-content/uploads/2010/09/george-washington.jpg",
  lifespan: {
    birth: 1732,
    death: 1799
  }
},


{
  title: "President",
  name: "Teddy Roosevelt",
  bio: "Headed in the direction of genius at political leadership, he was the 26th president of America. He brought new excitement and power to the Presidency, as he vigorously led Congress and the American public toward progressive reforms and a strong foreign policy. His conservationism and willingness to take on big business are examples of why he is considered to be one of the influential presidents in America’s history.",
  image: "http://www.topyaps.com/wp-content/uploads/2010/09/theodore-roosevelt.jpg",
  lifespan: {
    birth: 1911,
    death: 2004
  }
},


{
  title: "President",
  name: "FDR",
  bio: "FDR was the 32nd president of the United States of America. Roosevelt launched major legislation and a profusion of executive orders that gave form to the New Deal—a complex, interlocking set of programs designed to produce relief (especially government jobs for the unemployed), recovery (of the economy), and reform (through regulation of Wall Street, banks and transportation).",
  image: "http://www.topyaps.com/wp-content/uploads/2010/09/franklin-roosevelt.jpg",
  lifespan: {
    birth: 1882,
    death: 1945
  }
},


{
  title: "President",
  name: "Dwight David Eisenhower",
  bio: "Born in Texas in 1890, this 34th President of United States was once the supreme commander of the allied forces in Europe during WW II. Eisenhower focused on establishing the world peace (despite the Korean conflict) and created an example of a non-partisan approach to politics. He will be remembered for declaring racial discrimination as a national security issue according to which Communists around the world were using racial discrimination in the U.S. as a point of propaganda attack.",
  image: "http://www.topyaps.com/wp-content/uploads/2010/09/eisenhower.jpg",
  lifespan: {
    birth: 1890,
    death: 1969
  }
}

];


//get placeholder for cards
let placeHolder = document.querySelector(".main-content");
let famousInfo = "";


//foreach loop to get content for div containers
famousPeople.forEach(function (item){
  famousInfo += `
  <div class = "main-content">
<div class="person_container">
 <h2> ${item.name}</h2>
<h4> Title: ${item.title} </h4>
      <img class="imageholder" src="${item.image}">
        <h4> Bio</h4>
     <p> ${item.bio} </p>         
        
        <footer>Bitth: ${item.lifespan.birth}   Death: ${item.lifespan.death}</footer> 
  </div>
    </div>
  
  
  `;

});

// set placeHolder = to info
placeHolder.innerHTML = famousInfo;


$(document).ready(function (){
  $(".person_container:even").css( "background-color", "lightblue" );
  $(".person_container:odd  ").css( "background-color", "lightyellow" );
  $(".person_container").click(function(){
    $(this).css("border", "dotted 5px blue");
  });
  

 

});


