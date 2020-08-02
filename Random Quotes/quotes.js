var btn = document.getElementById('btn');
var output = document.getElementById('output');
var quotes = [    
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough.',
    'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.',
    'Life is what happens when you are busy making other plans.',
    'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    'When you reach the end of your rope, tie a knot in it and hang on.',
    'Always remember that you are absolutely unique. Just like everyone else.',
    'Dont judge each day by the harvest you reap but by the seeds that you plant.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    'It is during our darkest moments that we must focus to see the light.',
    'Whoever is happy will make others happy too.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    'When you reach the end of your rope, tie a knot in it and hang on.',
    'Always remember that you are absolutely unique. Just like everyone else.',
    'Dont judge each day by the harvest you reap but by the seeds that you plant.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    'It is during our darkest moments that we must focus to see the light.',
    'Whoever is happy will make others happy too.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    'You will face many defeats in life, but never let yourself be defeated.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'Never let the fear of striking out keep you from playing the game.',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})