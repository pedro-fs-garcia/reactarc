import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../cards/card";
import BasicLoader from "./BasicLoader";
import Skeleton from "./Skeleton";

export default function LoadersDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Skeleton Loaders</CardTitle>
                <CardDescription>Loading placeholders for better UX</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6 mb-3">
                    <h4 className="text-sm font-medium text-secondary mb-3">Basic Loader</h4>
                    <BasicLoader />
                </div>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Text Skeleton</h4>
                        <div className="space-y-2">
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width="60%" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Profile Skeleton</h4>
                        <div className="flex gap-4">
                            <Skeleton variant="circular" width={40} height={40} />
                            <div className="flex-1 space-y-2">
                                <Skeleton variant="text" width="100%" />
                                <Skeleton variant="text" width="70%" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-secondary mb-3">Card Skeleton</h4>
                        <Skeleton variant="rectangular" width="100%" height={120} />
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}