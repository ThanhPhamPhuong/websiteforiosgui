const CLIENT_ID = '417844596255-7rtlq3qhv9dm2cequp31003b4vdg2qkg.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDUOnX3h1S21t3IpzvOwG1XXaltzb3sbR4';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        console.log('Google Drive API client initialized');
    });
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const metadata = {
            'name': file.name,
            'mimeType': file.type
        };

        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', file);

        gapi.client.drive.files.create({
            resource: metadata,
            media: {
                mimeType: file.type,
                body: form
            }
        }).then(function (response) {
            console.log('File uploaded successfully:', response);
            alert('File uploaded successfully!');
        }, function (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file.');
        });
    } else {
        alert('Please select a file to upload.');
    }
}
