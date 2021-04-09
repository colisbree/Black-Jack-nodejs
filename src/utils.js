export function wait(iterator, milliseconds, callback){   // fonction permettant de ralentir l'ordinateur
    const int = setInterval(() => {
        const { done } = iterator.next()
        if (done){
            clearInterval(int);
            callback()
        }
    }, milliseconds);
}