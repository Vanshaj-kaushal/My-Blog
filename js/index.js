const SIZE = 3;
const contnt = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam id quod sunt explicabo harum unde impedit inventore corporis sit asperiores tenetur consequuntur corrupti, debitis sequi laboriosam. Vel, id architecto!";

function start(){
  let p1 = document.querySelector('.programming');
  for(let i=0;i<SIZE;i++){
    p1.appendChild(card_create('Learning C language', contnt));
  }

  let p2 = document.querySelector('.cooking');
  for(let i=0;i<SIZE;i++){
    p2.appendChild(card_create('Making Vegetable Soup', contnt));
  }
}

function card_create(title, content){
  let card = document.createElement("div");
  card.className = "card";


  let headingContainer = document.createElement('div');
  headingContainer.className = "card-heading";
  let headingSpan = document.createElement('span');
  let h1 = document.createElement('h1');
  h1.textContent = title;
  headingSpan.appendChild(h1);
  headingContainer.appendChild(headingSpan);
  card.appendChild(headingContainer);

  let contentContainer = document.createElement('div');
  contentContainer.className="card-content";
  contentContainer.textContent = content;
  card.appendChild(contentContainer);


  return card;
}