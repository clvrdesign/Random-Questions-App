
// copyright
const year = new Date().getFullYear();
document.getElementById('copyRight').innerText = year;

// theme
const moonIcon = document.querySelector('.moon');
const sunIcon = document.querySelector('.sun');
const body = document.querySelector('body');

// Check if there's a theme preference stored in local storage
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
    moonIcon.classList.add('hide');
    sunIcon.classList.remove('hide');
    body.classList.add('dark');
} else {
    moonIcon.classList.remove('hide');
    sunIcon.classList.add('hide');
    body.classList.remove('dark');
}

moonIcon.addEventListener('click', () => {
    moonIcon.classList.add('hide');
    sunIcon.classList.remove('hide');
    body.classList.add('dark');
    // Save the theme preference to local storage
    localStorage.setItem('theme', 'dark');
});

sunIcon.addEventListener('click', () => {
    moonIcon.classList.remove('hide');
    sunIcon.classList.add('hide');
    body.classList.remove('dark');
    // Save the theme preference to local storage
    localStorage.setItem('theme', 'light');
});



// Display generated questions on the screen
const generatedQuestion = document.querySelector('.generated');
const infoSection = document.querySelector('.no-data');
const dataSection = document.querySelector('.data');

document.addEventListener('DOMContentLoaded', ()=>{

    if(generatedQuestion.innerText.trim().length === 0){
        infoSection.classList.remove('hide');
        dataSection.classList.add('hide');
    }else{
        infoSection.classList.add('hide');
        dataSection.classList.remove('hide');
    }
});


// Generate a question whenever a user click the button
const questions = [
    "What is your favorite movie?",
    "Do you have any siblings?",
    "What do you enjoy doing in your free time?",
    "Where is your dream travel destination?",
    "Have you ever tried skydiving?",
    "What's your favorite type of cuisine?",
    "Do you prefer reading fiction or non-fiction books?",
    "What's your opinion on climate change?",
    "What's your go-to karaoke song?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's your favorite childhood memory?",
    "What's your favorite season of the year?",
    "Do you believe in aliens?",
    "What's your favorite board game?",
    "What's the best piece of advice you've ever received?",
    "What's your opinion on social media?",
    "Do you enjoy hiking?",
    "What's your favorite type of music?",
    "What's the most adventurous thing you've ever done?",
    "If you could have any superpower, what would it be?",
    "What's your favorite holiday?",
    "What's your favorite dessert?",
    "What's your favorite color?",
    "Do you prefer cats or dogs?",
    "What's your favorite book?",
    "What's your favorite TV show?",
    "What's your dream job?",
    "Do you have any tattoos?",
    "What's your biggest fear?",
    "What's your favorite place to hang out with friends?",
    "If You Had Three Wishes, What Would You Wish For?",
    "What Would You Rather Throw Away: Love Or Money?",
    "What’s The Most Beautiful Place You’ve Ever Seen?",
    "What Was Your Fondest Memory Of High School?",
    "What’s Your Favorite TV Show?",
    "What’s The Strangest Thing In Your Refrigerator?",
    "Would You Rather Hear The Music Of Johann Sebastian Bach Played By A Barbershop Quartet, Or A Heavy Metal Band?",
    "Have You Ever Been To A Five Star Resort?",
    "What Was Your Favorite Toy Growing Up?",
    "What’s The Funniest Way You’ve Ever Broken The Law?",
    "What’s Your Favorite Sports Team?",
    "What Talent Would You Want To Possess If You Could?",
    "If You Could Trade Lives With Someone, Who Would It Be?",
    "If You Could Erase One Event From History, Which One Would You Erase?",
    "What Was Your Favorite Toy As A Child?",
    "Who Do You Most Like To Poke Fun At?",
    "If You Were Suddenly Transported To Another Planet, How Would You Assess The Situation?",
    "When Do You Feel The Most In Control?",
    "Would You Rather Have 10 Hobbies Or One Passion?",
    "What’s Your Favorite Movie?",
    "If You Could Interview A Famous Person, Who Would You Choose?",
    "If Your Food Is Bad At A Restaurant, Would You Say Something?",
    "If You Could Only Use One Word The Rest Of Your Life, What Word Would You Choose?",
    "What Are Your Dreams And Ambitions?",
    "You’ve Been Given An Elephant. You Can’t Get Rid Of It. What Would You Do With It?",
    "What’s The Funniest Thing You’ve Seen On The News?",
    "If You Had The World’s Attention For 30 Seconds, What Would You Say?",
    "If You Could Be Best Friends With A Celebrity, Who Would It Be?",
    "If You Were To Play A Song You Love Right Now, What Would It Be?",
    "Would You Rather Look Like A Potato, Or Feel Like A Potato?",
    "What Would You Do With 10 Million Dollars?",
    "How Can You Tell If Someone Has A Sense Of Humor?",
    "If You Were To Name Your Own Song, What Would You Name It?",
    "If You Were In A Room Filled With You And Your Doppelganger And 2 Million Dollars, What Would You Do?",
    "What Is In Your Fridge Right Now?",
    "What Have You Learned About Life From Kids?",
    "How Would You Want To Be Remembered?",
    "What Do You Hope Your Deceased Relative Would Say About You If They Saw You Now?",
    "What’s The Strangest Thing That You’ve Ever Fallen In Love With?",
    "If You Could Have Any Super Power, Which One Would You Choose?",
    "If You Were Invited To Attend Hogwarts, Which Hogwarts House Would You Choose?",
    "What Were The Highlights Of Your Childhood?",
    "Have You Ever Kept A Secret For More Than A Decade?",
    "What’s The Most Important Thing You’ve Learned From A Celebrity?",
    "Do You Care About Reviews?",
    "What Would Be The Perfect Crime?",
    "What’s The Stupidest Thing You’ve Ever Done?",
    "Spontaneity Or Stability?",
    "What’s The Funniest Movie You’ve Ever Seen?",
    "Interesting Questions to Ask",
    "What’s your worst habit?",
    "Do they like to take a stand or just let things go?",
    "What’s your favorite song?",
    "How do you think the world would be if bananas were illegal?",
    "Would you rather be able to control time, or be able to know what other people are thinking?",
    "Is it difficult to do what you do? (for a living, hobby etc.)",
    "Who is your favorite celebrity?",
    "If you found $2,000 on the ground, what would you do with it?",
    "What’s your favorite pizza topping?",
    "What would you do if you could possess the abilities of your pet?",
    "What is your favorite team game to play?",
    "Anything interesting you’ve watched lately?",
    "What is the one recent trend you can’t stand?",
    "Is there anything that annoys you about traveling?",
    "What is your favorite drink?",
    "What is one song you can’t help but sing along to?",
    "What is your current pet peeve?",
    "Who was the first YouTuber you discovered?",
    "Do you remember when you first logged onto the internet, and if so, what was the first website you visited?",
    "If you decided to run for President, what would your campaign slogan be?",
    "Random Questions to Ask your Colleagues",
    "What did you do over the weekend?",
    "What do you do for fun?",
    "What was the last movie you watched?",
    "Where did you last travel to?",
    "When did you last take a flight?",
    "Where is your favorite place to get a drink?",
    "What is your favorite place to vacation?",
    "Where did you attend university?",
    "Have you lived in more than one country?",
    "What is your morning routine?"

]


document.querySelector('.btn').addEventListener('click', () => {
    
    infoSection.classList.add('hide');
    dataSection.classList.remove('hide');

    const randomNumber = Math.floor(Math.random() * questions.length);
    generatedQuestion.textContent = questions[randomNumber];

});
