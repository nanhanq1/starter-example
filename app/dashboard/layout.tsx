import SideNav from '@/app/ui/dashboard/sidenav';
//childern 用于部分渲染 根据文件的路径 自动选择children 但是注意文件名字必须为page.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}