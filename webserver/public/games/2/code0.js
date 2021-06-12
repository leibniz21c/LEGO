gdjs.Level1Code = {};
gdjs.Level1Code.forEachCount0_2 = 0;

gdjs.Level1Code.forEachCount1_2 = 0;

gdjs.Level1Code.forEachCount2_2 = 0;

gdjs.Level1Code.forEachCount3_2 = 0;

gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDMonsterObjects1= [];
gdjs.Level1Code.GDMonsterObjects2= [];
gdjs.Level1Code.GDMonsterObjects3= [];
gdjs.Level1Code.GDMonsterObjects4= [];
gdjs.Level1Code.GDShape1Objects1= [];
gdjs.Level1Code.GDShape1Objects2= [];
gdjs.Level1Code.GDShape1Objects3= [];
gdjs.Level1Code.GDShape1Objects4= [];
gdjs.Level1Code.GDShape2Objects1= [];
gdjs.Level1Code.GDShape2Objects2= [];
gdjs.Level1Code.GDShape2Objects3= [];
gdjs.Level1Code.GDShape2Objects4= [];
gdjs.Level1Code.GDShape3Objects1= [];
gdjs.Level1Code.GDShape3Objects2= [];
gdjs.Level1Code.GDShape3Objects3= [];
gdjs.Level1Code.GDShape3Objects4= [];
gdjs.Level1Code.GDShape4Objects1= [];
gdjs.Level1Code.GDShape4Objects2= [];
gdjs.Level1Code.GDShape4Objects3= [];
gdjs.Level1Code.GDShape4Objects4= [];
gdjs.Level1Code.GDFood1Objects1= [];
gdjs.Level1Code.GDFood1Objects2= [];
gdjs.Level1Code.GDFood1Objects3= [];
gdjs.Level1Code.GDFood1Objects4= [];
gdjs.Level1Code.GDFood2Objects1= [];
gdjs.Level1Code.GDFood2Objects2= [];
gdjs.Level1Code.GDFood2Objects3= [];
gdjs.Level1Code.GDFood2Objects4= [];
gdjs.Level1Code.GDFood3Objects1= [];
gdjs.Level1Code.GDFood3Objects2= [];
gdjs.Level1Code.GDFood3Objects3= [];
gdjs.Level1Code.GDFood3Objects4= [];
gdjs.Level1Code.GDScoreObjects1= [];
gdjs.Level1Code.GDScoreObjects2= [];
gdjs.Level1Code.GDScoreObjects3= [];
gdjs.Level1Code.GDScoreObjects4= [];
gdjs.Level1Code.GDFood4Objects1= [];
gdjs.Level1Code.GDFood4Objects2= [];
gdjs.Level1Code.GDFood4Objects3= [];
gdjs.Level1Code.GDFood4Objects4= [];
gdjs.Level1Code.GDObstacleObjects1= [];
gdjs.Level1Code.GDObstacleObjects2= [];
gdjs.Level1Code.GDObstacleObjects3= [];
gdjs.Level1Code.GDObstacleObjects4= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDLifeObjects4= [];
gdjs.Level1Code.GDGameOverObjects1= [];
gdjs.Level1Code.GDGameOverObjects2= [];
gdjs.Level1Code.GDGameOverObjects3= [];
gdjs.Level1Code.GDGameOverObjects4= [];
gdjs.Level1Code.GDButtonTryAgainObjects1= [];
gdjs.Level1Code.GDButtonTryAgainObjects2= [];
gdjs.Level1Code.GDButtonTryAgainObjects3= [];
gdjs.Level1Code.GDButtonTryAgainObjects4= [];
gdjs.Level1Code.GDButtonMainMenuObjects1= [];
gdjs.Level1Code.GDButtonMainMenuObjects2= [];
gdjs.Level1Code.GDButtonMainMenuObjects3= [];
gdjs.Level1Code.GDButtonMainMenuObjects4= [];
gdjs.Level1Code.GDFood1ExplosionObjects1= [];
gdjs.Level1Code.GDFood1ExplosionObjects2= [];
gdjs.Level1Code.GDFood1ExplosionObjects3= [];
gdjs.Level1Code.GDFood1ExplosionObjects4= [];
gdjs.Level1Code.GDFood2ExplosionObjects1= [];
gdjs.Level1Code.GDFood2ExplosionObjects2= [];
gdjs.Level1Code.GDFood2ExplosionObjects3= [];
gdjs.Level1Code.GDFood2ExplosionObjects4= [];
gdjs.Level1Code.GDFood3ExplosionObjects1= [];
gdjs.Level1Code.GDFood3ExplosionObjects2= [];
gdjs.Level1Code.GDFood3ExplosionObjects3= [];
gdjs.Level1Code.GDFood3ExplosionObjects4= [];
gdjs.Level1Code.GDFood4ExplosionObjects1= [];
gdjs.Level1Code.GDFood4ExplosionObjects2= [];
gdjs.Level1Code.GDFood4ExplosionObjects3= [];
gdjs.Level1Code.GDFood4ExplosionObjects4= [];
gdjs.Level1Code.GDPigObjects1= [];
gdjs.Level1Code.GDPigObjects2= [];
gdjs.Level1Code.GDPigObjects3= [];
gdjs.Level1Code.GDPigObjects4= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPigObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPigObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPigObjects2[k] = gdjs.Level1Code.GDPigObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPigObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPigObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPigObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPigObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPigObjects1[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPigObjects1[k] = gdjs.Level1Code.GDPigObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPigObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPigObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPigObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects1[i].addForce(450, 0, 0);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1Objects1ObjectsGDgdjs_46Level1Code_46GDFood2Objects1ObjectsGDgdjs_46Level1Code_46GDFood3Objects1ObjectsGDgdjs_46Level1Code_46GDFood4Objects1Objects = Hashtable.newFrom({"Food1": gdjs.Level1Code.GDFood1Objects1, "Food2": gdjs.Level1Code.GDFood2Objects1, "Food3": gdjs.Level1Code.GDFood3Objects1, "Food4": gdjs.Level1Code.GDFood4Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1Objects2ObjectsGDgdjs_46Level1Code_46GDFood2Objects2ObjectsGDgdjs_46Level1Code_46GDFood3Objects2ObjectsGDgdjs_46Level1Code_46GDFood4Objects2Objects = Hashtable.newFrom({"Food1": gdjs.Level1Code.GDFood1Objects2, "Food2": gdjs.Level1Code.GDFood2Objects2, "Food3": gdjs.Level1Code.GDFood3Objects2, "Food4": gdjs.Level1Code.GDFood4Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPigObjects2Objects = Hashtable.newFrom({"Pig": gdjs.Level1Code.GDPigObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1Objects3Objects = Hashtable.newFrom({"Food1": gdjs.Level1Code.GDFood1Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1ExplosionObjects3Objects = Hashtable.newFrom({"Food1Explosion": gdjs.Level1Code.GDFood1ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood2Objects3Objects = Hashtable.newFrom({"Food2": gdjs.Level1Code.GDFood2Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood2ExplosionObjects3Objects = Hashtable.newFrom({"Food2Explosion": gdjs.Level1Code.GDFood2ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood3Objects3Objects = Hashtable.newFrom({"Food3": gdjs.Level1Code.GDFood3Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood3ExplosionObjects3Objects = Hashtable.newFrom({"Food3Explosion": gdjs.Level1Code.GDFood3ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood4Objects3Objects = Hashtable.newFrom({"Food4": gdjs.Level1Code.GDFood4Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood4ExplosionObjects3Objects = Hashtable.newFrom({"Food4Explosion": gdjs.Level1Code.GDFood4ExplosionObjects3});gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level1Code.GDFood1Objects2, gdjs.Level1Code.GDFood1Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFood1Objects3 */
gdjs.Level1Code.GDFood1ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1ExplosionObjects3Objects, (( gdjs.Level1Code.GDFood1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood1Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDFood1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood1Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDFood1ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDFood1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood1Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDFood2Objects2, gdjs.Level1Code.GDFood2Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood2Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFood2Objects3 */
gdjs.Level1Code.GDFood2ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood2ExplosionObjects3Objects, (( gdjs.Level1Code.GDFood2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood2Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDFood2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood2Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDFood2ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDFood2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood2Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDFood3Objects2, gdjs.Level1Code.GDFood3Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood3Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFood3Objects3 */
gdjs.Level1Code.GDFood3ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood3ExplosionObjects3Objects, (( gdjs.Level1Code.GDFood3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood3Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDFood3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood3Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDFood3ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDFood3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood3Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDFood4Objects2, gdjs.Level1Code.GDFood4Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood4Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFood4Objects3 */
gdjs.Level1Code.GDFood4ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood4ExplosionObjects3Objects, (( gdjs.Level1Code.GDFood4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood4Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDFood4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood4Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDFood4ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDFood4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDFood4Objects3[0].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.Level1Code.GDFood1Objects2, gdjs.Level1Code.GDFood1Objects3);

gdjs.copyArray(gdjs.Level1Code.GDFood2Objects2, gdjs.Level1Code.GDFood2Objects3);

gdjs.copyArray(gdjs.Level1Code.GDFood3Objects2, gdjs.Level1Code.GDFood3Objects3);

gdjs.copyArray(gdjs.Level1Code.GDFood4Objects2, gdjs.Level1Code.GDFood4Objects3);

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects3);
{for(var i = 0, len = gdjs.Level1Code.GDFood1Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood2Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood3Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood4Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects3[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "obtain.wav", false, 100, 1);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPigObjects2Objects = Hashtable.newFrom({"Pig": gdjs.Level1Code.GDPigObjects2});gdjs.Level1Code.eventsList2 = function(runtimeScene) {

};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level1Code.GDButtonTryAgainObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level1Code.GDButtonTryAgainObjects2});gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDButtonTryAgainObjects2, gdjs.Level1Code.GDButtonTryAgainObjects3);

{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects3[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level1Code.GDButtonMainMenuObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level1Code.GDButtonMainMenuObjects1});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDButtonMainMenuObjects1, gdjs.Level1Code.GDButtonMainMenuObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDButtonTryAgainObjects1, gdjs.Level1Code.GDButtonTryAgainObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDButtonTryAgainObjects1, gdjs.Level1Code.GDButtonTryAgainObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level1Code.GDButtonMainMenuObjects1, gdjs.Level1Code.GDButtonMainMenuObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuNormal");
}
}}

}


{

/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].setAnimationName("MainMenuHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPigObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects1[i].addForce(-(450), 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPigObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects1[i].addForce(450, 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3, "FoodCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDFood1Objects1.length = 0;

gdjs.Level1Code.GDFood2Objects1.length = 0;

gdjs.Level1Code.GDFood3Objects1.length = 0;

gdjs.Level1Code.GDFood4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1Objects1ObjectsGDgdjs_46Level1Code_46GDFood2Objects1ObjectsGDgdjs_46Level1Code_46GDFood3Objects1ObjectsGDgdjs_46Level1Code_46GDFood4Objects1Objects, "Food" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level1Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDFood4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level1Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDFood4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FoodCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Food1"), gdjs.Level1Code.GDFood1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food2"), gdjs.Level1Code.GDFood2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food3"), gdjs.Level1Code.GDFood3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food4"), gdjs.Level1Code.GDFood4Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDFood4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4Objects1[i].rotate(90, runtimeScene);
}
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Food1"), gdjs.Level1Code.GDFood1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food2"), gdjs.Level1Code.GDFood2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food3"), gdjs.Level1Code.GDFood3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food4"), gdjs.Level1Code.GDFood4Objects1);

gdjs.Level1Code.forEachTotalCount2 = 0;
gdjs.Level1Code.forEachObjects2.length = 0;
gdjs.Level1Code.forEachCount0_2 = gdjs.Level1Code.GDFood1Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount0_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDFood1Objects1);
gdjs.Level1Code.forEachCount1_2 = gdjs.Level1Code.GDFood2Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount1_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDFood2Objects1);
gdjs.Level1Code.forEachCount2_2 = gdjs.Level1Code.GDFood3Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount2_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDFood3Objects1);
gdjs.Level1Code.forEachCount3_2 = gdjs.Level1Code.GDFood4Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount3_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDFood4Objects1);
for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachTotalCount2;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects2);
gdjs.Level1Code.GDFood1Objects2.length = 0;

gdjs.Level1Code.GDFood2Objects2.length = 0;

gdjs.Level1Code.GDFood3Objects2.length = 0;

gdjs.Level1Code.GDFood4Objects2.length = 0;


if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2) {
    gdjs.Level1Code.GDFood1Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2) {
    gdjs.Level1Code.GDFood2Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2) {
    gdjs.Level1Code.GDFood3Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2) {
    gdjs.Level1Code.GDFood4Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFood1Objects2ObjectsGDgdjs_46Level1Code_46GDFood2Objects2ObjectsGDgdjs_46Level1Code_46GDFood3Objects2ObjectsGDgdjs_46Level1Code_46GDFood4Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPigObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.Level1Code.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDObstacleObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects2);
gdjs.Level1Code.GDObstacleObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDObstacleObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDObstacleObjects2.push(gdjs.Level1Code.forEachTemporary2);
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPigObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPigObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "fail.wav", false, 100, 1);
}}
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "ObstacleCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].addPolarForce(90, 1.5 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPigObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPigObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPigObjects1[k] = gdjs.Level1Code.GDPigObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPigObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
/* Reuse gdjs.Level1Code.GDPigObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Level1Code.GDPigObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPigObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Level1Code.GDPigObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPigObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPigObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPigObjects1[k] = gdjs.Level1Code.GDPigObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPigObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Check")) == 0;
}gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val;
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://legogames.iptime.org/logging", "{\"score\" : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")) + "}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{runtimeScene.getGame().getVariables().get("Check").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pig"), gdjs.Level1Code.GDPigObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPigObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPigObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPigObjects1[k] = gdjs.Level1Code.GDPigObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPigObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Check")) == 1;
}gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val;
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level1Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level1Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Food1"), gdjs.Level1Code.GDFood1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food2"), gdjs.Level1Code.GDFood2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food3"), gdjs.Level1Code.GDFood3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Food4"), gdjs.Level1Code.GDFood4Objects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
/* Reuse gdjs.Level1Code.GDPigObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.Level1Code.GDPigObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPigObjects1[i].setAnimationName("PigDead");
}
}{for(var i = 0, len = gdjs.Level1Code.GDFood1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDFood4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFood4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Level1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Check")) == 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level1Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level1Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}}

}


{



}


{


{
{runtimeScene.getVariables().get("GameSpeed").add(8 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMonsterObjects1.length = 0;
gdjs.Level1Code.GDMonsterObjects2.length = 0;
gdjs.Level1Code.GDMonsterObjects3.length = 0;
gdjs.Level1Code.GDMonsterObjects4.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDFood1Objects1.length = 0;
gdjs.Level1Code.GDFood1Objects2.length = 0;
gdjs.Level1Code.GDFood1Objects3.length = 0;
gdjs.Level1Code.GDFood1Objects4.length = 0;
gdjs.Level1Code.GDFood2Objects1.length = 0;
gdjs.Level1Code.GDFood2Objects2.length = 0;
gdjs.Level1Code.GDFood2Objects3.length = 0;
gdjs.Level1Code.GDFood2Objects4.length = 0;
gdjs.Level1Code.GDFood3Objects1.length = 0;
gdjs.Level1Code.GDFood3Objects2.length = 0;
gdjs.Level1Code.GDFood3Objects3.length = 0;
gdjs.Level1Code.GDFood3Objects4.length = 0;
gdjs.Level1Code.GDScoreObjects1.length = 0;
gdjs.Level1Code.GDScoreObjects2.length = 0;
gdjs.Level1Code.GDScoreObjects3.length = 0;
gdjs.Level1Code.GDScoreObjects4.length = 0;
gdjs.Level1Code.GDFood4Objects1.length = 0;
gdjs.Level1Code.GDFood4Objects2.length = 0;
gdjs.Level1Code.GDFood4Objects3.length = 0;
gdjs.Level1Code.GDFood4Objects4.length = 0;
gdjs.Level1Code.GDObstacleObjects1.length = 0;
gdjs.Level1Code.GDObstacleObjects2.length = 0;
gdjs.Level1Code.GDObstacleObjects3.length = 0;
gdjs.Level1Code.GDObstacleObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDGameOverObjects1.length = 0;
gdjs.Level1Code.GDGameOverObjects2.length = 0;
gdjs.Level1Code.GDGameOverObjects3.length = 0;
gdjs.Level1Code.GDGameOverObjects4.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects1.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects2.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects3.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects4.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects1.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects2.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects3.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects4.length = 0;
gdjs.Level1Code.GDFood1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDFood1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDFood1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDFood1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDFood2ExplosionObjects1.length = 0;
gdjs.Level1Code.GDFood2ExplosionObjects2.length = 0;
gdjs.Level1Code.GDFood2ExplosionObjects3.length = 0;
gdjs.Level1Code.GDFood2ExplosionObjects4.length = 0;
gdjs.Level1Code.GDFood3ExplosionObjects1.length = 0;
gdjs.Level1Code.GDFood3ExplosionObjects2.length = 0;
gdjs.Level1Code.GDFood3ExplosionObjects3.length = 0;
gdjs.Level1Code.GDFood3ExplosionObjects4.length = 0;
gdjs.Level1Code.GDFood4ExplosionObjects1.length = 0;
gdjs.Level1Code.GDFood4ExplosionObjects2.length = 0;
gdjs.Level1Code.GDFood4ExplosionObjects3.length = 0;
gdjs.Level1Code.GDFood4ExplosionObjects4.length = 0;
gdjs.Level1Code.GDPigObjects1.length = 0;
gdjs.Level1Code.GDPigObjects2.length = 0;
gdjs.Level1Code.GDPigObjects3.length = 0;
gdjs.Level1Code.GDPigObjects4.length = 0;

gdjs.Level1Code.eventsList6(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
