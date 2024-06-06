# Voxel Builder

![banner](https://repository-images.githubusercontent.com/565157149/8cd060fd-3126-4f46-bc15-7f8e26b975b5)

Voxel-based 3D modeling application<br>
[https://nimadez.github.io/voxel-builder/](https://nimadez.github.io/voxel-builder/)

```Version 4.3.0 Beta```<br>
[Changelog](https://github.com/nimadez/voxel-builder/blob/main/CHANGELOG.md)

[Installation](https://github.com/nimadez/voxel-builder#installation)<br>
[Documentation](https://github.com/nimadez/voxel-builder/wiki)<br>
[Known Issues](https://github.com/nimadez/voxel-builder#known-issues)<br>
[FAQ](https://github.com/nimadez/voxel-builder#faq)

## Features

**File I/O**
- Save and load JSON [?](https://github.com/nimadez/voxel-builder/wiki/File-Format)
- Import MagicaVoxel VOX
- Export to GLB, GLTF, OBJ, STL [?](https://github.com/nimadez/voxel-builder/wiki/project)
- Local storages, quicksave, undo

**Model and Paint**
- High performance picking system
- Generators *(terrain, cube, sphere, isometric...)*
- Interactive modeling toolsets [?](https://github.com/nimadez/voxel-builder/wiki/model)
- Symmetric drawing and painting
- Color groups and transform tools

**Rendering**
- High performance voxel engine
- Real-time GPU path tracing [?](https://github.com/nimadez/voxel-builder/wiki/render)

**Voxelization**
- Bvh voxelization method
- 3D model voxelizer [?](https://github.com/nimadez/voxel-builder/wiki/Voxelization)
- Image voxelizer

**Export Meshes**
- Bake voxels to editable meshes [?](https://github.com/nimadez/voxel-builder/wiki/export)
- Bake voxels by color groups
- Unbake meshes to voxels
- glTF compatible editor

**Extensibility**
- ES modules [?](https://github.com/nimadez/voxel-builder/wiki/Modules)
- WebSockets client [?](https://github.com/nimadez/voxel-builder/wiki/WebSocket-Client)
- User startup project
- Blender importer script

**More**
- Extras [?](https://github.com/nimadez/voxel-builder/wiki/Extras)
- Minimum dependency, portable, online and offline
- Ad-free, no trackers, no logging

## Installation
Install [Electron](https://github.com/electron/electron/releases) for linux or windows
```
electron-v*-linux-x64.zip
electron-v*-win32-x64.zip
```
Get and run Voxel Builder
```
git clone https://github.com/nimadez/voxel-builder.git
cd voxel-builder
electron .
```
Update to the latest version
```
cd voxel-builder
python3 update.py
```

## Supported Browsers
- Electron *(recommended)*
- Google Chrome
- Mozilla Firefox *(with some CSS issues)*
> - PWA A2HS-ready *(add to home screen)*
> - Tablets with a stylus or Wacom recommended for best experience
> - Voxel Builder has not been fully tested on mobile devices

## Known Issues
Higher than 512K is not recommended
```
Electron is recommended for working with a large number of voxels

Higher values can have the following problems:
- Unable to quick-save baked meshes (DOMException: exceeded the quota)
- Intolerable delay when starting the real-time renderer
- Chrome tab may freeze or crash

Of course, the number of voxels is unlimited,
I have rendered up to 1 million voxels.
```
Failed to import GLB meshes for voxelization
```
Multiple meshes need to have the same properties or they won't merge,
the only solution is to merge meshes before exporting to GLB.
```
Visual artifacts and Moire patterns
```
These are related to thin-instances and nothing special can be done at this time.
```

## FAQ
How to merge vertices after export to GLB?
```
1- Open exported GLB file in Blender
2- Go to "Modeling" tab and choose vertex selection mode
3- Select all vertices (Ctrl + A)
4- Mesh > Clean Up > Merge by Distance
```
How to run Blender importer script?
```
1- Save project to JSON
2- Open Blender and go to "Scripting" tab
3- Click "Open" and select "blender-importer.py"
4- Run the script and select a JSON file
```

## History
```
↑ Voxel engine updated to thin-instances
↑ Cut half precision (new scene)
↑ Real-time GPU path tracing
↑ Introducing ES modules
↑ Stable beta release
↑ Advancing to the next level (bakery)
↑ Major code rewrite (functions to classes)
↑ Features and uix overhaul
↑ New SPS particles to build the world
↑ I wrote a playground for learning Babylon.js
```

![screenshot](media/screenshot.jpg?raw=true "Screenshot")

Version 3.0.0 *(BJS 4)* to 4.2.2 *(BJS 6)*<br>
![screenshot](media/devshots.jpg?raw=true "Screenshot")

## License
Code released under the [MIT license](https://github.com/nimadez/voxel-builder/blob/main/LICENSE).

## Credits
- [Babylon.js](https://www.babylonjs.com/)
- [Three.js](https://threejs.org/)
- [Three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)
- [Electron](https://www.electronjs.org/)
- [MagicaVoxel](https://ephtracy.github.io/)
- [Google Material Icons](https://github.com/google/material-design-icons)
- [Blender](https://blender.org/)
- [Sketchfab](https://sketchfab.com/)
- [KhronosGroup](https://github.com/KhronosGroup/)
- [Shadertoy](https://www.shadertoy.com/)
- [vengi](https://mgerhardy.github.io/vengi/)
#
- [Allen Hastings](https://www.linkedin.com/in/allenhastings)
- [David Catuhe](https://twitter.com/deltakosh)
- [Erich Loftis](https://github.com/erichlof)
- [Eric Heitz](https://eheitzresearch.wordpress.com/772-2/)
- [Evan Wallace](https://github.com/evanw)
- [Garrett Johnson](https://github.com/gkjohnson)
- [Inigo Quilez](https://www.iquilezles.org/)
- [knightcrawler25](https://github.com/knightcrawler25)
- [Mr.doob](https://mrdoob.com/)
#

###### Available in [Babylon.js community demos](https://www.babylonjs.com/community/)

<a href="https://www.babylonjs.com/"><img width="200" src="https://raw.githubusercontent.com/BabylonJS/Brand-Toolkit/master/babylonjs_identity/fullColor/babylonjs_identity_color.svg"></img></a>
<a href="https://threejs.org/"><img width="80" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg"></img></a>
<a href="https://github.com/KhronosGroup/"><img width="120" src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/glTF_RGB_June16.svg"></img></a>
