function submit() {
        browser.runtime.sendMessage({ action: "submitClicked" });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('icon').addEventListener('click', submit);

    document.getElementById('export_csv').addEventListener('click', function() {
        console.log('clicked div extract csv');
    });

    document.getElementById('export_pdf').addEventListener('click', function() {
        console.log('clicked div extract pdf');
    });
});