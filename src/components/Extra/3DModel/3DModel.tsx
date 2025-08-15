"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Environment, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const faceSize = 3; // Cube face size
const textDepth = 0.05; // Thickness of letters

const FaceText = ({
    text,
    height,
    thicknessScale = 1,
    position,
    rotation,
    color = "white",
}: {
    text: string;
    height: number;
    thicknessScale?: number;
    position: [number, number, number];
    rotation: [number, number, number];
    color?: string;
}) => {
    return (
        <Center position={position} rotation={rotation}>
            <Text3D
                font="/fonts/Orbitron_Medium_Regular.json"
                size={height}
                height={textDepth}
                curveSegments={12}
                bevelEnabled={false}
                scale={[thicknessScale, 1, 1]}
            >
                {text}
                <meshStandardMaterial color={color} />
            </Text3D>
        </Center>
    );
};

function CubeModel({
    isDragging,
    velocity,
    targetRotation,
}: {
    isDragging: React.MutableRefObject<boolean>;
    velocity: React.MutableRefObject<{ x: number; y: number }>;
    targetRotation: { x: number; y: number };
}) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (!groupRef.current) return;
        if (isDragging.current) {
            groupRef.current.rotation.x += velocity.current.x;
            groupRef.current.rotation.y += velocity.current.y;
        } else {
            groupRef.current.rotation.x +=
                (targetRotation.x - groupRef.current.rotation.x) * 0.05;
            groupRef.current.rotation.y +=
                (targetRotation.y - groupRef.current.rotation.y) * 0.05;
        }
    });

    const half = faceSize / 2 + textDepth / 2;

    return (
        <Center>
            <group
                ref={groupRef}
                rotation={[0.5, 0.6, 0]} // Tilt so top 5.0 is visible
            >
                {/* Rounded cube base */}
                <RoundedBox args={[faceSize, faceSize, faceSize]} radius={0.15} smoothness={4}>
                    <meshStandardMaterial color="#222" />
                </RoundedBox>

                {/* Front */}
                <FaceText text="C" height={2.5} position={[0, 0, half]} rotation={[0, 0, 0]} />
                {/* Back */}
                <FaceText text="C" height={2.5} position={[0, 0, -half]} rotation={[0, Math.PI, 0]} />
                {/* Left */}
                <FaceText text="C" height={2.5} position={[-half, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
                {/* Right */}
                <FaceText text="C" height={2.5} position={[half, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
                {/* Top */}
                <FaceText text="5.0" height={1.7} thicknessScale={0.7} position={[0, half, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                {/* Bottom */}
                <FaceText text="5.0" height={1.7} thicknessScale={0.7} position={[0, -half, 0]} rotation={[Math.PI / 2, 0, 0]} />
            </group>
        </Center>
    );
}

export default function RotatingCubeComponent() {
    const isDragging = useRef(false);
    const lastPos = useRef({ x: 0, y: 0 });
    const velocity = useRef({ x: 0, y: 0 });
    const [targetRotation] = useState({ x: 0.5, y: 0.6 }); // Match initial tilt

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        velocity.current = { x: dy * 0.005, y: dx * 0.005 };
        lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
        isDragging.current = false;
    };

    return (
        <div
            className="relative w-full h-full"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ alpha: true }}
                style={{ background: "transparent", width: "100%", height: "100%" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <CubeModel isDragging={isDragging} velocity={velocity} targetRotation={targetRotation} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
