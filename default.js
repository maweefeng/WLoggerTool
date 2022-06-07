function getFile(fileName) {
    const fs = require('fs')
    return new Promise((resove, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resove(data)
        })
    })
}

function loadfile(fileName) {
    getFile(fileName).then(data => logAnalyse(data))
}

const logAnalyse = (logstring) => {
    return new Promise((resove, reject) => {
        var formatLog = logstring.replace(/｜/g, '|')
        var strings = formatLog.split('\n')
        var logs = []
        var modulesSort = new Array()
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

                if (obj[0].trim().length == 0 || obj[0] == undefined || modulesSort.includes(obj[0].trim())) {
                    console.log(obj[0].trim())
                } else {
                    modulesSort.push(obj[0].trim())
                }
                logs.push(log)
            }
        }
        var modulesDic = [{}]
        for (ms in modulesSort) {

            modulesDic.push({
                "text": modulesSort[ms],
                "value": modulesSort[ms]
            })
        }

        resove([logs, modulesDic])
    })
}