export class Model{

    
    user;
    items;

    constructor(){
        this.user="tugrankenger";
        this.items=[
            new TodoItem("Joker 2019",true),
            new TodoItem("Parasite 2019",false),
            new TodoItem("One Flew Over the Cuckoo's Nest 1975",true),
            new TodoItem("Interstellar 2014",true)
          ];
    }
}

export class TodoItem{
    description;
    action;

    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}