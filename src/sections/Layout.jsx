export default function Layout({ children }) {
    return (
        <div className="layout relative space-y-16 px-5 md:px-6 lg:px-8">
            {children}
        </div>
    );
}
