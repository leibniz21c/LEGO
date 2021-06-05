var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let object;
    (function(object2) {
      object2.pickOnly = function(objectsLists, runtimeObject) {
        for (const listName in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(listName)) {
            const list = objectsLists.items[listName];
            if (list.indexOf(runtimeObject) === -1) {
              list.length = 0;
            } else {
              list.length = 0;
              list.push(runtimeObject);
            }
          }
        }
      };
      object2.twoListsTest = function(predicate, objectsLists1, objectsLists2, inverted, extraArg) {
        let isTrue = false;
        const objects1Lists = gdjs2.staticArray(gdjs2.evtTools.object.twoListsTest);
        objectsLists1.values(objects1Lists);
        const objects2Lists = gdjs2.staticArray2(gdjs2.evtTools.object.twoListsTest);
        objectsLists2.values(objects2Lists);
        for (let i = 0, leni = objects1Lists.length; i < leni; ++i) {
          let arr = objects1Lists[i];
          for (let k = 0, lenk = arr.length; k < lenk; ++k) {
            arr[k].pick = false;
          }
        }
        for (let i = 0, leni = objects2Lists.length; i < leni; ++i) {
          let arr = objects2Lists[i];
          for (let k = 0, lenk = arr.length; k < lenk; ++k) {
            arr[k].pick = false;
          }
        }
        for (let i = 0, leni = objects1Lists.length; i < leni; ++i) {
          const arr1 = objects1Lists[i];
          for (let k = 0, lenk = arr1.length; k < lenk; ++k) {
            let atLeastOneObject = false;
            for (let j = 0, lenj = objects2Lists.length; j < lenj; ++j) {
              const arr2 = objects2Lists[j];
              for (let l = 0, lenl = arr2.length; l < lenl; ++l) {
                if (arr1[k].pick && arr2[l].pick) {
                  continue;
                }
                if (arr1[k].id !== arr2[l].id && predicate(arr1[k], arr2[l], extraArg)) {
                  if (!inverted) {
                    isTrue = true;
                    arr1[k].pick = true;
                    arr2[l].pick = true;
                  }
                  atLeastOneObject = true;
                }
              }
            }
            if (!atLeastOneObject && inverted) {
              isTrue = true;
              arr1[k].pick = true;
            }
          }
        }
        for (let i = 0, leni = objects1Lists.length; i < leni; ++i) {
          let arr = objects1Lists[i];
          let finalSize = 0;
          for (let k = 0, lenk = arr.length; k < lenk; ++k) {
            let obj = arr[k];
            if (arr[k].pick) {
              arr[finalSize] = obj;
              finalSize++;
            }
          }
          arr.length = finalSize;
        }
        if (!inverted) {
          for (let i = 0, leni = objects2Lists.length; i < leni; ++i) {
            let arr = objects2Lists[i];
            let finalSize = 0;
            for (let k = 0, lenk = arr.length; k < lenk; ++k) {
              let obj = arr[k];
              if (arr[k].pick) {
                arr[finalSize] = obj;
                finalSize++;
              }
            }
            arr.length = finalSize;
          }
        }
        return isTrue;
      };
      object2.pickObjectsIf = function(predicate, objectsLists, negatePredicate, extraArg) {
        let isTrue = false;
        const lists = gdjs2.staticArray(gdjs2.evtTools.object.pickObjectsIf);
        objectsLists.values(lists);
        for (let i = 0, leni = lists.length; i < leni; ++i) {
          const arr = lists[i];
          for (let k = 0, lenk = arr.length; k < lenk; ++k) {
            const object3 = arr[k];
            if (negatePredicate ^ predicate(object3, extraArg)) {
              isTrue = true;
              object3.pick = true;
            } else {
              object3.pick = false;
            }
          }
        }
        for (let i = 0, leni = lists.length; i < leni; ++i) {
          gdjs2.evtTools.object.filterPickedObjectsList(lists[i]);
        }
        return isTrue;
      };
      object2.filterPickedObjectsList = function(arr) {
        let finalSize = 0;
        for (let k = 0, lenk = arr.length; k < lenk; ++k) {
          const obj = arr[k];
          if (obj.pick) {
            arr[finalSize] = obj;
            finalSize++;
          }
        }
        arr.length = finalSize;
      };
      object2.hitBoxesCollisionTest = function(objectsLists1, objectsLists2, inverted, runtimeScene, ignoreTouchingEdges) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.RuntimeObject.collisionTest, objectsLists1, objectsLists2, inverted, ignoreTouchingEdges);
      };
      object2._distanceBetweenObjects = function(obj1, obj2, distance) {
        return obj1.getSqDistanceToObject(obj2) <= distance;
      };
      object2.distanceTest = function(objectsLists1, objectsLists2, distance, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.evtTools.object._distanceBetweenObjects, objectsLists1, objectsLists2, inverted, distance * distance);
      };
      object2._movesToward = function(obj1, obj2, tolerance) {
        if (obj1.hasNoForces()) {
          return false;
        }
        let objAngle = Math.atan2(obj2.getDrawableY() + obj2.getCenterY() - (obj1.getDrawableY() + obj1.getCenterY()), obj2.getDrawableX() + obj2.getCenterX() - (obj1.getDrawableX() + obj1.getCenterX()));
        objAngle *= 180 / 3.14159;
        return Math.abs(gdjs2.evtTools.common.angleDifference(obj1.getAverageForce().getAngle(), objAngle)) <= tolerance / 2;
      };
      object2.movesTowardTest = function(objectsLists1, objectsLists2, tolerance, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.evtTools.object._movesToward, objectsLists1, objectsLists2, inverted, tolerance);
      };
      object2._turnedToward = function(obj1, obj2, tolerance) {
        let objAngle = Math.atan2(obj2.getDrawableY() + obj2.getCenterY() - (obj1.getDrawableY() + obj1.getCenterY()), obj2.getDrawableX() + obj2.getCenterX() - (obj1.getDrawableX() + obj1.getCenterX()));
        objAngle *= 180 / 3.14159;
        return Math.abs(gdjs2.evtTools.common.angleDifference(obj1.getAngle(), objAngle)) <= tolerance / 2;
      };
      object2.turnedTowardTest = function(objectsLists1, objectsLists2, tolerance, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.evtTools.object._turnedToward, objectsLists1, objectsLists2, inverted, tolerance);
      };
      object2.pickAllObjects = function(objectsContext, objectsLists) {
        for (const name in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(name)) {
            const allObjects = objectsContext.getObjects(name);
            const objectsList = objectsLists.items[name];
            objectsList.length = 0;
            objectsList.push.apply(objectsList, allObjects);
          }
        }
        return true;
      };
      object2.pickRandomObject = function(runtimeScene, objectsLists) {
        let objectsCount = 0;
        for (let listName in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(listName)) {
            let list = objectsLists.items[listName];
            objectsCount += list.length;
          }
        }
        if (objectsCount === 0) {
          return false;
        }
        let index = Math.floor(Math.random() * objectsCount);
        if (index >= objectsCount) {
          index = objectsCount - 1;
        }
        let startIndex = 0;
        let theChosenOne = null;
        for (let listName in objectsLists.items) {
          if (objectsLists.items.hasOwnProperty(listName)) {
            let list = objectsLists.items[listName];
            if (index - startIndex < list.length) {
              theChosenOne = list[index - startIndex];
              break;
            }
            startIndex += list.length;
          }
        }
        gdjs2.evtTools.object.pickOnly(objectsLists, theChosenOne);
        return true;
      };
      object2.pickNearestObject = function(objectsLists, x, y, inverted) {
        let bestObject = null;
        let best = 0;
        let first = true;
        const lists = gdjs2.staticArray(gdjs2.evtTools.object.pickNearestObject);
        objectsLists.values(lists);
        for (let i = 0, len = lists.length; i < len; ++i) {
          const list = lists[i];
          for (let j = 0; j < list.length; ++j) {
            const object3 = list[j];
            const distance = object3.getSqDistanceToPosition(x, y);
            if (first || distance < best ^ inverted) {
              best = distance;
              bestObject = object3;
            }
            first = false;
          }
        }
        if (!bestObject) {
          return false;
        }
        gdjs2.evtTools.object.pickOnly(objectsLists, bestObject);
        return true;
      };
      object2.raycastObject = function(objectsLists, x, y, angle, dist, varX, varY, inverted) {
        return gdjs2.evtTools.object.raycastObjectToPosition(objectsLists, x, y, x + dist * Math.cos(angle * Math.PI / 180), y + dist * Math.sin(angle * Math.PI / 180), varX, varY, inverted);
      };
      object2.raycastObjectToPosition = function(objectsLists, x, y, endX, endY, varX, varY, inverted) {
        let matchObject = null;
        let testSqDist = inverted ? 0 : (endX - x) * (endX - x) + (endY - y) * (endY - y);
        let resultX = 0;
        let resultY = 0;
        const lists = gdjs2.staticArray(gdjs2.evtTools.object.raycastObjectToPosition);
        objectsLists.values(lists);
        for (let i = 0; i < lists.length; i++) {
          const list = lists[i];
          for (let j = 0; j < list.length; j++) {
            const object3 = list[j];
            const result = object3.raycastTest(x, y, endX, endY, !inverted);
            if (result.collision) {
              if (!inverted && result.closeSqDist <= testSqDist) {
                testSqDist = result.closeSqDist;
                matchObject = object3;
                resultX = result.closeX;
                resultY = result.closeY;
              } else {
                if (inverted && result.farSqDist >= testSqDist) {
                  testSqDist = result.farSqDist;
                  matchObject = object3;
                  resultX = result.farX;
                  resultY = result.farY;
                }
              }
            }
          }
        }
        if (!matchObject) {
          return false;
        }
        gdjs2.evtTools.object.pickOnly(objectsLists, matchObject);
        varX.setNumber(resultX);
        varY.setNumber(resultY);
        return true;
      };
      object2.doCreateObjectOnScene = function(objectsContext, objectName, objectsLists, x, y, layerName) {
        const obj = objectsContext.createObject(objectName);
        const layer = objectsContext.getLayer(layerName);
        if (obj !== null) {
          obj.setPosition(x, y);
          obj.setLayer(layerName);
          obj.setZOrder(layer.getDefaultZOrder());
          if (objectsLists.containsKey(objectName)) {
            objectsLists.get(objectName).push(obj);
          }
        }
      };
      object2.createObjectOnScene = function(objectsContext, objectsLists, x, y, layer) {
        gdjs2.evtTools.object.doCreateObjectOnScene(objectsContext, objectsLists.firstKey(), objectsLists, x, y, layer);
      };
      object2.createObjectFromGroupOnScene = function(objectsContext, objectsLists, objectName, x, y, layer) {
        gdjs2.evtTools.object.doCreateObjectOnScene(objectsContext, objectName, objectsLists, x, y, layer);
      };
      object2.pickedObjectsCount = function(objectsLists) {
        let size = 0;
        const lists = gdjs2.staticArray(gdjs2.evtTools.object.pickedObjectsCount);
        objectsLists.values(lists);
        for (let i = 0, len = lists.length; i < len; ++i) {
          size += lists[i].length;
        }
        return size;
      };
    })(object = evtTools2.object || (evtTools2.object = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=objecttools.js.map
