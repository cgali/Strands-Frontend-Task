#  _Strands Frontend Knowledge Test_ 

1. *Describe all the decisions that you took during development and the reasoning behind them.* 

First, I decided to render all the names of the dogs’ breeds. First I need to find the correct endpoint at Github’s documentation of the “DOG API”.
To finish this exercise, I decided to put a number to every dog breed to see the order and the total of dogs’ breeds.

 After that, I need to extract the number of images of every dog breed. But the problem is there isn’t an endpoint to extract all the images, only the images of one breed. So with the state that I have with all the breed’s names, I made a map method with the API endpoint inserting the breed inside the endpoint and with the response, I put the property “.length”. With the number, I put it to a variable making a sum for every result. To finish, I put a button with an onClick property to call the function and under the button a paragraph with the state of number of images to render the total. 

For the last exercise, I had to learn how to use Chart.js. It was my first time using it.  But after seeing the documentation I installed the package and then put it to the project.  I had to implement the function of the second exercise to take the information that I needed to render the data of the number of images for each breed.  After that, I decided to make a function to have 94 different types of RGB colors for when I render the pie chart, see more the difference between breeds (but with 94 breeds it’s difficult to render a big differents colors).

2. *If you had more time, what other features would you add to your app and how would you build them?*

If I had more time, first I refactor the code.

Then I would implement some functionalities like the API endpoint to render a random breed with a button to call the function. 

Also, making an interface much better that I have, like putting images to every breed. 

 And finally, I would like to make that the user can click on the name or image of every breed and go to another view to see detailed information.

Maybe I could use chart.js to make a chart to see how many images have every sub-breeds inside the breed, like another information of the breed that you can see.
