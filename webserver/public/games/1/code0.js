gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDPlayerObjects1_1final = [];

gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects3= [];
gdjs.New_32sceneCode.GDCloudObjects1= [];
gdjs.New_32sceneCode.GDCloudObjects2= [];
gdjs.New_32sceneCode.GDCloudObjects3= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects3= [];
gdjs.New_32sceneCode.GDTiledObjects1= [];
gdjs.New_32sceneCode.GDTiledObjects2= [];
gdjs.New_32sceneCode.GDTiledObjects3= [];
gdjs.New_32sceneCode.GDCoinObjects1= [];
gdjs.New_32sceneCode.GDCoinObjects2= [];
gdjs.New_32sceneCode.GDCoinObjects3= [];
gdjs.New_32sceneCode.GDSlimeObjects1= [];
gdjs.New_32sceneCode.GDSlimeObjects2= [];
gdjs.New_32sceneCode.GDSlimeObjects3= [];
gdjs.New_32sceneCode.GDrightObjects1= [];
gdjs.New_32sceneCode.GDrightObjects2= [];
gdjs.New_32sceneCode.GDrightObjects3= [];
gdjs.New_32sceneCode.GDleftObjects1= [];
gdjs.New_32sceneCode.GDleftObjects2= [];
gdjs.New_32sceneCode.GDleftObjects3= [];
gdjs.New_32sceneCode.GDCheckpointObjects1= [];
gdjs.New_32sceneCode.GDCheckpointObjects2= [];
gdjs.New_32sceneCode.GDCheckpointObjects3= [];
gdjs.New_32sceneCode.GDbackgroundObjects1= [];
gdjs.New_32sceneCode.GDbackgroundObjects2= [];
gdjs.New_32sceneCode.GDbackgroundObjects3= [];
gdjs.New_32sceneCode.GDStart_95informaionObjects1= [];
gdjs.New_32sceneCode.GDStart_95informaionObjects2= [];
gdjs.New_32sceneCode.GDStart_95informaionObjects3= [];
gdjs.New_32sceneCode.GDReplay_95informationObjects1= [];
gdjs.New_32sceneCode.GDReplay_95informationObjects2= [];
gdjs.New_32sceneCode.GDReplay_95informationObjects3= [];
gdjs.New_32sceneCode.GDGameOverObjects1= [];
gdjs.New_32sceneCode.GDGameOverObjects2= [];
gdjs.New_32sceneCode.GDGameOverObjects3= [];
gdjs.New_32sceneCode.GDShowScoreObjects1= [];
gdjs.New_32sceneCode.GDShowScoreObjects2= [];
gdjs.New_32sceneCode.GDShowScoreObjects3= [];
gdjs.New_32sceneCode.GDenemyObjects1= [];
gdjs.New_32sceneCode.GDenemyObjects2= [];
gdjs.New_32sceneCode.GDenemyObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects2[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].addPolarForce(0, 250, 0);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.New_32sceneCode.GDrightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.New_32sceneCode.GDleftObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointY("")));
}{runtimeScene.getVariables().get("speed").setNumber(200);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().get("score"), true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 1;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.New_32sceneCode.GDCloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("GrassPlatform"), gdjs.New_32sceneCode.GDGrassPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShowScore"), gdjs.New_32sceneCode.GDShowScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_informaion"), gdjs.New_32sceneCode.GDStart_95informaionObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.New_32sceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.New_32sceneCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.New_32sceneCode.GDrightObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDGrassPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGrassPlatformObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDCloudObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCloudObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbackgroundObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDrightObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDleftObjects1[i].addPolarForce(180, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDStart_95informaionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDStart_95informaionObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShowScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShowScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 0;
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("state").setNumber(1);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSlimeObjects1[k] = gdjs.New_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.New_32sceneCode.GDrightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSlimeObjects1[k] = gdjs.New_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.New_32sceneCode.GDleftObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].flipX(false);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.New_32sceneCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Replay_information"), gdjs.New_32sceneCode.GDReplay_95informationObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.New_32sceneCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.New_32sceneCode.GDrightObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDReplay_95informationObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDReplay_95informationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGameOverObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CheckpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CheckpointY")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassPlatform"), gdjs.New_32sceneCode.GDGrassPlatformObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDGrassPlatformObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDGrassPlatformObjects1[i].getCenterXInScene() <= -(222) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDGrassPlatformObjects1[k] = gdjs.New_32sceneCode.GDGrassPlatformObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDGrassPlatformObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDGrassPlatformObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDGrassPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGrassPlatformObjects1[i].setX(1185);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDGrassPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGrassPlatformObjects1[i].setWidth(gdjs.randomFloatInRange(64, 256));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDGrassPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGrassPlatformObjects1[i].setY(gdjs.randomInRange(350, 520));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GrassPlatform"), gdjs.New_32sceneCode.GDGrassPlatformObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDGrassPlatformObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDGrassPlatformObjects1[i].getWidth() == 256 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDGrassPlatformObjects1[k] = gdjs.New_32sceneCode.GDGrassPlatformObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDGrassPlatformObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("state").setNumber(0);
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDPlayerObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getX() <= -(100) ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDPlayerObjects1_1final.push(gdjs.New_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getY() >= 600 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDPlayerObjects1_1final.push(gdjs.New_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDPlayerObjects1_1final, gdjs.New_32sceneCode.GDPlayerObjects1);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShowScore"), gdjs.New_32sceneCode.GDShowScoreObjects1);
{gdjs.evtTools.network.sendAsyncRequest("http://legogames.iptime.org/logging", "{\"score\" : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")) + " } ", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", true);
}{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShowScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShowScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.New_32sceneCode.GDCloudObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCloudObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCloudObjects1[i].getX() <= -(200) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCloudObjects1[k] = gdjs.New_32sceneCode.GDCloudObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCloudObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCloudObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCloudObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCloudObjects1[i].setX(1185);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 1000;
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 2000;
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("speed").setNumber(350);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 2000;
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 4000;
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("speed").setNumber(450);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 4000;
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10000;
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("speed").setNumber(600);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.New_32sceneCode.GDCloudObjects1.length = 0;
gdjs.New_32sceneCode.GDCloudObjects2.length = 0;
gdjs.New_32sceneCode.GDCloudObjects3.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledObjects3.length = 0;
gdjs.New_32sceneCode.GDCoinObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinObjects3.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects1.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects2.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects3.length = 0;
gdjs.New_32sceneCode.GDrightObjects1.length = 0;
gdjs.New_32sceneCode.GDrightObjects2.length = 0;
gdjs.New_32sceneCode.GDrightObjects3.length = 0;
gdjs.New_32sceneCode.GDleftObjects1.length = 0;
gdjs.New_32sceneCode.GDleftObjects2.length = 0;
gdjs.New_32sceneCode.GDleftObjects3.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects1.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects2.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects3.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDStart_95informaionObjects1.length = 0;
gdjs.New_32sceneCode.GDStart_95informaionObjects2.length = 0;
gdjs.New_32sceneCode.GDStart_95informaionObjects3.length = 0;
gdjs.New_32sceneCode.GDReplay_95informationObjects1.length = 0;
gdjs.New_32sceneCode.GDReplay_95informationObjects2.length = 0;
gdjs.New_32sceneCode.GDReplay_95informationObjects3.length = 0;
gdjs.New_32sceneCode.GDGameOverObjects1.length = 0;
gdjs.New_32sceneCode.GDGameOverObjects2.length = 0;
gdjs.New_32sceneCode.GDGameOverObjects3.length = 0;
gdjs.New_32sceneCode.GDShowScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDShowScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDShowScoreObjects3.length = 0;
gdjs.New_32sceneCode.GDenemyObjects1.length = 0;
gdjs.New_32sceneCode.GDenemyObjects2.length = 0;
gdjs.New_32sceneCode.GDenemyObjects3.length = 0;

gdjs.New_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
