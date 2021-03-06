// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        oddNumberNode: cc.Node,
        evenNumberNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.oddNumberNode.getComponent('curveLabel').setLabelContent('我是中国人');
        this.evenNumberNode.getComponent('curveLabel').setLabelContent('我是中国人啊');
    },

    start () {

    },

    // update (dt) {},
});
