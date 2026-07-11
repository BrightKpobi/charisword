import MagaNavar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen relative">
      <MagaNavar />
        {children}

       <Footer />

      </main>
    </>
  );
}
