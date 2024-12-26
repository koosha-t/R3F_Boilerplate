# React Three Fiber (R3F) Boilerplate: Setting Up a TypeScript Project with Vite

## Prerequisites

- Node.js and npm installed
- Basic understanding of React and TypeScript

---

## Step 1: Create a New Vite Project

1. Open your terminal and run the following command to create a new Vite project:

   ```bash
   npm create vite@latest
   ```

2. When prompted, choose the following options:

   - **Project Name**: Enter your desired project name (e.g., `r3f-project`).
   - **Framework**: Select `React`.
   - **Variant**: Select `TypeScript`.

3. Navigate to the project directory:

   ```bash
   cd r3f-project
   ```

---

## Step 2: Install Required Dependencies

1. Install React Three Fiber and Three.js, along with essential utilities for 3D interactions and physics:

   ```bash
   npm install @react-three/fiber three @react-three/drei @react-three/cannon
   ```

   ```bash
   npm install @react-three/fiber three
   ```

2. Install additional libraries for controls, helper components, and physics:

   ```bash
   npm install @react-three/drei @react-three/cannon
   ```

---

## Step 3: Set Up the Project Structure

1. Inside the `src` directory, create a folder named `components`:

   ```bash
   mkdir src/components
   ```

   - **Purpose**: The `components` folder is used to organize reusable React components, keeping the project modular and maintainable. This is where we will place our 3D scene logic.

2. Create a new file for your 3D scene inside the `components` folder:

   ```bash
   touch src/components/Scene.tsx
   ```

   - **Purpose**: The `Scene.tsx` file will contain the code for rendering the 3D scene using React Three Fiber. It acts as a central component to define and display 3D objects, environment settings, a**Explanation**sed interactions.

---

## Step 4: Create the Scene Component

1. Open `src/components/Scene.tsx` and replace its contents with the following code:
   ```tsx
   import React from 'react';
   import { Canvas } from '@react-three/fiber';
   import { OrbitControls } from '@react-three/drei';
   import { Physics, useBox, usePlane } from '@react-three/cannon';
   import { Mesh } from 'three';

   const BoxWithPhysics = () => {
     const [ref] = useBox<Mesh>(() => ({ mass: 1, position: [0, 5, 0] }));
     return (
       <mesh ref={ref} castShadow receiveShadow>
         <boxGeometry args={[1, 1, 1]} />
         <meshStandardMaterial color="lightblue" />
       </mesh>
     );
   };

   const GroundPlane = () => {
     const [ref] = usePlane<Mesh>(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
     return (
       <mesh ref={ref} receiveShadow>
         <planeGeometry args={[100, 100]} />
         <meshStandardMaterial color="gray" />
       </mesh>
     );
   };

   const Scene: React.FC = () => {
     return (
       <Canvas shadows style={{ background: 'black' }} camera={{ position: [0, 5, 10], fov: 60 }}>
         {/* Ambient lighting */}
         <ambientLight intensity={0.4} />
         {/* Directional light simulating sunlight */}
         <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

         {/* Interactive controls for zooming and rotating */}
         <OrbitControls />

         {/* Physics-enabled scene */}
         <Physics>
           <BoxWithPhysics />
           <GroundPlane />
         </Physics>
       </Canvas>
     );
   };

   export default Scene;
   ```
   - **Explanation**:
     - **`Canvas`**: Creates a 3D rendering context.
     - **`ambientLight`**: Provides soft, global illumination.
     - **`directionalLight`**: Mimics sunlight, casting shadows and adding depth.
     - **`OrbitControls`**: Enables mouse interaction with the scene.
     - **`Physics`**: Adds a physics engine to the scene, allowing objects to interact realistically.
     - **`BoxWithPhysics`**: A dynamic box that falls and interacts with the ground due to gravity.
     - **`GroundPlane`**: A static plane acting as the ground for physics interactions.

---

## Step 5: Integrate the Scene Component

1. Open `src/App.tsx` (the main entry point for your React application) and modify it to include the `Scene` component:
   - **Context**: In a Vite React project, the `App.tsx` file acts as the root component of your application. This component is rendered into the DOM by `main.tsx` using ReactDOM. The `App` component typically organizes and provides structure to your app's UI, serving as a container for other components like `Scene`. It is indirectly referred to by the `index.html` file, which includes the `root` div where your entire React app is mounted.
   ```tsx
   import React from 'react';
   import Scene from './components/Scene';

   const App: React.FC = () => {
     return (
       <div style={{ width: '100vw', height: '100vh' }}>
         <Scene />
       </div>
     );
   };

   export default App;
   ```

---

## Step 6: Run t[he Development Server](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

1. [Start ](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the local development server (typically `http://localhost:5173`) to see your interactive 3D scene with physics.

---

## Step 7: Customize and Expand

1. Experiment with [different geometries, materials](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), and lights in the `Scene` component.
2. Add more physics-based interactions, such as bouncing spheres or draggable objects.
3. Continue learning with the official [React Three Fiber documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction).

---

## Conclusion

You have successfully set up a React Three Fiber project with TypeScript using Vite! This setup provides a solid foundation for creating interactive 3D applications with physics in React. Happy coding!
