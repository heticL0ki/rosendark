var levels = {
	// Level data
	data:[
	 {   // First level 
		foreground:'desert-foreground',
		background:'clouds-background',
		entities:[
			{type:"ground", name:"dirt", x:500,y:440,width:1000,height:20,isStatic:true},
			{type:"ground", name:"wood", x:185,y:390,width:30,height:80,isStatic:true},

			{type:"block", name:"wood", x:520,y:380,angle:90,width:100,height:25},
			{type:"block", name:"glass", x:520,y:280,angle:90,width:100,height:25},								
			{type:"villain", name:"small",x:520,y:205,calories:590},

			{type:"block", name:"wood", x:620,y:380,angle:90,width:100,height:25},
			{type:"block", name:"glass", x:620,y:280,angle:90,width:100,height:25},								
			{type:"villain", name:"medium", x:620,y:205,calories:420},				

			{type:"hero", name:"jaune",x:80,y:405},
			{type:"hero", name:"rouge",x:140,y:405},
		]
	 },
		{   // Second level 
			foreground:'desert-foreground',
			background:'clouds-background',
			entities:[
				{type:"ground", name:"dirt", x:500,y:440,width:1000,height:20,isStatic:true},
				{type:"ground", name:"wood", x:185,y:390,width:30,height:80,isStatic:true},
	
				{type:"block", name:"wood", x:820,y:380,angle:90,width:100,height:25},
				{type:"block", name:"wood", x:720,y:380,angle:90,width:100,height:25},
				{type:"block", name:"wood", x:620,y:380,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:670,y:317.5,width:100,height:25},
				{type:"block", name:"glass", x:770,y:317.5,width:100,height:25},				

				{type:"block", name:"glass", x:670,y:255,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:770,y:255,angle:90,width:100,height:25},
				{type:"block", name:"wood", x:720,y:192.5,width:100,height:25},	

				{type:"villain", name:"small",x:715,y:155,calories:100},
				{type:"villain", name:"small",x:670,y:405,calories:350},
				{type:"villain", name:"small",x:765,y:400,calories:350},

				{type:"hero", name:"rouge",x:30,y:415},
				{type:"hero", name:"jaune",x:80,y:405},
				{type:"hero", name:"rouge",x:140,y:405},
			]
	},
		{   // Third level 
			foreground:'desert-foreground',
			background:'clouds-background',
			entities:[
				{type:"ground", name:"dirt", x:500,y:440,width:1000,height:20,isStatic:true},
				{type:"ground", name:"wood", x:185,y:390,width:30,height:80,isStatic:true},
	
				{type:"block", name:"wood", x:820,y:380,angle:90,width:100,height:25},
				{type:"block", name:"wood", x:720,y:380,angle:90,width:100,height:25},
				{type:"block", name:"wood", x:620,y:380,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:670,y:317.5,width:100,height:25},
				{type:"block", name:"glass", x:770,y:317.5,width:100,height:25},				

				{type:"block", name:"glass", x:670,y:255,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:770,y:255,angle:90,width:100,height:25},
				{type:"block", name:"wood", x:720,y:192.5,width:100,height:25},	

				{type:"villain", name:"medium",x:715,y:155,calories:350},
				{type:"villain", name:"medium",x:670,y:400,calories:350},
				{type:"villain", name:"medium",x:765,y:400,calories:350},

				{type:"hero", name:"rouge",x:30,y:415},
				{type:"hero", name:"jaune",x:30,y:415},
				{type:"hero", name:"rouge",x:80,y:405},
				{type:"hero", name:"jaune",x:140,y:405},
			]
		},

		{   // Fourth level 
			foreground:'desert-foreground',
			background:'clouds-background',
			
			entities:[
				//Landscape
				{type:"ground", name:"dirt",x:500,y:440,width:1000,height:20,isStatic:true},
				{type:"ground", name:"wood",x:185,y:390,width:30,height:80,isStatic:true},

				//Blocs
				{type:"block", name:"glass",x:670,y:317.5, width:100, height:25},
				{type:"block", name:"glass",x:770,y:317.5, width:100, height:25},
				{type:"block", name:"glass",x:870,y:317.5, width:100, height:25},
				{type:"block", name:"glass", x:820,y:380,angle:90,width:100,height:25},

				{type:"block", name:"glass", x:795,y:380,angle:90,width:100,height:25},

				{type:"block", name:"glass", x:720,y:380,angle:90,width:100,height:25},

				{type:"block", name:"glass", x:695,y:380,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:620,y:380,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:920,y:380,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:670,y:255,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:770,y:255,angle:90,width:100,height:25},
				{type:"block", name:"glass", x:720,y:192.5,width:100,height:25},
				/*{type:"block", name:"wood",x:,y:,width:, height:},
				{type:"block", name:"wood",x:,y:,width:, height:},
				{type:"block", name:"wood",x:,y:,width:, height:},
				{type:"block", name:"wood",x:,y:,width:, height:},
				{type:"block", name:"wood",x:,y:,width:, height:},*/
 
				//Villains
				{type:"villain", name:"small",x:715,y:155,calories:100},
				{type:"villain", name:"medium",x:667,y:400,calories:350},
				{type:"villain", name:"medium",x:762,y:400,calories:350},
				{type:"villain", name:"medium",x:715,y:275,calories:350},
				{type:"villain", name:"boss",x:862,y:275,calories:350},
				{type:"villain", name:"small",x:865,y:400,calories:350},

				//Heros	
				{type:"hero", name:"rouge",x:30,y:415},
				{type:"hero", name:"jaune",x:30,y:415},
				{type:"hero", name:"rouge",x:80,y:405},
				{type:"hero", name:"jaune",x:140,y:405},
			]
		},
	],

	// Initialize level selection screen
	init:function(){
		var html = "";
		for (var i=0; i < levels.data.length; i++) {
			var level = levels.data[i];
			html += '<input type="button" value="'+(i+1)+'">';
		};
		$('#levelselectscreen').html(html);
		
		// Set the button click event handlers to load level
		$('#levelselectscreen input').click(function(){
			levels.load(this.value-1);
			$('#levelselectscreen').hide();
		});
	},

	// Load all data and images for a specific level
	load:function(number){
	   //Initialize box2d world whenever a level is loaded
		box2d.init();

		// declare a new current level object
		game.currentLevel = {number:number,hero:[]};
		game.score=0;
		$('#score').html('Score: '+game.score);
		game.currentHero = undefined;
		var level = levels.data[number];


		//load the background, foreground and slingshot images
		game.currentLevel.backgroundImage = loader.loadImage("images/backgrounds/"+level.background+".png");
		game.currentLevel.foregroundImage = loader.loadImage("images/backgrounds/"+level.foreground+".png");
		game.slingshotImage = loader.loadImage("images/slingshot.png");
		game.slingshotFrontImage = loader.loadImage("images/slingshot-front.png");

		// Load all the entities
		for (var i = level.entities.length - 1; i >= 0; i--){	
			var entity = level.entities[i];
			entities.create(entity);			
		};

		  //Call game.start() once the assets have loaded
	   if(loader.loaded){
		   game.start()
	   } else {
		   loader.onload = game.start;
	   }
	}
}