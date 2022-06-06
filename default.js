function logAnalyse(log) {
    var formatLog = log.replace(/｜/g, '|')
    var strings = formatLog.split('\n')
    var logs = []
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
        var formarted = array[1]

        // 对具体的日志进行分析
        if (formarted != undefined) {
            var obj = formarted.split('|')
            // 生成 object 对象
            var log = {
                'time': time,
                'level': level,
                'code': code,
                "module": obj[0],
                "action": obj[1],
                "stage": obj[2],
                "status": obj[3],
                "info": obj[4]
            }
            logs.push(log)
        }
    }
    return logs
}