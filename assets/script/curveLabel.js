
cc.Class({
    extends: cc.Component,

    properties: {
        fontSize: 38,
        fontFamily: 'Arial',
        lineHeight: 46,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {},

    // update (dt) {},

    setLabelContent: function (string) {

        // this.node.removeAllChildren();

        for (let i = 0; i < this.node.getChildrenCount(); i++) {
            this.node.getChildren()[i].active = false;
        }

        this.labelString = string;
        if (!string) {
            return;
        }

        let beginAngle = (string.length % 2 == 0 ? 1/2 : 0);  // 起始角度 奇：0    偶:1/2
        let r = 512 * 1.26 / 2 + 280; // 半径
        let angle = 4.3;//2 * Math.PI * r / this.fontSize;  // 角度：圆周长/字号

        for (let i = 0; i < Math.ceil(string.length / 2); i++) {

            let currAngle = (beginAngle + i) * angle; // 当前角度
            let x = Math.sin(Math.PI / 180 * currAngle) * r;
            let y = Math.tan(Math.PI / 180 * currAngle) * x;
            let zeroIndex = beginAngle > 0 ? Math.ceil(string.length / 2) : Math.ceil(string.length / 2) - 1;
            let plusIndex = zeroIndex + i;
            let minusIndex = beginAngle > 0 ? zeroIndex - i - 1 : zeroIndex - i;

            this.createLabel(plusIndex, i, x, -y);
            if (currAngle > 0) { // 奇数
                this.createLabel(minusIndex, -i, -x, -y);
            }

        }
    },

    createLabel (stringIndex, i, x, y) {

        var node = null;
        var label = null;

        node = this.node.getChildren()[stringIndex];
        if (!node || node.active) {
            node = new cc.Node("LabelNode");
            label = node.addComponent(cc.Label);
            node.parent = this.node;
        } else {
            label = node.getComponent(cc.Label);
            if (!label) {
                label = node.addComponent(cc.Label);
            }
        }

        node.active = true;

        label.string = this.labelString.charAt(stringIndex);
        label.fontSize = this.fontSize;
        label.fontFamily = this.fontFamily;
        label.lineHeight = this.lineHeight;
        node.rotation = i * 8;
        node.position = cc.p(x, y);
    }

});
