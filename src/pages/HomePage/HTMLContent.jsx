import React, { useRef, Suspense, useEffect } from "react";
import styled from "styled-components";
import { useGLTFLoader, OrbitControls } from "drei";
import { useControl } from "react-three-gui"

const Model = () => {
    const gltf = useGLTFLoader('/scene.gltf', true);
    return <primitive object={gltf.scene} dispose={null} />;
}

const HTMLContent = () => {

    const orbit = useRef()
    const transform = useRef()
    const mode = useControl("mode", { type: "select", items: ["translate"] })
    useEffect(() => {
        if (transform.current) {
            const controls = transform.current
            controls.setMode(mode)
            const callback = event => (orbit.current.enabled = !event.value)
            controls.addEventListener("dragging-changed", callback)
            return () => controls.removeEventListener("dragging-changed", callback)
        }
    })

    return (
        <> <Suspense fallback={null}>
            <mesh position={[0, 0, 0]}><Model /></mesh></Suspense>
            <OrbitControls ref={orbit} />
        </>
    );
}
// style
const StyledContainerDiv = styled.div`
    margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTitleH1 = styled.h1`
  font-size: 10rem;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  text-shadow: black 0.1em 0.1em 0.2em;
`;
export default HTMLContent;
