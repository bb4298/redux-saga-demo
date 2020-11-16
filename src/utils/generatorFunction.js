function* increase(){
    let i = 0;
    while(true){
        if(i ==3){
            return 'done';
        }
        yield ++i;    
    } 
}
const ic = increase();
console.log(ic.next());
console.log(ic.next());
console.log(ic.next());