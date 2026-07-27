import TorusRing from "./TorusRing";
import Terrain from "./Terrain";
import { Canvas } from "@react-three/fiber";
import EnergyCube from "./Cube";
import HelicalSpiral from "./HelicalSpiral";
import QuantumCore from "./QuantumCore";
import OrbitalPlanet from "./OrbitalPlanet";
import WaveSurface from "./WaveSurface";
const 3dSets = () => {
    return (
        <div className="min-h-screen bg-black p-10">
            <div className="grid grid-cols-4 gap-8">
                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <TorusRing />
                </div>

                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <Canvas camera={{ position: [0, 8, 16], fov: 45 }}>
                        <ambientLight intensity={2} />
                        <Terrain />
                    </Canvas>
                </div>

                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <Canvas camera={{ position: [5, 4, 6], fov: 40 }}>
                        <EnergyCube />
                    </Canvas>
                </div>

                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <Canvas camera={{ position: [0, 1, 8], fov: 40 }}>
                        <HelicalSpiral />
                    </Canvas>
                </div>
                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
                        <QuantumCore />
                    </Canvas>
                </div>
                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                        <OrbitalPlanet />
                    </Canvas>
                </div>
                <div className="relative h-[420px] rounded-3xl border border-white/10 bg-black overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                        <p className="text-white/40 text-sm">01</p>
                        <div className="w-6 h-px bg-white/30 my-2" />
                        <h3 className="text-white text-xl tracking-wide">
                            DIGITAL TERRAIN
                        </h3>
                    </div>
                    <Canvas camera={{ position: [0, 3, 8], fov: 40 }}>
                        <WaveSurface />
                    </Canvas>
                </div>
            </div>
        </div>
    )
};

export default 3dSets;