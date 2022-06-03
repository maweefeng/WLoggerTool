var a =
    `2022-06-04 00:01:46.960 [I] KSOWebSocketManager.connect():69 - WebSocket|Connect|1-Reachable|Succ|The network is reachable, begin connecting...
2022-06-04 00:01:47.280 [I] AppDelegate+Business.applicationWillEnterForeground():128 - AppService｜LifeCycle｜EnterForeground｜Succ|应用进入前台
2022-06-04 00:01:47.284 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.WOADoubleViewController]viewDidLoad
2022-06-04 00:01:47.286 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.KSONavigationController]viewDidLoad
2022-06-04 00:01:47.287 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.KSONavigationController]viewDidLoad
2022-06-04 00:01:47.288 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.WOADoubleViewController]viewWillAppear:
2022-06-04 00:01:47.289 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.KSONavigationController]viewWillAppear:
2022-06-04 00:01:47.289 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.KSONavigationController]viewWillAppear:
2022-06-04 00:01:47.292 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.WOAFallbackDetailController]viewDidLoad
2022-06-04 00:01:47.324 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[ACLContext.WOAFallbackDetailController]viewWillAppear:
2022-06-04 00:01:47.326 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[WOA.WOAChatListViewController]viewDidLoad
2022-06-04 00:01:47.380 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.ViewControllerMetric|[WOA.WOAChatListViewController]viewWillAppear:
2022-06-04 00:01:47.491 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.AppStatusMetric|[didBecomeActiveNotification][前台: 0.00s][后台: 0.00s]
2022-06-04 00:01:47.501 [I] WOADevicesModel.notiStatusChanged():144 - Utility|Notification|NotiStatusChanged|Succ|Noti status changed, isPushEnabled = true isNotiEnabled = true isPCLogined = false isCloseMobileNoti = true
2022-06-04 00:01:47.599 [I] AppDelegate+SDK.monitor():58 - |Monitor|SCLMonitor.LaunchMetric|[duration:9572.386962890625][pre_app_create:7814.2548828125][launcher_create:1758.132080078125]
2022-06-04 00:01:47.600 [I] WOAChatListInteractor.addMessageObservers():684 - AppService|Network|Observer|Succ|网络状态发生改变, status = WIFI
2022-06-04 00:01:47.601 [I] .():196 - 1 net | start: GET path: /bin/version
2022-06-04 00:01:47.601 [I] .():196 - 5 net | start: POST path: /api/v1/checkin`

function logAnalyse(log) {
    var strings = log.split('\n')
    for (var i = 0; i < strings.length; i++) {
        // 解析出时间
        var time = strings[i].substr(0, 23)
        // 解析出日志等级
        var level = strings[i].substr(24, 3)
        // 重新为剩下来的字符分配内存
        var remainString = strings[i].substr(27)
        // 分割字符串
        var array = remainString.split('-')
        // 解析出具体代码的位置
        var code = array[0]
        // 对其中书写错误的分割线进行全局替换
        var formarted = array[1].replace(/｜/g, '|')
        // 对具体的日志进行分析
        var obj = formarted.split('|')
        // 生成 object 对象
        var log = {
            'time': time,
            'level': level,
            'code': code,
            "module": obj[0],
            "action": obj[1],
            "event": obj[2],
            "status": obj[3],
            "info": obj[4]
        }
        console.log(log)
    }
}

logAnalyse(a)



