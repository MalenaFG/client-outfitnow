import { Tab, Tabs } from "react-bootstrap"
import CreateStylistForm from "../CreateStylistForm/CreateStylistForm"
import CreateUserForm from "../CreateUserForm/CreateUserForm"

const TabsSignupForms = () => {

    return (
        <div className="TabsSignupForms">
            <Tabs
                defaultActiveKey="user"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="user" title="User">
                    <CreateUserForm />
                </Tab>
                <Tab eventKey="stylist" title="Stylist">
                    <CreateStylistForm />
                </Tab>

            </Tabs>
        </div>
    )
}

export default TabsSignupForms