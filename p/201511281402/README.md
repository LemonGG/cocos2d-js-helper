
#### 关于cocos compile -p web -m release 出现错误的问题
##
###### 错误码
	E:\MyJSGame>cocos compile -p web -m release
	Runing command: compile
	Building mode: release
	Traceback (most recent call last):
	  File "D:\cocos2d-js-v3.0-rc0\tools\cocos2d-console\bin\/cocos.py", line 482, i
	n <module>
	    run_plugin(command, argv, plugins)
	  File "D:\cocos2d-js-v3.0-rc0\tools\cocos2d-console\bin\/cocos.py", line 449, i
	n run_plugin
	    plugin.run(argv, dependencies_objects)
	  File "D:\cocos2d-js-v3.0-rc0\tools\cocos2d-console\bin\..\plugins\project_comp
	ile\project_compile.py", line 1058, in run
	    self.build_web()
	  File "D:\cocos2d-js-v3.0-rc0\tools\cocos2d-console\bin\..\plugins\project_comp
	ile\project_compile.py", line 908, in build_web
	    build_web.gen_buildxml(project_dir, project_json, publish_dir, buildOpt)
	  File "D:\cocos2d-js-v3.0-rc0\tools\cocos2d-console\bin\..\plugins\project_comp
	ile\build_web\__init__.py", line 80, in gen_buildxml
	    jdk_version = check_jdk_version()
	  File "D:\cocos2d-js-v3.0-rc0\tools\cocos2d-console\bin\..\plugins\project_comp
	ile\build_web\__init__.py", line 16, in check_jdk_version
	    child = subprocess.Popen(commands, stderr=subprocess.PIPE)
	  File "D:\Python27\lib\subprocess.py", line 710, in __init__
	    errread, errwrite)
	  File "D:\Python27\lib\subprocess.py", line 958, in _execute_child
	    startupinfo)
	WindowsError: [Error 2]


##### 解决方案：看jdk是否正确
