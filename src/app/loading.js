import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                <LoadingSpinner size="lg" color="green" />
                <p className="mt-4 text-green-600 font-mono text-lg animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
