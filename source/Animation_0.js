var testAnimation = cc.Scene.extend({
	ctor:function(){
		this._super()

		var size = cc.winSize
		// start
		var cache = cc.spriteFrameCache
		cache.addSpriteFrames(res.t_plist)
		
		var frames = []
		for(var i = 0; i < 4; i++){ 
			var resName = 'eff'+(i+1)+'.png'
			var frame = cache.getSpriteFrame(resName)
			frames.push(frame)
		}
		var animation = new cc.Animation(frames,0.1)
		var action = new cc.RepeatForever(new cc.Animate(animation))

		var default_ = cache.getSpriteFrame('eff1.png')
		var sprite = new cc.Sprite(default_)
		sprite.setPosition(cc.p(size.width/2,size.height/2))
		this.addChild(sprite)
		
		sprite.runAction(action)

		// end
		return true
	}
})