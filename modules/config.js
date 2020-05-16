const config = {}
config.inputReference = {};
config.inputReference.movementIndex = 
    ['w','a','s','d','ArrowUp','ArrowLeft','ArrowDown','ArrowRight'];

config.inputReference.coeffIndex = 
    [[0,-1],[-1,0],[0,1],[1,0],[0,-1],[-1,0],[0,1],[1,0]];

config.defaultAppConfig = {
    initFunctions:["visualInit",'mouseInputInit'],
    animateFunctions:["animate","update","render"],
    lastFrame:undefined,
    constantRender:true,
    background:"black",
    pixelDensity:1,
    eventListeners:[],
    eventListenersFunction:[]
}

config.defaultObjectProps = {
    shapes:[],
    animations:[],
    behaviors:[],
    behaviorFuncs:[],
    behaviorQueue:[],
    hoverEvents:[],
    animationCount:0,
    initFunctions:["createPreloader"],
    static:true,
    x:0,y:0,
    rotation:0, 
    positionIndicator:false,
    display:true,opacity:1,
    mouseUpEvent:[],mouseDownEvent:[],mouseMoveEvent:[],
    zIndex:0,
    alignX:false,
    alignDirectionX:'right',
    alignMarginX:5,
    alignY:false,
    alignDirectionY:'top',
    alignMarginY:5
}

config.defaultStorageProps = {
    spacing:0,
    direction:'row',
    model:[],
    margin:0
}

config.defaultAdvanceStorageProps = {
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    backgroundFunction:null
}

config.defaultShapeOptions = {
    kind:"rect",
    animations:[],
    hoverEvents:[],
    animationCount:0,
    x:0,y:0,rotation:0,scaleX:1,scaleY:1,
    color:"black",display:true,
    lineWidth:1, opacity:1,
    borderColor:'yellow',
    borderWidth:10,
    border:false, borderOnly:false,
    shadow:null,mouseUpEvent:[],mouseDownEvent:[],mouseMoveEvent:[]
}

config.defaultRectOptions = {
    w:0,h:0,clip:false,
    clipImageLink:null,clipCanvas:null,
    clipSpriteSheetX:null,clipSpriteSheetY:null,
    spriteLengthX:null,spriteLengthY:null
}

config.defaultArcOptions = {
    rad:0, arcDegree:360,
}

config.defaultTextOptions = {
    textAlign:'center',
    fontFamily:'Arial Bold',
    fontSize:10,
    text:'Hello World',
    fontBackwardCompatibility:undefined
}

config.defaultImgOptions = {
    spriteLink:null,
    drawWidth:null,drawHeight:null,
    loadedFunction:undefined
}

config.defaultPolyOptions = {
    points:[],
    specialPolygon:false,
    numberOfSide:0,
    radius:10,
    clip:false,
    clipImageLink:null
}

config.defaultLineOptions = {
    points:[]
}

config.modules = ['draw']

config.directoryPreset = ''
config.fileTypePreset = ''

export default config