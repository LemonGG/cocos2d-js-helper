# 位图字体 #

----------

#### 配制（以win系统为例）
- cocos2d-js
- BMFont

#### 得到.fnt和.png文件
1. 新建文本,命名为bmf.txt,保存为utf-8格式,内容写：0123456789
2. 打开BMFont，选择 Edit-->select chars from file,选择bmf.txt
3. 可以看到BMFont把和bmf.txt里面对应字符选中了
4. (BMFont)Options-->font settings 可以设置字体等信息
5. (BMFont)Options-->export options 发布设置，把里里面的 Textures一项选为：png-Portable Network Graphics
6. 最后 ctrl + s,命名为bmf,会得到bmf.fnt和bmf.png两个文件

#### coding
>上面啰嗦了那么多，其实就是为了拿到bmf.fnt和bmf.pnt,既然现在拿到了，就直接上代码吧

####
	var bmFont = new cc.LabelBMFont("15011021101",res.bmFont)
	this.addChild(bmFont)
	bmFont.setPosition(cc.p(size.width/2,size.height/2))