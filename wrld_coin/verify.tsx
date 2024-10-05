'use client'
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'

const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch('/api/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proof),
    })
    if (!res.ok) {
        throw new Error('Failed to verify proof');
    }
}

const onError = (error: any) => {
    console.error('Error occurred: ', error);
}

const onSuccess = (result: ISuccessResult) => {
    console.log('World ID popup closed: ', result);
    window.location.href = "/success"; // redirect them to the success page once done.
}

export default function Verify() {
    return (
        <IDKitWidget
            app_id="your app id" // obtained from the Developer Portal
            action="your action id" // obtained from the Developer Portal
            onSuccess={onSuccess} // callback when the modal is closed
            onError={onError} // callback when an error occurs
            handleVerify={handleVerify} // callback when the proof is received
            verification_level={VerificationLevel.Orb}
        >
            {({ open }) => 
                // This is the button that will open the IDKit modal
                <button onClick={open}>Verify with World ID</button>
            }
        </IDKitWidget>
    );
}