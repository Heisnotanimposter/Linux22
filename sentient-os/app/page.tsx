import { KernelProvider } from "@/system/kernel";
import { Membrane } from "@/components/desktop/Membrane";

export default function Home() {
  return (
    <KernelProvider>
      <Membrane />
    </KernelProvider>
  );
}
