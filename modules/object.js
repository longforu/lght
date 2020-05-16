import config from './config'
objectCount = 0;

const object = class {
    constructor(property,parent){
        objectCount++
        this.id = objectCount;
        this.parent = parent;
        this.parent.objects.push(this)
        mergeDefaultPropertyObject
        (property,config.defaultObjectProps,this);    
        this.initFunctions.forEach((e)=>this[e]())        
        this.name = (property.objectName)?property.objectName:`Object ${this.id}`
    }

    translateToRealPixel = (num,extraInfo)=>{
        if(num.match(/%/)) return (parseInt(num.split('').filter(e=>e!=='%').join(''))/100) * extraInfo
        return parseInt(num)
    }

    changePosition(x,y){
        if(x){
            if(this.alignX){
                let coeff = (this.alignDirectionX === 'left' || this.alignDirectionX === 'center')?1:-1
                this.alignMarginX = x - coeff*this.posX
            }
            else this.x = x
        }
        if(y){
            if(this.alignY){
                let coeff = (this.alignDirectionY==='top' || this.alignDirectionY==='center')?1:-1
                this.alignMarginY = y - coeff*this.posY
            }
            else this.y = y
        }
    }

    get posX(){
        if(this.alignX){
            let base
            if(this.alignDirectionX === 'left') base = 0
            else if(this.alignDirectionX === 'right') base = this.parent.canvas.width
            else base = this.parent.canvas.width/2
            const coeff = (this.alignDirectionX === 'left' || this.alignDirectionX === 'center')?1:-1
            return base + coeff*(this.alignMarginX)
        }
        if(typeof this.x === 'number') return this.x
        const arr = this.x.split(' ')
        if(arr.length === 1) return this.translateToRealPixel(arr[0],this.parent.canvas.width)
        else{
            let i = 0
            while(i<arr.length){
                if(arr[i] === '+' || arr[i] === '-'){
                    const coeff = (arr[i] === '+') ? 1 : -1
                    arr[i] = this.translateToRealPixel(arr.splice(i+1,1),this.parent.canvas.width) + coeff*this.translateToRealPixel(arr.splice(i-1,1),this.parent.canvas.width)
                }
                else i++
            }
        }
        return arr[0]
    }
    
    get posY(){
        if(this.alignY){
            let base
            if(this.alignDirectionY === 'top') base = 0
            else if(this.alignDirectionY==='bottom') base = this.parent.canvas.height
            else base = this.parent.canvas.height/2
            const coeff = (this.alignDirectionY==='top' || this.alignDirectionY==='center')?1:-1
            return base + coeff*( this.alignMarginY)
        }
        if(typeof this.y === 'number') return this.y
        const arr = this.y.split(' ')
        if(arr.length === 1) return this.translateToRealPixel(arr[0],this.parent.canvas.height)
        else{
            let i = 0
            while(i<arr.length){
                if(arr[i] === '+' || arr[i] === '-'){
                    const coeff = (arr[i] === '+') ? 1 : -1
                    arr[i] = this.translateToRealPixel(arr.splice(i+1,1),this.parent.canvas.height) + coeff*this.translateToRealPixel(arr.splice(i-1,1),this.parent.canvas.height)
                }
                else i++
            }
        }
        return arr[0]
    }

    kill(){
        this.parent.objects.splice(this.parent.objects.indexOf(this),1)
    }

    collide(obj){
        for(let s1 of this.shapes){
            for (let s2 of obj.shapes){
                if(s1.collide(s2)) return true
            }
        }

        return false
    }

    pointInObject(x,y){
        for(let s1 of this.shapes){
           if(s1.pointInShape(x,y)) return true
        }
        return false
    }

    findMax(){
        let xs = []
        let ys = []
        this.shapes.forEach(s=>{
            let [minX,maxX,minY,maxY] = s.findMax()
            xs = [...xs,minX,maxX]
            ys = [...ys,minY,maxY]
        })
        return [Math.min(...xs),Math.max(...xs),Math.min(...ys),Math.max(...ys)]
    }

    findThePositionThatIsRelativeToThisObjectFromAbsolutePosition(x,y){
        return [x-this.x,y-this.y]
    }

    get w(){
        return this.findMax()[1] - this.findMax()[0]
    }
    get h(){
        return this.findMax()[3] - this.findMax(2)
    }
}

export default object