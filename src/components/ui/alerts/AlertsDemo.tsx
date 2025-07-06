import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";
import Alert from "./Alert";

export default function AlertsDemo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Contextual feedback messages</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Alert type="success" title="Success!" closable>
                        Operation completed successfully.
                    </Alert>
                    <Alert type="warning" title="Warning!" closable>
                        Please verify the data before continuing.
                    </Alert>
                    <Alert type="error" title="Error!" closable>
                        An error occurred while processing the request.
                    </Alert>
                    <Alert type="info" title="Information" closable>
                        This is an informational message.
                    </Alert>
                    <Alert type="default" title="Default" closable>
                        This is a default message.
                    </Alert>
                </div>
            </CardContent>
        </Card>
    )
}