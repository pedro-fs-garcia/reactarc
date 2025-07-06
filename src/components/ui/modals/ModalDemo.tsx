import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";
import Modal from "./Modal";
import { useState } from "react";

export default function ModalDemo() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        < Card >
            <CardHeader>
                <CardTitle>Modal</CardTitle>
                <CardDescription>Overlay dialogs with smooth animations</CardDescription>
            </CardHeader>
            <CardContent>
                <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-700 transition-colors"
                >
                    Open Modal
                </button>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Example Modal" size="md">
                    <p className="text-secondary mb-4">
                        This is an example of a reusable modal with smooth animations and theme integration.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="px-4 py-2 bg-background-100 text-secondary border border-medium rounded-lg hover:bg-background-200 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </Modal>
            </CardContent>
        </Card >
    )
}