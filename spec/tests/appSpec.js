var app = require("../../app.js");

describe("NPC Shooter", ()=>{
    
   var shooter = new app.NPCShooter(1, 1, 1);

    it("should initialize with", function() {
        expect(shooter).toEqual(jasmine.objectContaining({
	    id: 1,
	    x: 1,
	    y: 1,
	    targetPlayer: -1,
	    hp: 3,
	    activationTimer: 100
	}));
    });

    it("should not be", function() {
        expect(shooter).not.toBe(jasmine.objectContaining({
	    id: 0
	}));
    });

    it("should update", function() {
        shooter.update();
	expect(shooter).toEqual(jasmine.objectContaining({
	    id: 1
	}));
    });
});


describe("NPC Attacker", ()=>{
    
   var attacker = new app.NPCAttacker(1, 1, 1);

    it("should initialize with", function() {
        expect(attacker).toEqual(jasmine.objectContaining({
	    id: 1,
	    x: 1,
	    y: 1,
	    targetPlayer: -1,
            attackCooldown: -1,
	    hp: 5,
	    activationTimer: 100
	}));
    });

    it("should not be", function() {
        expect(attacker).not.toBe(jasmine.objectContaining({
	    id: 0
	}));
    });

    it("should update", function() {
        attacker.update();
	expect(attacker).toEqual(jasmine.objectContaining({
	    id: 1
	}));
    });
});

describe("getdistance", ()=>{
    
   var a = app.getDistance(1,0,1,0);

    it("should initialize with", function() {
        expect(a).toEqual(0);
    });
});



describe("Bullet", ()=>{
    
   var bullet = new app.Bullet(1, 1, 1, 1, 90, 10);

    it("should initialize with", function() {
        expect(bullet).toEqual(jasmine.objectContaining({
	    size: 10,
            id: 1,
            lifetime: 200,
	    x: 1,
	    y: 1,
	    xvel:6.123233995736766e-16,
            yvel:10,
            owner: 1
	}));
    });

    it("should not be", function() {
        expect(bullet).not.toBe(jasmine.objectContaining({
	    id: 0
	}));
    });

    it("should update", function() {
        bullet.update();
	expect(bullet).toEqual(jasmine.objectContaining({
	    id: 1
	}));
    });
});


describe("NPC Player", ()=>{
    
   var player = new app.Player(1);

    it("should initialize with", function() {
        expect(player).toEqual(jasmine.objectContaining({
                id:1,
                spawnCooldown:-1,
                afkKickTimeout:100,
                joinKickTimeout:80,
                pressingRight:false,
                pressingLeft:false,
                pressingUp:false,
                pressingDown:false,
                maxHp:10,
                hp:10,
                regen:-1,
                afk:false,
                mx:0,
                my:0,
                powerupTime:-1,
                score:0,
                maxSpeed:3,
                name:"Unnamed",
                doubleFireSpeed:false,
                doubleBulletSize:false,
                quadrupleFireSpeed:false,
                dualBullets:false,
                quadrupleBullets:false,
                upgHPPrice:500
	}));
    });

    it("should not be", function() {
        expect(player).not.toBe(jasmine.objectContaining({
	    id: 0
	}));
    });

    it("should respawn with", function() {
	player.respawn();
        expect(player).toEqual(jasmine.objectContaining({
                id:1,
                spawnCooldown:10,
                afkKickTimeout:100,
                joinKickTimeout:80,
                pressingRight:false,
                pressingLeft:false,
                pressingUp:false,
                pressingDown:false,
                maxHp:10,
                hp:10,
                regen:-1,
                afk:false,
                mx:0,
                my:0,
                powerupTime:-1,
                score:0,
                maxSpeed:3,
                name:"Unnamed",
                doubleFireSpeed:false,
                doubleBulletSize:false,
                quadrupleFireSpeed:false,
                dualBullets:false,
                quadrupleBullets:false,
                upgHPPrice:500
	}));
    });

    it("should update", function() {
        player.update();
	expect(player).toEqual(jasmine.objectContaining({
	    id: 1
	}));
    });
});
