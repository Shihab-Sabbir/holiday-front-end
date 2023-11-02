import SideBar from "./components/admin/sideBar/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="">
        <div className="max-w-[1400px] mx-auto flex items-start">
          <div className="lg:w-[250px]">
            <SideBar />
          </div>
          <div className="flex-1 p-[20px]">{children}</div>
        </div>
      </div>
  );
}
