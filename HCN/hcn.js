class hcn{
    width;
    height;
    constructor(width,height){
        this.height = height;
        this.width =  width;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    setWith(width){
        this.width = width;
    }
    setHeight(height){
        this.height = height;
    }
    getArea(){
        this.width * this.height;
    }
    getPerimeter(){
        (this.width + this.height) * 2;
    }
}
let myHCN = new hcn(150,100);
let width = myHCN.getWidth();
let height = myHCN.getHeight();
myHCN.getWidth(200);
let cavas = document.getElementById("hcn");
let ctx = cavas.getContext('2d');
ctx.fillStyle="pink";
ctx.fillRect(50,50,width,height);