function jokeGenerator()
{
   const xhr = new XMLHttpRequest()

xhr.open('GET','https://api.chucknorris.io/jokes/random')

xhr.onreadystatechange = function()
{
   if(this.readyState === 4)
   {
      if(this.status === 200)
      {
         const joke =(JSON.parse(this.responseText))
         document.querySelector('#jokeHere').innerHTML = joke.value
         // Because the joke is there in "value" as key in the random joke api.
      }
      else{
         document.querySelector('#jokeHere').innerHTML = 'Error in loading the joke(not funny!)'
      }
   }
}

xhr.send()
}


document.querySelector('#getJoke').addEventListener('click', jokeGenerator)
document.addEventListener('DOMContentLoaded', jokeGenerator)
