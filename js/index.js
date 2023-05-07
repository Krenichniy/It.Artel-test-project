const refs = {
    container: document.getElementById('js-question'),
    rootContainer: document.getElementById('root'),
}
let array = [
            {date: '2017-01-10'},
            {date: '2016-05-18'},
            {date: '2002-12-20'},
            {date: '2020-06-30'}
];
let sortedByAscDateArr = [...array].sort((firstDate, secondDate) => {
    const a = new Date(firstDate.date).getTime();
    const b = new Date(secondDate.date).getTime();
    return a - b; 
});

let sortedByDescDateArr = [...array].sort((firstDate, secondDate) => {
    const a = new Date(firstDate.date).getTime();
    const b = new Date(secondDate.date).getTime();
    return b - a; 
});

refs.container.insertAdjacentHTML("beforeend", `<code style="background:green; color:white">
      let newArrSortedByAsc = ${JSON.stringify(sortedByAscDateArr)}
</code>`);
refs.container.insertAdjacentHTML("beforeend", `<code style="background:green; color:white">
      let newArrSortedByDesc = ${JSON.stringify(sortedByDescDateArr)}
</code>`);

refs.rootContainer.addEventListener('click', (event) => {
    if (event.target.nodeName === "DIV" && event.target.getAttribute('id') !== 'root') {
        console.log(event.target.getAttribute('id'));
    }
})