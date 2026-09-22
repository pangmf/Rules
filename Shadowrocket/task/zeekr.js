#!name= 极氪汽车获取Token
#!desc= 获取Token方法 : 进入APP获得

[Script]
zeekr = type=http-response, pattern=^https:\/\/api-gw-toc\.zeekrlife\.com\/zeekrlife-app-user\/v\d\/user\/info\/query$, script-path=https://raw.githubusercontent.com/wf021325/qx/master/task/zeekr.js, requires-body=true, max-size=-1, timeout=60

极氪汽车签到 = type=cron, cronexp=1 0 * * *, script-path=https://raw.githubusercontent.com/wf021325/qx/master/task/zeekr.js, timeout=120, wake-system=1

[MITM]
hostname = %APPEND% api-gw-toc.zeekrlife.com
