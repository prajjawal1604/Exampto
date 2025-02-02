var id = document.getElementById("h1").dataset.id;
var resultsDiv = document.getElementById('results');

window.onload = () => {
    loadResults();
}


// Loads the results of the user
const loadResults = async () => {
    let resultsRequest = await fetch(`/api/user/myresults`).then(res => res.json());

    if(resultsRequest.status !== 'success') showAlert(resultsRequest.message, 'error');
    else {
        let results = resultsRequest.data;
        results.forEach( result => {
            resultsDiv.innerHTML += `
            <div class="resultDiv">
                <p>${result.exam.name}</p>
                <p>${result.marksAllocated}</p>
                <p>${result.rank}</p>
                <p>${result.percentile}</p>
            </div>`;
        });
    }
}