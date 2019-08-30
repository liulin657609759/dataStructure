
    // 第一题
    for (var i = 0; i < 5; i++) {
        // to do
        ;(function(j){
            setTimeout(function(i){
                console.log(j+1)
            },j*1000)
        })(i)
    }

    // 第二题
    function getSumNum(arr,Sum) 
    {  
        var i,j;  
        for(i = 0, j = n-1; i < j ; )  
        {  
            if(arr[i]+arr[j] == Sum)  
                return true  
            else if(arr[i]+arr[j] < Sum)  
                i++;  
            else  
                j--;  
        }  
        return  false
    } 
    // 思路：分别从头和尾向中间扫描，头尾相加判断和与target的大小关系 ，和比target小的话，头++ ，和比target大的话，尾–


    // 第三题
    // 输出结果：4 3 5 7 8 4 6 2 1
    // 原因：1.setTimeout是宏任务，进入宏任务栈
    // 2. async1被调用，执行，promise.then进入微任务队列
    // 


    // 第四题
    var touchEl = new Toucher(element)
    touchEl.on('swipe', function(e) {
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
        (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))
        
        swipeTimeout = setTimeout(function() {
        if (touch.el){
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
        }
        touch = {}

        function swipeDirection(x1, x2, y1, y2) {
        /**
            * 1. 第一个三元运算符得到如果x轴滑动的距离比y轴大，那么是左右滑动，否则是上下滑动
            * 2. 如果是左右滑动，起点比终点大那么往左滑动
            * 3. 如果是上下滑动，起点比终点大那么往上滑动
            * 需要注意的是这里的坐标和数学中的有些不一定 纵坐标有点反过来的意思
            * 起点p1(1, 0) 终点p2(1, 1)
            */
        return Math.abs(x1 - x2) >=
            Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
        }
    }, 0)
    console.log(touch.el) // 打印出滑动的方向
    })

    

    // 第五题
    class EventEmitter {
            handlers = {}
        }
        //监听事件，该事件可以被触发多次
        EventEmitter.prototype.on = function (eventName, handle) {
            if (!this.handlers.hasOwnProperty(eventName)) {
                this.handlers[eventName] = []
            }
            this.handlers[eventName].push(handle)
        }
        //也是监听事件，但只能被触发一次
        EventEmitter.prototype.once = function (eventName, handle) {
            
        }
        //触发指定的事件
        EventEmitter.prototype.fire = function (eventName, ...params) {
            if (!this.handlers.hasOwnProperty(eventName)) return
            //事件队列依次执行
            this.handlers[eventName].map(handle => {
                handle(...params)
            })
        }
        //移除指定事件的某个回调方法或者所有回调方法
        EventEmitter.prototype.off = function (eventName, handle) {
            if (!this.handlers.hasOwnProperty(eventName)) return
            //获取下标，并删除
            let index = this.handlers[eventName].indexOf(handle)
            this.handlers[eventName].splice(index, 1)
        }
        
        const event = new EventEmitter();
        event.on('drink', (person) => {
        console.log(person + '喝水')
        })
        event.on('eat', (person) => {
        console.log(person + '吃东西')
        })
        // event.once('buy', (person) => {
        // console.log(person + '买东西')
        // })
        event.fire('drink', '我') // 我喝水
        event.fire('drink', '我') // 我喝水
        event.fire('eat', '其它人') // 其它人吃东西
        event.fire('eat', '其它人') // 其它人吃东西
        event.fire('buy', '其它人') //其它人买东西
        event.fire('buy', '其它人') //这里不会再次触发buy事件，因为once只能触发一次
        event.off('eat') //移除eat事件
        event.fire('eat', '其它人') //这里不会触发eat事件，因为已经移除了

