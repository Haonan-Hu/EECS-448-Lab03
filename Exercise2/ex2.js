var collection  = ['cat1.jpeg', 'cat2.jpeg', 'cat3.jpeg', 'cat4.jpeg', 'cat5.jpeg'];
var curImg = 0
function previous()
{
  curImg--;
  if(curImg < 0)
  {
    curImg = 0;
  }
  document.images[0].src = collection[curImg];
}

function next()
{
  curImg++;
  if(curImg > 5)
  {
    curImg = 5;
  }
  document.images[0].src = collection[curImg];
}
