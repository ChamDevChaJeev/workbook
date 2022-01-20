class Stack{
    constructor(max_limit){
       this.max_limit=max_limit;
       this.index=-1;
       this.stack=[];
    }

    push(val){
        this.stack[++this.index]=val;
    }
    pop(){
        return(this.stack[this.index--]);
    }
    isEmpty(){
        return(this.index==-1);
    }
    top(){
        return(this.stack[this.index]);
    }
    getMin(){
        let ans=this.stack[0];
        for(let i=1;i<=this.index;i++){
           ans= Math.min(this.stack[i],ans);
        }return ans;
    }
}

let stack=new Stack(20);
stack.push(1100);
stack.push(100);
stack.push(500);
stack.push(700);
stack.push(90);
stack.push(300);
stack.push(200);
stack.push(800);

while(!stack.isEmpty()){
console.log("top value: "+stack.top());
console.log("min value of available entry: "+stack.getMin());
console.log("Popping value from index: "+stack.index+" value = "+stack.pop());
console.log(" ");
}
