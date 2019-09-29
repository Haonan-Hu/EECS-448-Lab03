var collection  = ['cat1.jpeg', 'cat2.jpeg', 'cat3.jpeg', 'cat4.jpeg', 'cat5.jpeg'];
var curImg = 0
function previous()
{
  if(curImg == 0)
  {
    curImg = 4;
  }
  else
  {
    curImg--;
  }
  document.images[0].src = collection[curImg];
}

function next()
{
  if(curImg == 4)
  {
    curImg = 0;
  }
  else
  {
    curImg++;
  }
  document.images[0].src = collection[curImg];
}
