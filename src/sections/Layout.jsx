export default function Layout({ children }) {
    return (
        <div className="layout relative space-y-16 px-6 md:px-8 lg:px-12 2xl:px-32">
            {children}
        </div>
    );
}
