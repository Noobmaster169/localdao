/**
 * Function to upload a file to IPFS.
 * @param fileToUpload The file to be uploaded to IPFS
 * @returns The IPFS Hash of the uploaded data
 */
export async function uploadFile(fileToUpload :any){
    const data = new FormData();
    data.set("file", fileToUpload);
    //Make API Call to send data to IPFS
    const res = await fetch("/api/ipfs", {
      method: "POST",
      body: data
    });
    console.log(res);
    const resData = await res.json();
    return resData.IpfsHash;
}

/**
 *  Function to upload a JSON data to IPFS.
 *  @param jsonToUpload The JSON data to be uploaded to IPFS
 *  @returns The IPFS Hash of the uploaded data
 */
export async function uploadJSON(jsonToUpload :any){
    //Convert data into Blob and add into a Form Data
    const blob = new Blob([JSON.stringify(jsonToUpload)], { type: "application/json" });
    const data = new FormData();
    data.append("file", blob);
    //Make API Call to send data to IPFS
    const res = await fetch("/api/ipfs", {
        method: "POST",
        body: data,
    });
    const resData = await res.json();
    return resData.IpfsHash;
}

/**
 *  Function to fetch a JSON data from IPFS.
 *  @param jsonCid The hash of the JSON data
 *  @returns The fetched JSON data from IPFS
 */
export async function fetchJSON(jsonCid :string){
    const jsonLink = linkBuilder(jsonCid);
    //Fetch the data from IPFS then get the html data
    const res = await fetch(jsonLink);
    const html = await res.text(); 
    //Convert data to JSON
    const jsonData = JSON.parse(html);
    return jsonData;
}

/**
 * Function to fetch a data from IPFS
 * @param link The link to the IPFS data
 * @returns The fetched data from IPFS
 */
export async function fetchLinkData(link :string){
    //Fetch the data from IPFS then get the html data
    const res = await fetch(link);
    const html = await res.text(); 
    return html;
}

/**
 * Function to build a link from the IPFS hash.
 * @param cid The IPFS hash to be converted to a link
 * @returns The link to the IPFS data
 */
export function linkBuilder(cid :string){
    return `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`;
}

/** Unused Encryption Feature */
// import AES from 'crypto-js/aes';
// import SHA256 from 'crypto-js/sha256';
// import encHex from 'crypto-js/enc-hex';

// export async function encryptFile(fileToEncrypt, setFile) {
//     var reader = new FileReader();
//     reader.readAsDataURL(fileToEncrypt);
//     reader.onload = function () {
//         var encryptedData = AES.encrypt(reader.result, 'your-sceret-key').toString(); 
        
//         setFile(encryptedData);
//         return encryptedData;
//     };
// }

// export async function uploadEncryptedFile(fileToUpload){
//     console.log("Uploading Encrypted File")
//     const encryptedBlob = new Blob([fileToUpload], { type: "application/octet-stream" });    
//     const data = new FormData();
//     data.set("file", encryptedBlob);
//     const res = await fetch("/api/upload", {
//         method: "POST",
//         body: data
//     });
//     //Display Encrypted Data:
//     //console.log("Encrypted POST Response:", res);
    
//     const resData = await res.json();
//     return resData.IpfsHash;
// }