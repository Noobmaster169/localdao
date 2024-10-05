'use client'
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'
import React from 'react'

const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch('/api/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proof),
    })
    if (!res.ok) {
        throw new Error('It happens here');
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
            app_id="app_staging_28012a01bf9a8f267acb4ffd2621687b"
            action="testing_dao"
            // On-chain only accepts Orb verifications
            verification_level={VerificationLevel.Orb}
            handleVerify={handleVerify}
            onSuccess={onSuccess}>
            {({ open }) => (
            <button
                onClick={open}
            >
                Verify with World ID
            </button>
            )}
        </IDKitWidget>
    );
}