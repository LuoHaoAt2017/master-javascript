// 自制mvvm框架，核心是响应式原理。
// 虚拟node只是为了最小化DOM修改。
// 此处没有虚拟node的身影。

class Vue {
    constructor(opt){
        this.opt = opt
        this.observe(opt.data)
        let root = document.getElementById(opt.el)
        this.compile(root)
    }
    // 为响应式对象 data 里的每一个 key 绑定一个观察者对象
    observe(data) {
        Object.keys(data).forEach(key => {
            let obv = new Observer() 
            data["_"+key] = data[key]
            // 通过 getter setter 暴露 for 循环中作用域下的 obv，闭包产生
            Object.defineProperty(data, key, {
                get(){
                    Observer.target && obv.addSubNode(Observer.target);
                    return data['_'+key]
                }, 
                set(newVal){
                    obv.update(newVal)
                    data['_'+key] = newVal
                }
            })
        })
    }
    // 初始化页面，遍历 DOM，收集每一个key变化时，随之调整的位置，以观察者方法存放起来    
    compile(node){
        [].forEach.call(node.childNodes, child => {
            if(!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)){
                let key = RegExp.$1.trim() // 取出插值表达式中的字符串。
                child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'),this.opt.data[key]) 
                // 收集依赖的过程
                Observer.target = child
                this.opt.data[key] // 触发get，将child添加到依赖收集器中。
                Observer.target = null
            } else if (child.firstElementChild) {
                this.compile(child)
            }
        });
    } 
}

class Observer{
    constructor(){
        this.subNode = []    
    }
    addSubNode(node){
        this.subNode.push(node)
    }
    update(newVal){
        this.subNode.forEach(node=>{
            node.innerHTML = newVal
        })
    }
}

window.onload = function() {
    const config = {
        el: 'app',
        data: {
            name: 'react',
            age: 12
        }
    }
    new Vue(config);
    setInterval(() => {
        config.data.age++;
    }, 1000);
}
