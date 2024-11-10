import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
