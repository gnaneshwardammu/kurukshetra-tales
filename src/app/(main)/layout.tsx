import TopBar from "@/components/topbar";


export default function MainLayout({ children }: { children: string }) {
    return <div>
        <TopBar />
        {children}
    </div>
}