/* 
    Nov 2023
    @nimadez
*/

import * as THREE from 'three';
import { OrbitControls } from '../../libs/addons/OrbitControls.js';
import { FullScreenQuad } from '../../libs/addons/Pass.js';
import { mergeGeometries } from '../../libs/addons/BufferGeometryUtils.js';
import { RGBELoader } from '../../libs/addons/RGBELoader.js';

import {
    MeshBVHUniformStruct, //MeshBVH
    computeBoundsTree, disposeBoundsTree, acceleratedRaycast,
    FloatVertexAttributeTexture, //UIntVertexAttributeTexture,
    shaderStructs, shaderIntersectFunction, //shaderDistanceFunction,
    //CENTER, SAH
} from '../../libs/three-mesh-bvh.module.js';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

export {
    THREE,
    OrbitControls,
    FullScreenQuad,
    mergeGeometries,
    RGBELoader,
    MeshBVHUniformStruct,
    FloatVertexAttributeTexture,
    shaderStructs, shaderIntersectFunction
}
