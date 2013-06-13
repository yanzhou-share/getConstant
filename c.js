var Class = (function(){
  var constants = {
						CONSTANTA:100,
						CONSTANTB:200,
						CONSTANTC:300		
					},
		ctor = {};
	
	ctor.getConstant = function(o){
		return constants[o];
	}
	
	return ctor;
})();

Class.getConstant('CONSTANTA');
