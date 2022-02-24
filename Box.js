AFRAME.registerComponent("move", {
    schema: {moveY: {
        type: 'number',
        default: 1
    }},
    tick: function(){
        this.data.moveY = this.data.moveY + 0.02
        var pos = this.el.getAttribute("position")
        pos.Y = this.data.moveY
        this.el.setAttribute('position', {x: pos.x, y: pos.Y, z: pos.z})
    }
})
AFRAME.registerComponent("fall", {
    schema: {moveY: {
        type: 'number',
        default: 1
    }},
    tick: function(){
        window.addEventListener("click", (e)=>{
            this.data.moveY = this.data.moveY - 0.02
        })
        
        var pos = this.el.getAttribute("position")
        pos.Y = this.data.moveY
        this.el.setAttribute('position', {x: pos.x, y: pos.Y, z: pos.z})
    }
})
AFRAME.registerComponent("zoom", {
    schema: {moveZ: {
        type: 'number',
        default: 10
    }},
    tick: function(){
        this.data.moveZ = this.data.moveZ + 0.02
        var pos = this.el.getAttribute("position")
        pos.z = this.data.moveZ
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
    }
})