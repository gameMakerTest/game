(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_", frames: [[1363,510,174,174],[1363,330,178,178],[1363,0,304,328],[0,0,1361,1375]]}
];


// symbols:



(lib.Растровоеизображение1 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение1_1 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение2 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение3 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение3();
	this.instance.parent = this;
	this.instance.setTransform(-680.5,-687.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgyABGpMAAAiNRMBkBAAAMAAACNRg");
	this.shape.setTransform(20.6,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-680.5,-687.5,1361,1375), null);


(lib.Символ7_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AkeGUQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AmAFGIgMgJQLAgfguq+QBIBLAhBaQAeBRAABdQAADMiRCRQiRCRjMAAQiiAAh9hbg");
	this.shape_1.setTransform(9.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,0,0,0.498)").ss(6.3,1,1).p("AFeldQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

	// Слой 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.949)").s().p("AjoDuQgdgCgKgjIAngGIAAAFQABADADAAIAEgBQAIgCAEgGQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgCgJgVAAQgMAAgSADIgBgiIAhgXIgkADIgGglIBWgFIADAtQgOAAgSARQAqAGAGAYQAEAUgVAUQgUATgWAAIgEAAgACxB1QgEgUAFgOQAGgRAggSQASgJABgJIAAgJQgBgEgDgEQgDgDgFAAQgJAAACAOIgmAHQAAgrAZgLQAHgDAIAAQAQAAAPAKQAUANAFASQAEASgNAQQgJANgWAKQgRAIgDAHIA4gDIAEAlIheAFIgDgJgAgFjBIgbAEIgEgmIBCgKQgEBOAIA8IgiAJg");
	this.shape_3.setTransform(-0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3));

	// Слой 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AhnBlIAAjJIDPAAIAADJg");
	this.shape_4.setTransform(-22.2,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhnEKIAAoUIDPAAIAAIUg");
	this.shape_5.setTransform(0.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("AhnChIAAlBIDPAAIAAFBg");
	this.shape_6.setTransform(22.4,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(3));

	// Слой 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD980").s().p("AkeGUQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-52.6,105.3,105.3);


(lib.Символ7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AkeGUQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AmAFGIgMgJQLAgfguq+QBIBLAhBaQAeBRAABdQAADMiRCRQiRCRjMAAQiiAAh9hbg");
	this.shape_1.setTransform(9.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.498)").ss(4,1,1).p("ADgiWIB1CnIg7AXIg6hYIAAC2IgwAAQAAAKAAADIgBCcIiOAAIAAipIglAAQgCAAgBAAIgDAAQgDAAgDAAIgEAAQgBAAgBAAIAAAAQgBAAAAAAIgCCpIiOAAIAAiqIg4AAIAAi1Ig6BYIg7gXIB1inIAAiYIG/AAg");
	this.shape_2.setTransform(0.4,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("AAhEvIAAiqIglABIgDAAIgDAAIgGAAIgEAAIgCAAIAAAAIgBAAIgCCpIiOAAIAAiqIg4AAIAAi1Ig6BYIg7gYIB1imIAAiYIG/AAIAACYIB1CmIg7AYIg6hYIAAC2IgwAAIAAANIgBCcg");
	this.shape_3.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(3));

	// Слой 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(102,0,0,0.498)").ss(6.3,1,1).p("AFeldQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

	// Слой 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD980").s().p("AkeGUQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-52.6,105.3,105.3);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AkeGUQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,153,0,0.498)").ss(6.3,1,1).p("ADggPIm/jcIAAHXg");
	this.shape.setTransform(7.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,204,0,0.698)").s().p("AjfjrIG/DcIm/D7g");
	this.shape_1.setTransform(7.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,0,0,0.498)").ss(6.3,1,1).p("AFeldQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

	// Слой 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AmAFGIgMgJQLAgfguq+QBIBLAhBaQAeBRAABdQAADMiRCRQiRCRjMAAQiiAAh9hbg");
	this.shape_3.setTransform(9.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3));

	// Слой 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD980").s().p("AkeGUQghgYgegeQiRiRAAjNQAAjMCRiRQCRiRDMAAQDNAACRCRQBPBPAkBhQAeBRAABcQAADNiRCRQiRCRjNAAQihAAh9hbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-52.6,105.3,105.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AjnCzIAAAAIhGAAIAAkUIhYCeIg6gbICSjlIAAjUIJbAAIAADAIAAAGIAAADIAAAMICSDkIg7AbIhXieIAAETIhHAAIAADjIjAABIAAjjIgEAAIAAgBIhKAAIAADlIjAABgAh1gcQATAvApAOQApANAggEQAhgFAfgTQAegSAageQivBRhNhPIgDgDIACADgAhFhoICIAAIAAhqIiIAAgACkkgQgSAEgMAPQgLAPAEATQABANAJAJIABACIAHAGQANAJAPAAIAGgBQATgDALgQQAIgKABgLIgBgNQgDgTgPgLQgMgIgOAAIgDAAIgGAAgAizkgQgSADgMAPQgLAQAEASQABANAJAKIAIAHQAPAMASgDQAPgDAKgJIABgBIAFgGQAIgKABgMIgBgMQgDgTgPgLQgNgJgOAAIgIABg");
	this.shape.setTransform(0.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-44.1,-40.8,89.6,81.6), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,51,0.298)").ss(10.4,1,1).p("AACkwQARCiAICdQAHCdASCnQAegMApgMIBZgVQAFhEAZhUQAZhSAag+IAeFNICJglIgWkkQgJiiAEiwIieAaIgwCPQgmB0gRBoQgKhlAEheQADhgANhggAHxFTICPgqQgNiOgDiUICVFZICfhYIjEl0ICdidIiOhMQg5BBhFBEQgBgvAFhRIilAfgAQLE6QBBAwBAgOQBIgQA5heIhThyQhIBAgxg0QgqgqgIhbQgGhdAngrQAtgyBQA6IBNh9QhRhThLgMQhDgLg3AxQgyAtgeBTQgaBRACBeQAEBjAoBcQAmBUA9ArgAtwj5Ih+hcQg5BBhFBEQgBgvAFhRIikAfIAgKEICQgqQgOiOgDiUICVFZICfhYIjEl0ICNiNICiF1Ig6DVICcAIQAeiTAuimQAxikBCi1IilgZIg+DmQgXhBgOhEIgVhugAkOheIgDhAIC2gNIgpiiIkjAaIAmKFQA9AMBIgMQBPgOA9gkQBIgoAcg7QAkhFgWhaQgShThhgeQhEgVhZAKgAkFArQAxgGAfAKQAhALAIAZQAKAlgcAdQgiAfhBAJg");
	this.shape.setTransform(-0.5,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ah4FUIA6jVIiil1IClhlIAVBtQAOBEAXBBIA+jmICkAZQhCC2gwCjQguCmgeCTg");
	this.shape_1.setTransform(-66.1,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC66").s().p("Ag4E5Qg9gsgnhUQgohcgDhiQgChfAahRQAdhTAzgtQA3gxBCAMQBLAMBQBSIhMB+QhQg7gsAzQgoArAHBcQAIBbApArQAxAzBHg/IBUByQg6BehHAPQgPAEgPAAQgxAAgxglg");
	this.shape_2.setTransform(108.7,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CCFF").s().p("AhJACQADCUANCOIiPAqIghqEIClgfQgFBRABAvQBFhEA4hBICOBMIidCdIDEF0IifBYg");
	this.shape_3.setTransform(69.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#339933").s().p("AiyFNIgmqFIEhgaIApCiIi0ANIADBAQBYgKBEAVQBhAeASBTQAXBaglBFQgcA7hIAoQg+AkhOAOQgkAGghAAQghAAgegGgAg2AmIAECSQBAgJAhgfQAdgdgLglQgIgZghgLQgSgGgZAAQgQAAgTACg");
	this.shape_4.setTransform(-21.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3366").s().p("AjLANQgIicgRiiIC0gfQgNBhgDBgQgEBeAKBkQARhnAmh0IAviPICegaQgECvAJCjIAWEjIiJAlIgelMQgaA+gZBSQgYBUgFBDIhZAWQgpAMgeAMQgSingHieg");
	this.shape_5.setTransform(22.6,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhJACQADCUANCOIiPAqIghqEIClgfQgFBRABAvQBFhEA4hBIB+BcIiOCNIDFF0IigBYg");
	this.shape_6.setTransform(-106.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-135,-40.9,269,80.7), null);


(lib.Символ2_crown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(3,1,1).p("ACQiEQAKABAKABQAAAAABAAQAFABAFABQBZARgMBRQgFAjgTAeQgVAigcAcQgLAcAMAnQhOgMhOgCQgIAAgMAAQgDAAgCAAQgCAAgFAAQgGAAgJAAQhOAChOAMQAMgngLgcQBVgGBWABQADAAADAAQABAAAAAAQAFAAADAAQBWgBBVAGABdiEQAZgCAWACQACAAACAAAgVh8IADghQAIgFAJgBQABAAAAAAQABAAABAAQAJABAIAFIADAhQAmgHAhgBQAKAFAJAHQAHAFAGAIQALAOAGAWQAKAkgdAoQg9gKg8AAQAZgygFhFIAAAAAB8AFQAngaAKgbQAGgQgEgRQgBgDgBgEQgDgLgFgIQgBgCgKgMIgKgLAB7AFQAAAAABAAADkAjQg0gUg0gKAhciEQAhABAmAHIAAAAQAKACAKABQANgBAKgCAjjAjQgTgegFgjQgMhRBZgRQAFgBAFgBQABAAAAAAQAKgBAKgBQACAAACAAQAWgCAZACAiPiEIgKALQgKAMgBACQgFAIgDALQgBAEgBADQgEARAGAQQAKAbAnAaQABAAAAAAQgdgoAKgkQAGgWALgOQAGgIAHgFQAJgHAKgFAgVh8QgFBFAZAyQg8AAg9AKAiyBhQgcgcgVgiQA0gUA0gK");
	this.shape.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABdiEQAZgCAWACQACAAACAAQAKABAKABQAAAAABAAQAFABAFABQBZARgMBRQgFAjgTAeQgVAigcAcQgLAcAMAnQhOgMhOgCQgIAAgMAAQgDAAgCAAQgCAAgFAAQgGAAgJAAQhOAChOAMQAMgngLgcQBVgGBWABQADAAADAAQABAAAAAAQAFAAADAAQBWgBBVAGAgVh8IADghQAIgFAJgBQABAAAAAAQABAAABAAQAJABAIAFIADAhQAmgHAhgBQAKAFAJAHQAHAFAGAIQALAOAGAWQAKAkgdAoQg9gKg8AAQAZgygFhFIAAAAAB8AFQAngaAKgbQAGgQgEgRQgBgDgBgEQgDgLgFgIQgBgCgKgMIgKgLAB7AFQAAAAABAAADkAjQg0gUg0gKAhciEQAhABAmAHIAAAAAjjAjQgTgegFgjQgMhRBZgRQAFgBAFgBQABAAAAAAQAKgBAKgBQACAAACAAQAWgCAZACQgKAFgJAHQgHAFgGAIQgLAOgGAWQgKAkAdAoQAAAAgBAAQgngagKgbQgGgQAEgRQABgDABgEQADgLAFgIQABgCAKgMIAKgLAgBgFIABAAAAWh8QgKACgNABQgKgBgKgCQgFBFAZAyAiyBhQgcgcgVgiAh7AFQg0AKg0AUAh6AFQA9gKA8AA");
	this.shape_1.setTransform(-0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AAYAWIgUAAIgFAAIgHAAIgPAAQhOAChOAMQAMgmgLgcQBVgGBWABIAGAAIABAAIAIAAQBWgBBVAGQgLAcAMAmQhOgMhOgCg");
	this.shape_2.setTransform(-0.1,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE0000").s().p("AAIBuIgIAAIgBAAIgGAAQhWgBhVAGQgcgcgVgiQA0gUA0gKIABAAQgdgoAKgkQAGgWALgOQAGgIAHgFQAJgHAKgFQAhABAmAHIAAAAQgFBFAZAxIABAAIACAAQA8AAA9ALQg9gLg8AAQAZgxgFhFIAAAAQAmgHAhgBQAKAFAJAHQAHAFAGAIQALAOAGAWQAKAkgdAoIABAAQA0AKA0AUQg0gUg0gKQAngaAKgbQAGgQgEgRIgCgHQgDgLgFgIIgLgOIgKgLIAUACIABAAIAKACQBZARgMBRQgFAjgTAeQgVAigcAcQhVgGhWABgAh6AXQA9gLA8AAQg8AAg9ALgAjjA1QgTgegFgjQgMhRBZgRIAKgCIABAAIAUgCIgKALIgLAOQgFAIgDALIgCAHQgEARAGAQQAKAbAnAaQg0AKg0AUIAAAAg");
	this.shape_3.setTransform(-0.1,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AB7BVQAdgqgKgkQgGgVgLgOQgGgHgHgGQgJgHgKgFQAZgBAWABIAEAAIAKALIALAOQAFAIADALIACAHQAEAQgGAQQgKAbgnAcIgBAAgAh7BVQgngcgKgbQgGgQAEgQIACgHQADgLAFgIIALgOIAKgLIAEAAQAWgBAZABQgKAFgJAHQgHAGgGAHQgLAOgGAVQgKAkAdAqIgBAAgAAABJIgBAAQgZgyAFhEIAAAAIADggQAIgGAJAAIABAAIACAAQAJAAAIAGIADAgIAAAAQAFBEgZAyIgCAAgAgBgpIAXgEIgXAEIgUgEIAUAEg");
	this.shape_4.setTransform(-0.1,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2_crown, new cjs.Rectangle(-26.9,-17.8,53.8,35.8), null);


(lib.Символ1_chat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCB/QgCg/gHhGIgJhtQAZgNAgAAQAhAAAWAOQAYARADAaQADAdgbAbQAiAFAOAgQAIAQgCAQQgBASgLAOQgYAggoAJQgOACgUAAQgTAAgWgCgAgXAZIADAtQAQABAJgDQAQgFACgOQADgSgRgGQgIgEgHAAQgJAAgIAEgAgjhLIAFAtQAagHAFgNQAJgZgXgDIgFAAQgIAAgJADg");
	this.shape.setTransform(241.8,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhZB1QAbh3ALh2IBPgNQATBqArCLIg9AQIgJgsIgoAGIgFAsgAgSAnIAbgBIgRhcg");
	this.shape_1.setTransform(225.3,58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEggQgHBogBA1IhGgGQAXhxAQh+IBQgNQAMBpAiCUIhCAOIgVimg");
	this.shape_2.setTransform(208.9,58.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUB3QgYgRgOggQgPgigCglQAAgkAJgfQAMggATgRQAVgSAYAEQAdAFAeAfIgOAYIgPAYQgegXgQAUQgPAQACAjQADAiAQAQQASAUAbgYIAfArQgVAkgbAGIgMABQgSAAgSgOg");
	this.shape_3.setTransform(193.5,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BHIgDg/IgHh7IA9gIIA8gJIAFAgIAFAgIgjADIgeAEIgBASIAAARIAYgEIAZgFIADAYIAFAXIghAGIgWAFIABAgIAigFIAggGIAGAgIAEAhQgaABggAGQghAHgnAKg");
	this.shape_4.setTransform(178.9,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAqQgkAKgRgJQgQgIgLgcQgFgKgCgNQgDgNgBgPIgCgfIgDgiIAggKIAhgJIgCAmQgDAXADAUQABAUAIALQAGALAQgKIgEhqIA/gKQgFAzgBBFQAABPAGAwIg4AQg");
	this.shape_5.setTransform(162.9,57.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag9B3QgPgJgHgIQAfgjATgmQgVgJgMgUQgYgmAagmQASgaAlgRQAjgQAxgGQgBBmAKCjIg8gFQACglgCghIgIABQgTAxgbArQgQgOgPgJgAgIgzQgKALAFANQAEASAhAAIgBg6QgXAGgIAKg");
	this.shape_6.setTransform(147.3,58.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhCB/QgCg/gHhGIgJhtQAZgNAgAAQAhAAAWAOQAYARADAaQADAdgbAbQAiAFAOAgQAIAQgCAQQgBASgLAOQgYAggoAJQgOACgUAAQgTAAgWgCgAgXAZIADAtQAQABAJgDQAQgFACgOQADgSgRgGQgIgEgHAAQgJAAgIAEgAgjhLIAFAtQAagHAFgNQAJgZgXgDIgFAAQgIAAgJADg");
	this.shape_7.setTransform(130.6,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglArIAThVIA4ADQgWAtgIAlg");
	this.shape_8.setTransform(111,69.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Agfg5IgYACIgaAEIABhDICVgQIANBCIg5AEQAAArAQCMIhAAQg");
	this.shape_9.setTransform(102.1,58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag+BHIgDg/IgGh7IA8gIIA7gJIAGAgIAFAgIgjADIgeAEIgBASIAAARIAZgEIAYgFIADAYIAEAXIgfAGIgXAFIAAAgIAigFIAigGIAEAgIAGAhQgbABghAGQgfAHgoAKg");
	this.shape_10.setTransform(87.3,57.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhCB/QgCg/gHhGIgJhtQAZgNAgAAQAhAAAWAOQAYARADAaQADAdgbAbQAiAFAOAgQAIAQgCAQQgBASgLAOQgYAggoAJQgOACgUAAQgTAAgWgCgAgXAZIADAtQAQABAJgDQAQgFACgOQADgSgRgGQgIgEgHAAQgJAAgIAEgAgjhLIAFAtQAagHAFgNQAJgZgXgDIgFAAQgIAAgJADg");
	this.shape_11.setTransform(71.5,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhNAFQgDg7gGg9IBFgMQgFAlgCAkQgBAkADAmQAHgnAPgsIARg3IA7gJQgBBCAEA9IAIBvIg0AOIgLh9QgKAWgKAgQgJAggCAZIghAJIgbAIQgHg/gDg8g");
	this.shape_12.setTransform(54.4,57.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhEAIQgDhqgGgVQA0gPAhADQAgACARASQATAUACAlQACAdgLAYQgKATgTANQgVARgeAGQAAAYAFAvIg7AIQABgjgEhagAgThIIAEBBQATAAAMgOQAJgKABgQQACgUgPgHQgGgCgGAAQgIAAgMAEg");
	this.shape_13.setTransform(37.8,57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhIALQgFhOgBgqICPgXQgBAQAODrIg7AKIgIjFIgZAEQgCBTAKBjIg7APQAAgngHhTg");
	this.shape_14.setTransform(22.3,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.6)").ss(10,1,1).p("Af5DIQAADJjIAAIg1AAIhtGUIi5mUMg0GAAAQjIAAAAjJIAAskQAAjIDIAAMA5tAAAQC8AFAADDg");
	this.shape_15.setTransform(133,80.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Слой 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("Af5DIQAADJjIAAIg1AAIhtGUIi5mUMg0GAAAQjIAAAAjJIAAskQAAjIDIAAMA5tAAAQC8AFAADDg");
	this.shape_16.setTransform(133,80.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.498)").s().p("AXVGQMg0EAAAQjJAAAAjIIAAskQAAjIDJAAMA5sAAAQC8AFAADDIAAMkQAADIjHAAIg2AAIhtGVg");
	this.shape_17.setTransform(133,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1_chat, new cjs.Rectangle(-76.1,-5,418.2,171), null);


(lib.Сиfdfмвол2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("", "20px 'Game_font*'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(50.3,10,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("A1YC5QhGAAAAhGIAAjlQAAhGBGAAMAqxAAAQBGAAAABGIAADlQAABGhGAAgA1VhIIAACUQAAAsBCAAMAouAAAQBDAAAAgsIAAiUQAAgshDgBMgouAAAQhCABAAAsg");
	this.shape.setTransform(65.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(102,0,0,0.498)").ss(4,1,1).p("A1YC5MAqxAAAQBGAAAAhGIAAjlQAAhGhGAAMgqxAAAQhGAAAABGIAADlQAABGBGAAg");
	this.shape_1.setTransform(65.1,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD980").s().p("A1YC5QhGAAAAhGIAAjlQAAhGBGAAMAqxAAAQBGAAAABGIAADlQAABGhGAAg");
	this.shape_2.setTransform(65.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Сиfdfмвол2, new cjs.Rectangle(-80.7,-3.1,291.8,41), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой_1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-680.5,-687.5,1361,1375);


(lib.Симввgыол7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ2_crown();
	this.instance.parent = this;
	this.instance.setTransform(59,-12.4);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(2,1,1).p("ADagFQABAFgBAGQgBAMgHAKQgDADgCADQgBAAAAABQgKAJgPADQgSADgQgMQgEgDgEgEQgIgKgCgNQgDgRALgQQALgPATgDQATgDAPALQAQALADATgAh+AEQgBAMgHAKQgCADgDADQgBAAAAABQgKAJgPADQgSADgQgMQgEgDgEgEQgIgKgCgNQgDgRALgQQALgPATgDQATgDAPALQAQALADATQABAGgBAFg");
	this.shape.setTransform(59,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.298)").ss(3,1,1).p("AEujOIAAgDQAAgDAAgCIAAgdQAAhSAAhSIpbAAIAADUIAABiIhYCeIg6gbICSjlAEujOIABAMICRDkIg6AbIhYiegADoCzIBGgBIAAkTADoCzIAADiIjAABIAAjjgACIgeQgaAegeASQgfATghAFQghAEgogNQgpgOgUgvQAAgBgBgCIgXAOAhggsIgXANQACACABABQBNBPCvhRACagMIgSgSIgUgUABEhoIiJAAIAAhqICJAAgAkthhIAAEUQAeAAAfAAIAJAAIDAAAIAADkIjAABIAAjlAgnCzIBPAA");
	this.shape_1.setTransform(59,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AEujOIAAgDQAAgDAAgCIAAgdQAAhSAAhSIpbAAIAADUAEujOIABAMICRDkIg6AbIhYiegADoCzIBGgBIAAkTADoCzIAADiIjAABIAAjjgAC8j0QABAHgEAFQgEAGgGAAQgHABgFgDQgFgEgBgGQgBgHAEgFQADgGAHgBQAGAAAGADQAFAEABAGgADaj4QABAGgBAGQAAAMgIAKQgCADgDADQAAAAgBABQgKAJgOADQgTADgQgMQgEgDgDgEQgIgKgCgNQgEgSALgQQAMgPASgDQATgDAQALQAPALADATgAh9juQgCAMgHAKQgCADgDADQgBAAAAABQgKAJgOADQgTADgQgMQgEgDgEgEQgHgKgDgNQgDgSALgQQALgPATgDQATgDAQALQAPALADATQABAGAAAGgAipjkQgHABgFgDQgFgEgBgGQgBgHAEgFQADgGAHgBQAGAAAFADQAGAEABAGQABAHgEAFQgEAGgGAAgAh3gfIgXAOACIgeQgaAegeASQgfATghAFQghAEgogNQgpgOgUgvQAAgBgBgCQACACABABQBNBPCvhRIgUgUAhggsIgXANACagMIgSgSAhFjSIAABqICJAAIAAhqgAkthhIhYCeIg6gbICSjlIAABiIAAEUQAeAAAfAAIAJAAIDAAAIAADkIjAABIAAjlAgnCzIBPAA");
	this.shape_2.setTransform(59,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACjAOQgFgEgBgGQgBgGAEgFQAEgGAGgBQAGAAAGADQAFAEABAGQABAGgEAFQgEAGgGAAIgDABQgFAAgEgDgAi1AMQgFgEgBgGQgBgGAEgFQAEgGAGgBQAGAAAGADQAFAEABAGQABAGgEAFQgEAGgGAAIgDABQgFAAgEgDg");
	this.shape_3.setTransform(59,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACRAmIgIgHQgIgKgCgNQgDgRALgQQALgPATgDQATgDAPALQAQALADATIAAALQgBAMgHAKIgFAGIgBABQgKAJgPADIgHAAQgOAAgNgJgACpgOQgGABgEAGQgDAFABAGQABAGAFAEQAFADAGgBQAHAAADgGQAFgFgBgGQgBgGgGgEQgEgDgGAAIgCAAgAjHAkIgIgHQgIgKgCgNQgDgRALgQQALgPATgDQATgDAPALQAQALADATIAAALQgBAMgHAKIgFAGIgBABQgKAJgPADIgHAAQgOAAgNgJgAivgQQgGABgEAGQgDAFABAGQABAGAFAEQAFADAGgBQAHAAADgGQAFgFgBgGQgBgGgGgEQgEgDgGAAIgCAAg");
	this.shape_4.setTransform(59,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6600FF").s().p("AhEA1IAAhpICJAAIAABpg");
	this.shape_5.setTransform(58.9,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("AhBAbQgpgNgUgvIgBgDIADADQBNBOCvhQQgaAegeASQgfATghAEIgPABQgbAAgfgKg");
	this.shape_6.setTransform(59.8,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Слой 3
	this.color_per = new lib.Символ4();
	this.color_per.name = "color_per";
	this.color_per.parent = this;
	this.color_per.setTransform(58.4,41.5);

	this.timeline.addTween(cjs.Tween.get(this.color_per).wait(1));

}).prototype = getMCSymbolPrototype(lib.Симввgыол7, new cjs.Rectangle(12.7,-30.2,92.6,113.9), null);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that = this;
		
		this.play_btn.addEventListener('click', function () {
			that.gotoAndStop(1);
		});
		
		this.play_btn.addEventListener('touchstart', function(){
			that.play_btn_under.gotoAndStop(1);
		});
		
		this.play_btn.addEventListener('touchend', function(){
			that.play_btn_under.gotoAndStop(0);
		});
		/* //var brightPinkHex:uint = 0xFF32CC;
		//var brightPinkRGB:Object = HexToRGB(brightPinkHex);
		var col_per:Object=new Object();
		var col_per_old:Object=new Object();
		var col_per_now:Object=new Object();
		var col_old:uint = 0xFF3300;
		var hexVal:String=String(col_old);
		col_per=HexToRGB(col_old);
		//trace(brightPinkRGB.r+ ", " + brightPinkRGB.g + ", " + brightPinkRGB.b);
		function HexToRGB(value:uint):Object {	
			var rgb:Object = new Object();
			rgb.r = (value >> 16) & 0xFF
			rgb.g = (value >> 8) & 0xFF
			rgb.b = value & 0xFF			
			return rgb;
		}
		var obj_p:DisplayObject;
		function changeColor(ev:MouseEvent,obj:DisplayObject,colour:uint)
		{
			//trace(1);
			fl_TimerInstance.stop();
		    col_per=HexToRGB(colour);
			col_per_old=HexToRGB(uint(hexVal));
			col_per_now=HexToRGB(uint(hexVal));
			//trace((col_per_old.r-col_per.r)/50);
			//trace((col_per_old.g-col_per.g)/50);
			//trace((col_per_old.b-col_per.b)/50);
			fl_TimerInstance = new Timer(7, 50);
			fl_TimerInstance.addEventListener(TimerEvent.TIMER, change_move);
			fl_TimerInstance.start();
			obj_p=obj;
			//trace("0x" + (col_per_now.r).toString(16) + (col_per_now.g).toString(16) + (col_per_now.b).toString(16))
			//var newColor:ColorTransform = obj.transform.colorTransform;
		   // newColor.color = colour;
		   // obj.transform.colorTransform = newColor;
		}
		function RGBtoHEX(r, g, b) { 
		    var s = (r << 16 | g << 8 | b).toString(16); 
		    while(s.length < 6) s="0"+s;
		    return "0x"+s;
		}
		
		
		function change_move(event:TimerEvent){
			//trace((col_per_old.r-col_per.r));
		if ((col_per_now.r+(col_per.r-col_per_old.r)/50<col_per.r && (col_per.r-col_per_old.r)/50>=0) || (col_per_now.r+(col_per.r-col_per_old.r)/50>col_per.r && (col_per.r-col_per_old.r)/50<0)){
				col_per_now.r=col_per_now.r+(col_per.r-col_per_old.r)/50;
			}else{
				col_per_now.r=col_per.r;
			}
			//trace(col_per_now.r);
			if ((col_per_now.g+(col_per.g-col_per_old.g)/50<col_per.g && (col_per.g-col_per_old.g)/50>=0) || (col_per_now.g+(col_per.g-col_per_old.g)/50>col_per.g && (col_per.g-col_per_old.g)/50<0)){
				col_per_now.g=col_per_now.g+(col_per.g-col_per_old.g)/50;
			}else{
				col_per_now.g=col_per.g;
			}
			if ((col_per_now.b+(col_per.b-col_per_old.b)/50<col_per.b && (col_per.b-col_per_old.b)/50>=0) || (col_per_now.b+(col_per.b-col_per_old.b)/50>col_per.b && (col_per.b-col_per_old.b)/50<0)){
				col_per_now.b=col_per_now.b+(col_per.b-col_per_old.b)/50;
			}else{
				col_per_now.b=col_per.b;
			}
			//trace(RGBtoHEX(col_per.r, col_per.g, col_per.b))
			hexVal = RGBtoHEX(col_per_now.r, col_per_now.g, col_per_now.b);
			//trace(hexVal)
		   newColor = obj_p.transform.colorTransform;
		   newColor.color = uint(hexVal);
		   obj_p.transform.colorTransform = newColor;
		}
		//changeColor(pretendent.color_per,0x00CC00);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EgBiAnrIgEgCQgbgOgQgbQgMgXgGghQgDgSgCgqQgWmRhlotIgciNQhooQgzkZQmQHgmpHCQhWBchYBbIgXAXQhABCgdAhQgxA6gdA1IgWApQgNAYgOAPQgQATgVAJQgYAKgWgEQgegHgQgfQgQgeAFghQAEgcASgeQANgVAZgfQAyg+B3iEIDPjlINPuuIA8hBIAIgJQAWgZANgLQAVgTAVgJQAYgKAaAEQAbAEAPAUQAJALAEATQACALACAWQAVEgB1I9IAZB7QBKF4AbDxQAHBBAEA3QAsioBUi+QBAiOBqjCIACgEQBUiYBZiVIAcgwQBgieBmibQBciLF9ocQEWmKCgkKQiWkFixj4QgKAwgIAZQgOAogVAZQgaAegnAJQgpAJgcgWQglgdgBhQQgChxAghtIAKglQAEgVgCgQQgFghgpgoQhFhFhVg0QhXg0hAAFQgnADg3AdQhLAngRAGQAKDJgbD8QgRCWgxEtQgXCOgOBBQgYBzggBYQgVA7ghBHQgVAtgpBRQgVApgRAVQgZAggeAJQghALgpgOQgdgJgpgaQoZlLlFmoQi1jrhwkFQh1kSgfkYQgEgmAEgZQAFgjAUgTQASgPAdgGQATgDAiAAQMHAMMGgGIgLoRQgBglAFgXQAIghAWgPQASgNAaADQAYACAVAOQARALARAVQALANAQAaIEzHSQALARAIAIQAMANANAEQARAGAWgHQANgEAYgNQCsheDGgZQBogMAmAvQAaAggJA1QgGAlgbA1IivFdQgVAqABAZQAAASAKATQAGANAPAVQDBEVBZCLQBWCFBGB6IAzAAIgCADIgwgBIACADIAugCIgYApQAmBFAiBCQAOAcAGAQQAJAaABAVQABAagMAWQgMAXgWAIQgkANglggQgdgYgYgvIgeg4QiZDyjeE5QmuJjhaCHQhOB1hFBwQh+DNhiC7QgtBWgnBTQjSG7hPGeQgJArgKAXQgQAjgdAKQgKAEgLAAQgPAAgQgIgAt/wFQC1EpEzEcQB6BxBuBQQCDBfB+A8QBbieAyiwQAWhOAThjQAMg/ASh1QAlj0ANh5QAVjMgFikQkaBrjsC8QgnAfgeALQgqAQgdgTQgXgPgFgfQgFgeANgbQALgYAXgVQAQgQAdgVQD1ivEgh4QAcgMAPgMQAVgRACgVQrOACsXgKQAqFpDUFegAPa8OQBJBoBTBoQBIinBgieQipAkibBRgAIH9WQAXAABKARQA8ANAkgKQAMgFABgFQACgGgGgKIjKk0g");
	this.shape.setTransform(209.8,532.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADQUZQg5gRgDhuIgRnrQgQnYgGkwIAcCMQBlItAWGRQADAqACASQAGAhAMAXQAQAbAbAOIAFACIgCAHQgIAigFAPQgJAagMASQgPAWgYAKQgPAIgPAAQgJAAgJgDgAF1IRQBpj9CTjoIA6hYQhqDCg/CNQhVC+gsCoQgEg3gIhBgAvaECQgZgGgTgUQgHgIgGgKQBXhbBXhcQgNAjgEAgIgJBYQgJAyggARQgOAHgQAAQgKAAgKgCgAQVlkQgFAZgOAfQglBOhABkQgiA2hHBnQBii6B/jNgAvahRQCHjsC+kNQCHi/DfkjQAug6AXgaQAnguAlgeQBihPBjAAQBPAAAyAwQAdAdARAwQAMAiAIA3QAOBiAGB7QAEBKADCUIALIzIgZh7Qh1o9gVkgQgCgWgCgLQgEgTgJgLQgOgUgcgEQgagEgYAKQgTAJgWATQgNALgWAZIgIAJQgXAVgYAdIgMAPItQOuIAFgJgANllzQAIgOAJgMIgcAwIALgWg");
	this.shape_1.setTransform(166.9,670);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Слой_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("ARSRNQgagMgOgcQgNgbAHgcQlzgMlrA7QgxAHgegDQgrgFgUgcQgVgeAMg4QAThXAAgHQABgkgTgpQgNgcgegrIlGnYQhsidgzhUQhSiLgqh6QgehVgThpQgQhRgMhzQgHhAgFgdQgKgzgSgmQgWgsgkgdQgogggtgBQgrgBguAbQgdASgwApIiwCbQhQBGgpAoQhCA+guA5QhtCHg5CoQg5CoAFCsIABAvQgBAagGAUQgHAYgQAQQgSASgWADQgWACgVgNQgTgNgMgVQgQgdgDg7QgIjCBAjDQA+i8B5iiQBPhpB5hxQBJhECXh/QAxgqAegVQAuggApgSQBaglBjAVQBkAVBBBHQBGBNAaCQQAPBSASCqQAZCaBOClQA/CHBrCcQAdArCnDoQB5CmBDByQApBGASA0QAXBGgKA8QFlglFhgJQgBiVACipQABghAEgTQAHgcASgPQAYgUAkAKQAjALASAdQAQAZAEAlQACAbgEAnIgGBDQgBAlAIAbQCUjCB2jbIAXgqQAPgWAPgPQATgRAWgIQAZgIAWAGQAYAHARAXQAQAWAEAcQADAXgDAeQgCAQgIAkQggCagLClIgHBZQgFAzgMAkQgPAugcAhQgfAmgnAOQgmAOg6gFQhCgJghgCQgogDgUAPQgLAIgKAUQgNAbgEAFQgRAYgeAHQgLADgMAAQgRAAgPgHgAU0NEQAZAKAiABQAUABAogDQAOgxAIg/QAGgpAHhKg");
	this.shape_2.setTransform(252.7,468.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(1));

	// Слой_10
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(215.5,405.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Слой_22
	this.instance_1 = new lib.Растровоеизображение1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,469);

	this.instance_2 = new lib.Растровоеизображение1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,386);

	this.instance_3 = new lib.Растровоеизображение1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42,302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// Слой_12
	this.play_btn_under = new lib.Символ7_1();
	this.play_btn_under.name = "play_btn_under";
	this.play_btn_under.parent = this;
	this.play_btn_under.setTransform(130,386);

	this.timeline.addTween(cjs.Tween.get(this.play_btn_under).to({_off:true},1).wait(1));

	// Слой_11
	this.name_p = new lib.Сиfdfмвол2();
	this.name_p.name = "name_p";
	this.name_p.parent = this;
	this.name_p.setTransform(238.1,720.8,1,1,0,0,0,64.8,17.4);

	this.records_btn = new lib.Символ7_4();
	this.records_btn.name = "records_btn";
	this.records_btn.parent = this;
	this.records_btn.setTransform(129,555.4);
	new cjs.ButtonHelper(this.records_btn, 0, 1, 2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AgCA/QgFgBgEgDQgFgDgDgFQgDgFgBgFQgBgFABgGQAAgGADgFIAHgHQAEgDAGgBQAEgBAFABQAFABAEADQAFAEACAEQADAEACAGQABAFgBAGQgBAFgDAFQgCAFgFADIgJAEIgFABIgEgBgAgFgHQgFgBgEgEQgFgDgDgEQgDgFgBgGQgBgFABgGQAAgFADgFIAHgIQAEgDAGgBIAJAAQAFABAFADIAHAIIAEAKQABAFgBAGQgBAGgDAFQgCAEgFADQgEAEgFABIgEABIgFgBg");
	this.shape_3.setTransform(300.7,669.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AAihaIAxgJQgFBuAJBRIgtAMgAhSBlQAEghgChCIgGhfIAsgKQAAAaACAgQAXgBARAJQAQAIAJAOQAKAQABAXQABAegOASQgMASgYAHQgSAFgbAAIgYgBgAgpADIACA0QARADAJgIQALgHgDgQQgCgLgHgHQgIgHgLAAIgIABg");
	this.shape_4.setTransform(288.5,669.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AgCgZQgGBTgBAqIg4gFQAShaANhkIA/gKQAKBSAbB2Ig1ALIgPiDg");
	this.shape_5.setTransform(273.6,669.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgDgZQgFBTgBAqIg4gFQAThaANhkIA/gKQAJBSAbB2Ig0ALIgRiDg");
	this.shape_6.setTransform(261,669.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660000").s().p("AhHBdQAWheAIheIA/gLQAPBVAjBuIgxANIgHgjIggAFIgEAjgAgPAfIAWgBIgOhJg");
	this.shape_7.setTransform(247.9,669);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("Ag1BlIgFhiIgGhhIBWgIIANAxIg2AEIABAUQAagDAUAGQAeAJAFAYQAHAcgLAUQgJASgVAMQgTALgXAFQgLACgKAAQgKAAgJgCgAgQALIACAsQASgCALgJQAIgJgDgMQgCgHgKgEQgGgBgHAAIgLAAg");
	this.shape_8.setTransform(234.6,669);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("Ag9AEQgCgvgGgxIA3gJQgEAegBAdQgBAcADAdQAFgeAMgjIAOgsIAvgHQgBA1ACAxIAIBYIgrALIgJhkQgHASgHAYQgHAagCAVIgaAGIgWAHQgGgzgCgvg");
	this.shape_9.setTransform(214.8,668.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660000").s().p("AgxBJQgJgNgHgUQgFgTAAgVQAAgkAQgfQATglAiAAQAdAAAUAfQAMARAFARQAFATAAAUQABAlgRAeQgUAmgiAAQgdAAgUgggAgUgaQgFARgBASQABAJACAIQADAMAGAFQAHAHAJgBQANAAAHgNQAFgMAAgSQgBgSgHgTQgIgTgLAAQgNAAgHAYg");
	this.shape_10.setTransform(201,669);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660000").s().p("AhdBgQAUhWAHhoIAtgLIARBlIAHhgIAsgFQANBfAiBoIgwAMIgWhnIgGBgIgnAFIgPhqIgJBsg");
	this.shape_11.setTransform(185.4,669.2);

	this.colour_btn = new lib.Символ7_2();
	this.colour_btn.name = "colour_btn";
	this.colour_btn.parent = this;
	this.colour_btn.setTransform(240,472.5);
	new cjs.ButtonHelper(this.colour_btn, 0, 1, 2);

	this.play_btn = new lib.Символ7();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(129,388.5);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.colour_btn},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.records_btn},{t:this.name_p}]}).to({state:[]},1).wait(1));

	// Слой_20
	this.instance_4 = new lib.Растровоеизображение1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(40,466);

	this.instance_5 = new lib.Растровоеизображение1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151,384);

	this.instance_6 = new lib.Растровоеизображение1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(40,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},1).wait(1));

	// Слой_14
	this.logo = new lib.Символ3();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(241.4,77.3,0.969,0.969,0,0,0,-1.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.logo).to({_off:true},1).wait(1));

	// Слой_17
	this.chat_table = new lib.Символ1_chat();
	this.chat_table.name = "chat_table";
	this.chat_table.parent = this;
	this.chat_table.setTransform(258,207.9,0.654,0.654,0,0,0,124.8,59.6);

	this.pretendent_i = new lib.Симввgыол7();
	this.pretendent_i.name = "pretendent_i";
	this.pretendent_i.parent = this;
	this.pretendent_i.setTransform(425,360.8,2.671,2.671,-32.2,0,0,58.5,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pretendent_i},{t:this.chat_table}]}).to({state:[]},1).wait(1));

	// Слой_21
	this.instance_7 = new lib.Растровоеизображение2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(267,193);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(1));

	// Слой_18
	this.instance_8 = new lib.Растровоеизображение3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-465,-282);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(1));

	// Слой_19
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("EAAAhGFMAAACML");
	this.shape_12.setTransform(240,422.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,118,1361,1375);
// library properties:
lib.properties = {
	id: 'C36AEA049002417698305D872C7F36BB',
	width: 480,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1567110221971", id:"game_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C36AEA049002417698305D872C7F36BB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;