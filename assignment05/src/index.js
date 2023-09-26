import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div id="header">
      <h1>FOUR SILOS CRAFT COFFEE & BEER HOUSE.</h1>
      <h2>
        The Best Coffee in <a href="https://www.gilbertaz.gov/">Gilbert, AZ.</a>
      </h2>
      <div className="clear-float"></div>
    </div>
    <div id="content-1">
      <div className="thumbnail">
        <div className="img-container">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
            alt="Coffee"
          />
        </div>
        <h3>Only Fresh Ingredients</h3>
        <p>
          We believe that you, our customers, deserve the best. That is why our
          recipes are centered around quality, fresh ingredients. We refuse to
          sacrifice taste in order to save time or money - that's why the
          outcome is always delicious. We feel that sharing a meal or a coffee
          or a beer is a way to bring people together. Our commitment to using
          the best ingredients ensures that all of our community has a memorable
          experience in every bite. Come visit us and see what we are doing!
        </p>
        <div className="clear-float"></div>
      </div>
      <div className="thumbnail">
        <div className="img-container">
          <img
            src="https://cdn.tasteatlas.com/images/recipes/dc9f05dfe406400fa162620536da3c70.jpg"
            alt="Vespa Wheel Pizza"
          />
        </div>
        <h3>Call Up Your Friends</h3>
        <p>
          Welcome to Four Silos, where we welcome family, friends, and neighbors
          for any occasion! Whether you're stopping in for a quick cup of
          coffee, want to enjoy a beer or cocktail with friends, or hosting a
          special family gathering with delightful food crafted especially for
          your event, there's something delicious here no matter the time of
          day. The neighborhood block party atmosphere is perfect to relax and
          socialize while enjoying our carefully crafted menu.
        </p>
        <div className="clear-float"></div>
      </div>
      <div className="thumbnail">
        <div className="img-container">
          <img
            src="https://ssl.cdn-redfin.com/photo/86/mbphoto/480/genMid.6502480_61_7.jpg"
            alt="Four Silos"
          />
        </div>
        <h3>We're Family Friendly</h3>
        <p>
          Hey! We're a local family that lives in the neighborhood. We had our
          girls' first birthdays here years ago, with smash cakes on the floor
          and great-grandmas swinging at pinatas from the metal awning hanging
          over the new patio. We spent many nights on bike rides with neighbors,
          loading a cold drink in our kroozies and reminiscing around the silos.
          We referred to it as a trip to 'four silos brewery.' Motivated by the
          desire to create a true neighborhood gathering place, our dream became
          a reality. Cheers! #4Silos4You
        </p>
        <div className="clear-float"></div>
      </div>
      <div className="clear-float"></div>
    </div>
    <div id="content-2">
      <div className="review">
        <img
          className="profile"
          src="https://xsgames.co/randomusers/assets/avatars/female/39.jpg"
          alt="Jasmine"
        />
        <h3>Jasmine says...</h3>
        <img
          src="https://microbelift.com/wp-content/uploads/2020/06/five-star-png-free-download-fourjayorg-five-stars-png-1057_296.png"
          alt="5 stars"
        />
        <blockquote>
          After a day of adventuring I was looking for a coffee spot and he
          wanted something to eat so I started looking for a brewery and I found
          this gem that is coffee and beer! I wish we lived closer because this
          hit the spot on every level today. We split the bacon ranch pizza and
          spin-aru salad, both excellent choices. After a bit we were still a
          little hungry so went for the cinnamon roll and pecan affogato and it
          was the perfect way to end a perfect day.
        </blockquote>
        <p>– September 1, 2022</p>
      </div>
      <div className="review">
        <img
          className="profile"
          src="https://xsgames.co/randomusers/assets/avatars/male/55.jpg"
          alt="Alex"
        />
        <h3>Alex says...</h3>
        <img
          src="https://microbelift.com/wp-content/uploads/2020/06/five-star-png-free-download-fourjayorg-five-stars-png-1057_296.png"
          alt="5 stars"
        />
        <blockquote>
          My teen daughter wanted to take me out for Mothers Day. I had been
          wanting to try this place. I love it! Laid back atmosphere, friendly
          staff, great food and the place is spotless! Nice outdoor sitting
          area. I’m bummed we missed the live music. My teen loved it too and
          can’t wait to go back. It’s worth the drive 20 min from south
          Chandler!
        </blockquote>
        <p>– June 21, 2021</p>
      </div>
      <div className="clear-float"></div>
      <div className="review">
        <img
          className="profile"
          src="https://xsgames.co/randomusers/assets/avatars/female/25.jpg"
          alt="Melodie"
        />
        <h3>Melodie says...</h3>
        <img
          src="https://microbelift.com/wp-content/uploads/2020/06/five-star-png-free-download-fourjayorg-five-stars-png-1057_296.png"
          alt="5 stars"
        />
        <blockquote>
          One of my favorite local breweries! You can't go wrong with anything
          on tap, including the root beer! The pretzel and cheese is a must
          every time I go. This place has the perfect set up for those days you
          want to "work different" the staff is always super helpful and great
          conversation. I highly recommend.
        </blockquote>
        <p>– March 6, 2023</p>
      </div>
      <div className="review">
        <img
          className="profile"
          src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg"
          alt="Qaisar"
        />
        <h3>Qaisar says...</h3>
        <img
          src="https://microbelift.com/wp-content/uploads/2020/06/five-star-png-free-download-fourjayorg-five-stars-png-1057_296.png"
          alt="5 stars"
        />
        <blockquote>
          Four Silos has been the best addition to our side of town! Its family
          friendly and a great hang out for Friday nights or Sunday breakfast!
          Food is great, service is fast and the staff is superb! We always feel
          so welcome and it is becoming a weekly hang out spot for our
          neighborhood families!
        </blockquote>
        <p>– August 12, 2019</p>
      </div>
      <div className="clear-float"></div>
    </div>
  </React.StrictMode>
);
