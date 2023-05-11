//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  const dogBtn = document.querySelector('.dog-btn'),
  dogFigure = document.querySelector('.dog-figure'),
  dogCaption = document.querySelector('.dog-caption'),
  adjectives = ["Beautiful", "Beloved", "Blissful", "Bold", "Brilliant", "Charming", "Cute", "Dazzling", "Fabulous", "Fantastic", "Fearless", "Friendly", "Funny", "Gentle", "Glorious", "Good", "Gorgeous", "Graceful", "Great", "Handsome", "Happy", "Kind", "Lively", "Lovable", "Lovely", "Magnificent", "Majestic", "Marvelous", "Perfect", "Playful", "Precious", "Radiant", "Remarkable", "Sensational", "Spectacular", "Splendid", "Stunning", "Superb", "Talented", "Vibrant", "Wonderful"];

  //Get dog content button event listener
  dogBtn.addEventListener('click', getDog);

  //Display initial dog content
  getDog();

  function getDog() {

    //Fetch dog data
    fetch('https://random.dog/woof.json').
    then(res => res.json()).
    then(data => {

      const dogURL = data.url,
      prevContent = document.querySelector('.dog-media');

      //Check if previous content exists
      if (prevContent) {
        //Remove previous content
        prevContent.remove();
      }

      //Check file type
      if (dogURL.endsWith('mp4')) {

        //Create video element
        const dogVideo = document.createElement('video');

        //Set video attributes and class
        dogVideo.setAttribute('src', dogURL);
        dogVideo.setAttribute('autoplay', "");
        dogVideo.setAttribute('muted', "");
        dogVideo.setAttribute('loop', "");
        dogVideo.classList.add('dog-media');

        //Display video
        dogFigure.appendChild(dogVideo);

      } else {

        //Create image element
        const dogImage = document.createElement('img');

        //Set image attributes and class
        dogImage.setAttribute('src', dogURL);
        dogImage.classList.add('dog-media');

        //Display image
        dogFigure.appendChild(dogImage);

      }

      //Display caption
      dogCaption.textContent = `A ${adjectives[Math.floor(Math.random() * adjectives.length)]} Doggo!`;

    }).
    catch(err => dogCaption.textContent = 'Doggos Unavailable!');
  }
});