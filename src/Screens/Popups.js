import { Button, Modal } from 'antd'
import React, { useState } from 'react'

export default function Popups() {

    const [message, setMessage] = useState("")

    const handleEdit = () => {
        const enteredFood = prompt('Enter Your Name:', "JALA Academy- A Place to find your Dream Job");
        setMessage(enteredFood);

    }

    const windowOpen = (link) => {
        window.open(link, "hello", "width=200,height=200")
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 20 }}>
                <Button type="primary" onClick={() => windowOpen("https://www.google.com/")}>
                    Popup One
                </Button>
                <Button type="primary" onClick={() => windowOpen("https://www.tutorialspoint.com/index.htm")} style={{ height: 40, width: 190 }}
                >Popup Two
                </Button>
                <Button type="primary" onClick={() => windowOpen("https://magnus.jalatechnologies.com/Home/Popup")} style={{ height: 40, width: 190 }}>
                    Popup Three
                </Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 20 }}>
                <Button type="primary" onClick={() => window.open('/')} style={{ height: 40, width: 190 }}>
                    Popup Duplicate
                </Button>
                <Button type="primary" onClick={() => windowOpen("https://www.javatpoint.com/java-tutorial")} style={{ height: 40, width: 190 }}>
                    Duplicate Tab
                </Button>
                <Button type="primary" onClick={ showModal } style={{ height: 40, width: 190 }}>
                    In Window Popup
                </Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 20 }}>
                <Button type="primary" onClick={() => alert("This is an alert Box!")} style={{ height: 40, width: 190 }}>Alert Box</Button>
                <Button type="primary" onClick={() => window.confirm("Confirm Message Box")} style={{ height: 40, width: 190 }}>Confirm Box</Button>
                <Button type="primary" onClick={handleEdit} style={{ height: 40, width: 190 }}>Prompt Box</Button>
            </div>

            <Modal title="Popup One" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Popup One body..</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </Modal>

            <h2 style={{ color: 'maroon' }}>{message}</h2>
        </div>
    )
}
