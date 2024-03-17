import { useRouteError } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
    const error= useRouteError();

    return (
        <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-lg text-gray-800 mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="italic text-gray-600">{error?.statusText || error?.message}</p>
        </div>
    );
}

export default ErrorPage;
