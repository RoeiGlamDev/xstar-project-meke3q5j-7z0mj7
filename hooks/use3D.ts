import { useEffect, useRef } from 'react';

const use3D = (modelUrl: string) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('webgl');
        if (!context) return;

        // Initialize WebGL and load the 3D model
        const loadModel = async () => {
            // Load the model using a library or custom logic
            // Example: await load3DModel(context, modelUrl);
        };

        loadModel();

        return () => {
            // Clean up resources if necessary
        };
    }, [modelUrl]);

    return canvasRef;
};

export default use3D;