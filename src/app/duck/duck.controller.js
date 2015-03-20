angular.module('waterfowlGulpAngular', [])

.controller('DuckCtrl', function(){
    
    this.list = duckArray;
    
    
    
    
    
    
    
    
    
    duckArray = [
        {
            name: "Mallard",
            description: "This is a fun duck to shoot"
        },
        {
            name: "Black Duck",
            description: "Looks like a mallard but darker"
        }
    ]
    
});