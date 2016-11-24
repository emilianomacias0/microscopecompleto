
//Permite postrar los posts desde la seccion de comments
// Esto es util para hacer relaciones
ReactiveTemplates.onCreated('collections.comments.index',function(){
	this.subscribe('posts', {sort: {submitted: -1, _id: -1}, limit: 0});
});