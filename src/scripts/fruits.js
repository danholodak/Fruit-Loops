const fruits = [ 
{emoji:'🥥', selected: true, value:'drums'},
{emoji:'🍊', selected: false, value:'bass'},
{emoji:'🍓', selected: false, value:'synth'},
{emoji:'🍌', selected: false, value:'trombone'},
{emoji:'🍎', selected: false, value:'guitar'},
{emoji:'🍍', selected: false, value:'piano'},
{emoji:'🍇', selected: false, value:'bells'},
{emoji:'🍉', selected: false, value:'marimba'}];

fruits.forEach(function(fruit, i){
    fruit.id = i
});

export default fruits