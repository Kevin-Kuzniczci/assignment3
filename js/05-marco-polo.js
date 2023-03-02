for (pool = 0; pool <= 100; pool++) {
    if(pool % 3 == 0 && pool % 5 == 0) {
        console.log('Marco! Polo!')
    } else if(pool % 3 == 0) {
        console.log('Marco!')
    } else if(pool % 5 == 0) {
        console.log('Polo!')
    } else {
        console.log('*silence*')
    }
}