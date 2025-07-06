import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cards/card";
import Toggle from "./Toggle";
import Radio from "@/components/ui/inputs/Radio";
import Checkbox from "./Checkbox";
import { useState } from "react";
import Dropdown from "./Dropdown";
import BasicInput from "./BasicInput";
import { ChevronRight, Mail, Phone, Settings, TextCursorInput, User } from "lucide-react";

export default function InputDemo() {
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [radioValue, setRadioValue] = useState("")
    const [toggleValue, setToggleValue] = useState(false)
    const [dropdownValue, setDropdownValue] = useState<string | undefined>(undefined)
    const radioOptions = [
        { value: "option1", label: "Option 1", description: "Description for option 1" },
        { value: "option2", label: "Option 2", description: "Description for option 2" },
        { value: "option3", label: "Option 3", description: "Description for option 3" },
    ]
  const dropdownOptions = [
    { value: "user", label: "User", icon: <User size={16} /> },
    { value: "email", label: "Email", icon: <Mail size={16} /> },
    { value: "phone", label: "Phone", icon: <Phone size={16} /> },
    { value: "settings", label: "Settings", icon: <Settings size={16} /> },
  ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>User Inputs</CardTitle>
                <CardDescription>Interactive form elements with validation states</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div>
                        <h4 className="text-lg font-medium text-secondary mb-4">Dropdown</h4>
                        <Dropdown
                            options={dropdownOptions}
                            value={dropdownValue}
                            onChange={setDropdownValue}
                            placeholder=""
                            label="choose one"
                            disabled={false}
                            error=""
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-secondary mb-4">Radio Group</h4>
                        <Radio options={radioOptions} value={radioValue} onChange={setRadioValue} name="example-radio" />
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-secondary mb-4">Checkbox</h4>
                        <Checkbox
                            checked={checkboxValue}
                            onChange={setCheckboxValue}
                            label="Accept terms and conditions"
                            description="You agree to our terms of use"
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-secondary mb-4">Toggle Switch</h4>
                        <Toggle
                            checked={toggleValue}
                            onChange={setToggleValue}
                            label="Push notifications"
                            description="Receive real-time notifications"
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-secondary mb-4">Basic text input</h4>
                        <BasicInput
                            label="Insert text"
                            description="Basic text input"
                            required={true}
                            leftIcon={<TextCursorInput/>}
                            rightIcon={<ChevronRight/>}
                            error=""
                            variant='default'
                            id=""
                            className=""
                        ></BasicInput>
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}