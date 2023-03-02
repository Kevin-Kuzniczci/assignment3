for (countdown = prompt('Please select a number between 1 and 100 to countdown from'); countdown >= 0; countdown--) {
    console.log(countdown);

    if (countdown == 0) {
        console.log('You are at the end, yay!');
    }
}