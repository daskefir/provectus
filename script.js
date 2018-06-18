const menuItems = [{
        name: 'American Hot Dog',
        description: 'Nobis odio necessitatibus expedita vitae amet error eum mollitia, non voluptas? Ex magnam recusandae iure voluptates officia fugit itaque nemo illo velit.',
        expirationDate: '09-24-2018'
    },
    {
        name: 'Beano',
        description: 'Facilis reiciendis vero molestias error eaque mollitia sapiente porro illum. Repudiandae sint impedit nihil dignissimos autem animi ipsum tempore nisi ratione distinctio.',
        expirationDate: '03-11-2018'
    },
    {
        name: 'Dog From Hell',
        description: 'Aspernatur, eaque soluta, nesciunt distinctio at repudiandae iusto atque quas aut nihil enim eveniet! Alias, sint numquam saepe quibusdam. Voluptas, nisi, voluptate.',
        expirationDate: '03-21-2018'
    },
    {
        name: 'Rockaway Beach',
        description: 'Animi, at, sit. Facere consectetur sed reprehenderit eveniet, voluptatibus, dolorum quis, at nihil fugit ullam dicta distinctio libero quisquam iste perspiciatis architecto.',
        expirationDate: '10-03-2018'
    },
    {
        name: 'The Real Man',
        description: 'Dignissimos unde tempore, qui cumque dicta ullam maxime eveniet totam minus debitis pariatur a perspiciatis deleniti, nostrum soluta, voluptas numquam et aliquam!',
        expirationDate: '05-27-2018'
    },
    {
        name: 'Westside, Bestside',
        description: 'Beatae ratione sint facilis, tenetur similique! Dicta natus esse maiores illum. Sit id enim ex, maiores mollitia molestiae possimus ipsam aspernatur, corrupti.',
        expirationDate: '03-24-2018'
    },
];

currentTime = (finishTime) => {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    month = (month < 10) ? '0' + month : month;
    let dateString = date.getFullYear() + '-' + month + '-' + day;
    let current = Date.parse(dateString);
    let itemFinish = finishTime.expirationDate.split('-');
    let finish = itemFinish[2] + '-' + itemFinish[0] + '-' + itemFinish[1];
    let timeFood = Date.parse(finish);
    if (timeFood > current) {
        return true;
    } else {
        return false;
    }
};

const filterByExpiration = (items) => {
    let gooFood = items.filter(item => {
        return currentTime(item);
    })
    return gooFood;
};

console.log(filterByExpiration(menuItems));
